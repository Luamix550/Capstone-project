"use client"
import { createContext, useState, useContext } from "react"; 
import { registerRequest, loginRequest, profileRequest } from '../api/auth';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';
import { logOutRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
}

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [btnState, setBtnState] = useState(false);
    const [loading, setLoading] = useState(true);

    const signUp = async (user) => {
        setBtnState(true)
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setAuthenticated(true);
        }
        catch (error) {
            setBtnState(false);
            const newErrorInputs = error.response?.data?.message || ['An unknown error occurred'];
            newErrorInputs.forEach(error => {
            toast.warning(error);
            });
        }
    }

    const signIn = async (user) => {
        setBtnState(true)
        try {
            const res = await loginRequest(user);
            setUser(res.data);
            setAuthenticated(true);
        }
        catch (error) {
            setBtnState(false);
            const loginErrors = error.response?.data?.message;
            loginErrors.forEach(error => {
                toast.warning(error);
            });
        }
    }

    const logOut = () => {
        logOutRequest()
        router.push("/started");
    }

    const profile = async () => {
        try {
            const res = await profileRequest();
            setUser(res.data);
            
            setTimeout(() => {
                setLoading(false);
            }, 5000)
        }
        catch(error) {
            setTimeout(() => {
                router.push('/unauthorized');
            }, 5000)
        }
    }

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