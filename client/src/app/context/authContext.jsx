"use client";
import { createContext, useState, useContext } from "react"; 
import { registerRequest, loginRequest, profileRequest } from '../api/auth';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';
import { logOutRequest } from "../api/auth";

// Creating the authentication context
export const AuthContext = createContext();

// Custom hook to use the authentication context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
}

// Authentication context provider
export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null); // State to store user information
    const [isAuthenticated, setAuthenticated] = useState(false); // State to track authentication status
    const [btnState, setBtnState] = useState(false); // State to manage button loading state
    const [loading, setLoading] = useState(true); // State to manage loading state

    // Function to register a new user
    const signUp = async (user) => {
        setBtnState(true);
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setAuthenticated(true);
        } catch (error) {
            setBtnState(false);
            const newErrorInputs = error.response?.data?.message || ['An unknown error occurred'];
            newErrorInputs.forEach(error => {
                toast.warning(error);
            });
        }
    }

    // Function to authenticate a user
    const signIn = async (user) => {
        setBtnState(true);
        try {
            const res = await loginRequest(user);
            setUser(res.data);
            setAuthenticated(true);
        } catch (error) {
            setBtnState(false);
            const loginErrors = error.response?.data?.message;
            loginErrors.forEach(error => {
                toast.warning(error);
            });
        }
    }

    // Function to log out the current user
    const logOut = () => {
        logOutRequest();
        router.push("/started");
    }

    // Function to fetch user profile information
    const profile = async () => {
        try {
            const res = await profileRequest();
            setUser(res.data);
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        } catch (error) {
            setTimeout(() => {
                router.push('/unauthorized');
            }, 3000);
        }
    }

    // Provides the authentication context with necessary values and functions
    return (
        <AuthContext.Provider value={{
            signUp,
            user,
            isAuthenticated,
            btnState,
            signIn,
            profile,
            loading,
            logOut,
            setLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}
