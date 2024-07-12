"use client"
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import ReactLoading from "react-loading";
import AdministrationComponent from "./components/AdministrationComponent";

const Manager = () => {
    const { profile, loading } = useAuth();

    useEffect(() => {
        profile();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-load">
               <img className="animate-pulse animate-infinite mb-5" src="https://smartalentit.com/wp-content/uploads/2024/06/Logo-01-1.png" alt="logo" />
               <ReactLoading type={"spokes"} color="#fff" className="w-40 h-40"/>
            </div>
        )
    }

    return (
        <div className="bg-admin bg-cover">
            <AdministrationComponent />
        </div>
    )
}

export default Manager