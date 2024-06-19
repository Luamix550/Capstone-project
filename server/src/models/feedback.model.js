import mongoose, { Schema } from "mongoose";

const newFeedback = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        content: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    current_rating: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Done'],
        default: 'Not Started',
    },
}, {
    timestamps: true,
});

export default mongoose.model('Feedback', newFeedback);