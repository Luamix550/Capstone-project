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
    const tasks = await Feedback.find({ userId: req.userId }).populate('userId');
    if (tasks.length === 0) return res.status(404).json({ status: 'error', message: 'No feedbacks found' })
    res.json(tasks);
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
export const getFeedback = async (req, res) => {
    const feedback = await Feedback.findById(req.params.id);
    
    if (!feedback) return res.status(404).json({ status: 'error', message: 'Feedback not found' });
    res.json(feedback);
}

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
    const userId = req.userId;
    const { title, description, current_raiting } = req.body;

    const newFeedback = Feedback({
        userId,
        title,
        description,
        current_raiting,
    });

    const saveFeedback = await newFeedback.save();

    await mailByCreatedFeedBack(userId, saveFeedback);

    res.json({
        userId: saveFeedback.userId,
        title: saveFeedback.title,
        description: saveFeedback.description,
        stars: saveFeedback.current_raiting,
        createdAt: saveFeedback.createdAt,
        updatedAt: saveFeedback.updatedAt,
    });
}


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
    const feedback = await Feedback.findByIdAndUpdate(id, req.body, {
        new: true,
    });

    if (!feedback) return res.status(404).json({ status: 'error', message: 'Feedback not found' });
    res.json(feedback);
}

/**
 * Delete a specific feedback by ID.
 * 
 * Endpoint: DELETE /api/feedbacks/:id
 * 
 * @param {string} req.params.id - ID of the feedback to delete.
 * 
 * @returns {number} Status code 204 indicating successful deletion.
 * 
 * @throws {404} If the feedback with the specified ID is not found.
 * @throws {500} If there is a server error while deleting the feedback.
 */
export const deleteFeedback = async (req, res) => {
    const { id } = req.params;
    const feedback = await Feedback.findByIdAndDelete(id);
    if(!feedback) return res.status(404).json({ status: 'error', message: 'Feedback not found' });
    return res.sendStatus(204);
}