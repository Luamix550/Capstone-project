import { mailByCreatedFeedBack } from '../handlers/SendMail.js';
import Feedback from '../models/feedback.model.js'

/**
 * Retrieve all feedbacks for the authenticated user.
 * 
 * Endpoint: GET /api/feedbacks
 * 
 * @returns {Object[]} List of feedbacks:
 * [
 *    {
 *      userId: string,
 *      title: string,
 *      description: string,
 *      stars: number,
 *      createdAt: Date,
 *      updatedAt: Date,
 *    },
 *    ...
 * ]
 * 
 * @throws {404} If no feedbacks are found for the user.
 * @throws {500} If there is a server error while retrieving feedbacks.
 */
export const allFeedbacks = async (req, res) => {
    try {
        const tasks = await Feedback.find({ userId: req.userId });
        
        if (tasks.length === 0) return res.status(404).json({ status: 'error', message: ['No feedbacks found'] });

        res.json(tasks);
    } catch (error) {
        console.error('Error fetching feedbacks:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};

/**
 * Retrieve a specific feedback by ID.
 * 
 * Endpoint: GET /api/feedbacks/:id
 * 
 * @param {string} req.params.id - ID of the feedback to retrieve.
 * 
 * @returns {Object} Feedback data:
 * 
 * @throws {404} If the feedback with the specified ID is not found.
 * @throws {500} If there is a server error while retrieving the feedback.
 */
export const getFeedback = async (req, res) => {
    const { id } = req.params;
    try {
        const feedbackFound = await Feedback.findById({ _id: id });

        if (!feedbackFound) return res.status(404).json({ status: 'error', message: ['Feedback not found'] });

        res.json(feedbackFound);
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}



/**
 * Retrieve a specific feedback by ID.
 * 
 * Endpoint: GET /api/feedbacks/:id
 * 
 * @param {string} req.params.id - ID of the feedback to retrieve.
 * 
 * @returns {Object} Feedback data:
 * {
 *    userId: string,
 *    title: string,
 *    description: string,
 *    stars: number,
 *    createdAt: Date,
 *    updatedAt: Date,
 * }
 * 
 * @throws {404} If the feedback with the specified ID is not found.
 * @throws {500} If there is a server error while retrieving the feedback.
 */
export const filterFeedbackDate = async (req, res) => {
    const { date } = req.body;
    try {
        const feedbacks = await Feedback.find({ userId: req.userId });

        const filterDate = feedbacks.filter(feedback => {
            const createdDate = feedback.createdAt.toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
            return createdDate === date; 
        })

        if (filterDate.length === 0) return res.status(404).json({ status: 'error', message: ['Feedbacks not found'] });

        res.json(filterDate);

    } catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};


/**
 * Create a new feedback.
 * 
 * Endpoint: POST /api/feedbacks
 * 
 * @param {string} req.body.title - Title of the feedback.
 * @param {string} req.body.description - Description of the feedback.
 * @param {number} req.body.current_raiting - Rating/stars given in the feedback.
 * 
 * @returns {Object} Created feedback data:
 * {
 *    userId: string,
 *    title: string,
 *    description: string,
 *    stars: number,
 *    createdAt: Date,
 *    updatedAt: Date,
 * }
 * 
 * @throws {500} If there is a server error while creating the feedback.
 */
export const newFeedback = async (req, res) => {
    try {
        const userId = req.userId;
        const { title, description, current_rating, category } = req.body;

        const newFeedback = new Feedback({
            userId,
            title,
            description,
            current_rating,
            category
        });

        const saveFeedback = await newFeedback.save();

        await mailByCreatedFeedBack(userId, saveFeedback);

        res.status(201).json({
            userId: saveFeedback.userId,
            title: saveFeedback.title,
            description: saveFeedback.description,
            status: saveFeedback.status,
            rating: saveFeedback.current_rating,
            createdAt: saveFeedback.createdAt,
            updatedAt: saveFeedback.updatedAt,
        });
    } catch (error) {
        console.error('Error creating feedback:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};



/**
 * Update a specific feedback by ID.
 * 
 * Endpoint: PUT /api/feedbacks/:id
 * 
 * @param {string} req.params.id - ID of the feedback to update.
 * @param {Object} req.body - Updated fields for the feedback.
 * 
 * @returns {Object} Updated feedback data:
 * {
 *    userId: string,
 *    title: string,
 *    description: string,
 *    stars: number,
 *    createdAt: Date,
 *    updatedAt: Date,
 * }
 * 
 * @throws {404} If the feedback with the specified ID is not found.
 * @throws {500} If there is a server error while updating the feedback.
 */
export const updateFeedback = async (req, res) => {
    const { id } = req.params;
    try {
        const feedback = await Feedback.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        if (!feedback) return res.status(404).json({ status: 'error', message: 'Feedback not found' });

        res.json(feedback);

    } catch (error) {
        console.error('Error updating feedback:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
}
