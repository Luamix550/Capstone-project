import mongoose from 'mongoose';

export const connectDb = () => {
    try {
        mongoose.connect('mongodb://localhost/SmartTalent');
        console.log('Database is connected');
    }
    catch (error) {
        console.log(error);
    }
}