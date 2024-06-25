import Feedback from '../models/feedback.model.js';
import User from '../models/user.model.js';
import { mailByStatusFeedBack } from '../handlers/SendMail.js';


/**
 * Retrieves all feedback entries from the database.
 * 
 * Endpoint: GET /api/allFeedbacks
 * 
 * @returns {Object[]} Array of feedback objects.
 * @throws {404} If no feedbacks are found in the database.
 * @throws {500} If there is a server error while fetching feedbacks.
 */
export const allFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        
        if (feedbacks.length === 0) return res.status(404).json({ status: 'error', message: 'No feedbacks found in the database.' });
        
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'An error occurred while fetching feedbacks.' });
    }
}



/**
 * Retrieves a specific feedback entry by its ID.
 * 
 * Endpoint: GET /api/feedbacks/:id
 * 
 * @param {string} req.params.id - ID of the feedback to retrieve.
 * @returns {Object} The feedback object.
 * @throws {404} If the specified feedback ID is not found.
 * @throws {500} If there is a server error while fetching the feedback.
 */
export const feedbackUser = async (req, res) => {
    const { id } = req.params;

    try {
        const feedback = await Feedback.findById(id);

        if (!feedback) return res.status(404).json({ status: 'error', message: 'Feedback not found' });

        res.json(feedback);
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'An error occurred while fetching the feedback' });
    }
};

/**
 * Updates a specific feedback entry by its ID.
 * 
 * Endpoint: PUT /api/feedback/:id
 * 
 * @param {string} req.params.id - ID of the feedback to update.
 * @param {Object} req.body - Updated feedback data.
 * @returns {Object} The updated feedback object.
 * @throws {404} If the specified feedback ID is not found.
 * @throws {500} If there is a server error while updating the feedback.
 */
export const updateFeedback = async (req, res) => {
    const { id } = req.params;

    try {
        const feedback = await Feedback.findByIdAndUpdate(id, req.body, {
            new: true
        });

        if (!feedback) return res.status(404).json({ status: 'error', message: 'Feedback not found' });

        const date = feedback.updatedAt.toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });

        if (req.body.hasOwnProperty('status')) await mailByStatusFeedBack(feedback.userId, date, feedback);

        res.json(feedback);
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'An error occurred while updating the feedback' });
    }
};

/**
 * Retrieves all user entries from the database.
 * 
 * Endpoint: GET /api/users
 * 
 * @returns {Object[]} Array of user objects.
 * @throws {404} If no users are found in the database.
 * @throws {500} If there is a server error while fetching users.
 */
export const allUsers = async (req, res) => {
    try {
        const users = await User.find();

        if (users.length === 0) return res.status(404).json({ status: 'error', message: 'No users found in the database' });
        res.json(users)

    } catch (error) {
        res.status(500).json({ status: 'error', message: 'An error occurred while fetching users.' });
    }
}

/**
 * Retrieves a specific user entry by its ID.
 * 
 * Endpoint: GET /api/user/:id
 * 
 * @param {string} req.params.id - ID of the user to retrieve.
 * @returns {Object} The user object.
 * @throws {404} If the specified user ID is not found.
 * @throws {500} If there is a server error while fetching the user.
 */
export const user = async (req, res) => {
    const { id } = req.params;
    try {
        const userFound = await User.findById(id);

        if (!userFound) return res.status(404).json({ status: 'error', message: 'No user found' });
        res.json(userFound)

    } catch (error) {
        res.status(500).json({ status: 'error', message: 'An error occurred while fetching user.' });
    }
}

/**
 * Updates a specific user entry by its ID.
 * 
 * Endpoint: PUT /api/user/:id
 * 
 * @param {string} req.params.id - ID of the user to update.
 * @param {Object} req.body - Updated user data.
 * @returns {Object} The updated user object.
 * @throws {404} If the specified user ID is not found.
 * @throws {500} If there is a server error while updating the user role.
 */
export const updateUserRol = async (req, res) => {
    const { id } = req.params;

    try {
        const userFound = await User.findByIdAndUpdate(id, req.body, {
            new: true
        });

        if (!userFound) return res.status(404).json({ status: 'error', message: 'User not found' });

        res.json(userFound);
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'An error occurred while updating the user role' });
    }
};