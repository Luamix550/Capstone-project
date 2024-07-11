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
            <div className="flex items-center justify-center min-h-screen bg-load ">
               {/* <ReactLoading type={"spinningBubbles"} color="#047857" className="w-96 h-96"/> */}
               <img className="animate-bounce animate-infinite animate-ease-linear animate-fill-both" src="https://smartalentit.com/wp-content/uploads/2024/06/Logo-01-1.png" alt="logo" />
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