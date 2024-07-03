"use client"
import { createContext, useState, useContext, useEffect } from "react";
import { filterFeedbacks, getFeedbacks, newFeedback } from '../api/userFeedback';
import { useRouter } from 'next/navigation';
import { toast } from "sonner";

export const FeedContext = createContext();

export const useFeed = () => {
    const context = useContext(FeedContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
}

export const FeedProvider = ({ children }) => {
    const [allFeedbacks, setAllFeedbacks] = useState([]);
    const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);
    const [showInitialFeedbacks, setShowInitialFeedbacks] = useState(null);

    const getAllFeedbacks = async () => {
        try {
            const { data } = await getFeedbacks();
            setAllFeedbacks(data);
            setShowInitialFeedbacks(true);
        }
        catch (error) {
            console.log(error?.response?.data?.message);
        }
    }
    
    const createFeedback = async (data) => {
        const res = await newFeedback(data);
        console.log(res);
    }

    const filterFeeds = async (date) => {
        try {
            const res = await filterFeedbacks(date);
            setFilteredFeedbacks(res.data);
            setShowInitialFeedbacks(false);
        }
        catch (error) {
            toast(error?.response?.data?.message, {
                description: new Date(Date.now()).toLocaleString('en-us'),
                position: "bottom-right",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                }})
        }
    }

    return (
        <FeedContext.Provider value={{
            getAllFeedbacks,
            allFeedbacks,
            filteredFeedbacks,
            createFeedback,
            filterFeeds,
            filteredFeedbacks,
            showInitialFeedbacks,
            setShowInitialFeedbacks
        }}>
            { children }
        </FeedContext.Provider>
    )
}