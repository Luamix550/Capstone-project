import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const newUser = new mongoose.Schema({
    _id: {
        type: String,
        default: function () {
            return new ObjectId().toString()
        }
    },
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: ''
    },
    rol: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User',
    },
}, {
    timestamps: true,
});

export default mongoose.model('User', newUser);