"use client";
import { createContext, useState, useContext } from "react";
import { filterFeedbacks, getFeedbacks, newFeedback } from '../api/userFeedback'; // Importing API functions for user feedback
import { toast } from "sonner"; // Importing toast notifications

// Creating the feedback context
export const FeedContext = createContext();

// Custom hook to use the feedback context
export const useFeed = () => {
    const context = useContext(FeedContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
}

// Feedback context provider
export const FeedProvider = ({ children }) => {
    const [allFeedbacks, setAllFeedbacks] = useState([]); // State to store all feedbacks
    const [filteredFeedbacks, setFilteredFeedbacks] = useState([]); // State to store filtered feedbacks
    const [showInitialFeedbacks, setShowInitialFeedbacks] = useState(true); // State to manage initial feedbacks visibility

    // Function to fetch all feedbacks
    const getAllFeedbacks = async () => {
        try {
            const { data } = await getFeedbacks();
            setAllFeedbacks(data);
        } catch (error) {
            console.log(error?.response?.data?.message);
        }
    }
    
    // Function to create new feedback
    const createFeedback = async (data) => {
        try {
            const res = await newFeedback(data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    // Function to filter feedbacks by date
    const filterFeeds = async (date) => {
        try {
            const res = await filterFeedbacks(date);
            setFilteredFeedbacks(res.data);
            setShowInitialFeedbacks(false);
        } catch (error) {
            toast.error(error?.response?.data?.message, {
                description: new Date(Date.now()).toLocaleString('en-us'),
                position: "bottom-right",
                action: {
                    label: "Close",
                    onClick: () => console.log("Close"),
                },
                className: 'custom-toast'
            });
        }
    }

    // Provides the feedback context with necessary values and functions
    return (
        <FeedContext.Provider value={{
            getAllFeedbacks,
            allFeedbacks,
            filteredFeedbacks,
            createFeedback,
            filterFeeds,
            showInitialFeedbacks,
            setShowInitialFeedbacks,
            setAllFeedbacks
        }}>
            { children }
        </FeedContext.Provider>
    )
}
