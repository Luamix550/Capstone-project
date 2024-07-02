"use client"
import { createContext, useState, useContext } from "react";
import { getFeedbacks, newFeedback } from '../api/userFeedback';
import { useRouter } from 'next/navigation';
import { toast } from "sonner";

export const FeedContext = createContext();

export const useFeed = () => {
    const context = useContext(FeedContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
}

export const FeedProvider = ({ children }) => {
    const router = useRouter();
    const [allFeedbacks, setFeedback] = useState([]);

    const getAllFeedbacks = async () => {
        try {
            const { data } = await getFeedbacks();
            setFeedback(data);
        }
        catch (error) {
            console.log(error?.response?.data?.message);
        }
    }

    const createFeedback = async (data) => {
        const res = await newFeedback(data);
        console.log(res);
    }

    return (
        <FeedContext.Provider value={{
            getAllFeedbacks,
            allFeedbacks,
            createFeedback
        }}>
            { children }
        </FeedContext.Provider>
    )
}