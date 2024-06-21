import Feedback from '../models/feedback.model.js'
import { mailByStatusFeedBack } from '../handlers/SendMail.js';

export const allFeedbacks = async (req, res) => {
    const feedbacks = await Feedback.find();
    
    if (feedbacks.length === 0) return res.status(404).json({ status: 'error', message: 'No feedbacks found in the database.' });
    res.json(feedbacks);
}

export const feedbackUser = async (req, res) => {
    const { id } = req.params;
    const feedback = await Feedback.find({ _id: id });

    if (feedback.length === 0) return res.status(404).json({ status: 'error', message: 'Feedback not found' });
    res.json(feedback)
}

export const updateFeedback = async (req, res) => {
    const { id } = req.params;
    const feedback = await Feedback.findByIdAndUpdate(id, req.body, {
        new: true,
    });

    if (!feedback) return res.status(200).json({ status: 'error', message: 'Feedback not found' });

    const date = feedback.updatedAt.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    })
    await mailByStatusFeedBack(feedback.userId, date, feedback);

    res.json(feedback);
}