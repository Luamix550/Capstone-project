"use client";
import { useContext, createContext, useState } from "react";
import { getAllFeedbacks, getAllUsers, updateFeed, updateRol } from "../api/admin";
import { toast } from "sonner";
import { useRouter } from 'next/navigation';

// Creating the admin context
export const AdminContext = createContext();

// Custom hook to use the admin context
export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) throw new Error('useAdmin must be used within AdminProvider');
    return context;
}

// Admin context provider
export const AdminProvider = ({children}) => {
    const router = useRouter();
    const [feedbacks, setFeedbacks] = useState([]); // State to store feedbacks
    const [originalFeedbacks, setOriginalFeedbacks] = useState([]); // State to store original feedbacks
    const [originalUsers, setOriginalUsers] = useState([]); // State to store original users
    const [users, setUsers] = useState([]); // State to store users

    // Function to fetch all feedbacks
    const getFeedbacks = async () => {
        try {
            const res = await getAllFeedbacks();
            const data = res?.data;
            setFeedbacks(data);
            setOriginalFeedbacks(data);
        }
        catch(error) {
            console.log(error.response?.data?.message)
        }
    } 

    // Function to fetch all users
    const getUsers = async () => {
        try {
            const res = await getAllUsers();
            const users = res?.data;
            setUsers(users);
            setOriginalUsers(users)
        }
        catch (error) {
            console.log(error);
        }
    }

    // Function to update user role
    const updateUserRol = async (data) => {
        const { _id }  = data;
        const { newRol } = data;
        try {
            const res = await updateRol({ _id, rol: newRol });
            toast.success('The role has been successfully updated.', {
                description: new Date(Date.now()).toLocaleString('en-us'),
                position: "bottom-right",
                action: {
                    label: "Close",
                },
                className: 'custom-toast'
            });
        }
        catch(error) {
            console.log(error);
        }
    }

    // Function to update a feedback
    const updateFeedback = async (data) => {
        try {
            const res = await updateFeed(data);
        }
        catch(error) {
            console.log(error);
        }
    }

    // Returns the context provider with necessary values and functions
    return (
        <AdminContext.Provider value={{
            feedbacks,
            getFeedbacks,
            setFeedbacks,
            users,
            getUsers,
            updateUserRol,
            originalFeedbacks,
            updateFeedback,
            setUsers,
            originalUsers,
            setOriginalFeedbacks
        }}>
            {children}
        </AdminContext.Provider>
    )
}
