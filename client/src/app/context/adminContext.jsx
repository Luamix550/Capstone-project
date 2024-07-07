"use client"
import { useContext, createContext, useState } from "react";
import { adminProfile } from "../api/admin";

export const AdminContext = createContext();

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
}

export const AdminProvider = ({children}) => {
    
    return (
        <AdminContext.Provider value={{
            AdminProfile,
            loading,
            user
        }}>
            {children}
        </AdminContext.Provider>
    )
}