import mongoose, { Schema } from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const newFeedback = new mongoose.Schema({
    _id: {
        type: String,
        default: function () {
            return new ObjectId().toString()
        }
    },
    userId: {
        type: String,
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
        enum: ['Not Started', 'In Progress', 'Done', 'Archived'],
        default: 'Not Started',
    },
    category: {
        type: String,
        enum: ['Congratulations', 'Complaint', 'Suggestion'],
    }
}, {
    timestamps: true,
});

export default mongoose.model('Feedback', newFeedback);