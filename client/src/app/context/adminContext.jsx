"use client"
import { useContext, createContext, useState } from "react";
import { getAllFeedbacks, getAllUsers, getUser, updateRol } from "../api/admin";
export const AdminContext = createContext();
import { toast } from "sonner";

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
}

export const AdminProvider = ({children}) => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [originalFeedbacks, setOriginalFeedbacks] = useState([]);
    const [users, setUsers] = useState([]);

    const getFeedbacks = async () => {
        const res = await getAllFeedbacks();
        const data = res?.data;
        setFeedbacks(data);
        setOriginalFeedbacks(data);
    } 

    const getUsers = async () => {
        try {
            const res = await getAllUsers();
            const users = res?.data;
            setUsers(users);
        }
        catch (error) {
            console.log(error);
        }
    }

    const updateUserRol = async (data) => {
        const { _id }  = data;
        const { newRol } = data;
        try {
            const res = await updateRol({ _id, rol: newRol });
            toast.success('The role has been successfully updated.', {
                description: new Date(Date.now()).toLocaleString('en-us'),
                position: "bottom-right",
                action: {
                    label: "Undo",
                },
                className: 'custom-toast'
            });
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <AdminContext.Provider value={{
            feedbacks,
            getFeedbacks,
            setFeedbacks,
            users,
            getUsers,
            updateUserRol,
            originalFeedbacks,
            getUser
        }}>
            {children}
        </AdminContext.Provider>
    )
}