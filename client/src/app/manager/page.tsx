/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import AdministrationComponent from "./components/AdministrationComponent";

/**
 * Manager component to handle the administration panel.
 * Fetches user profile data on mount and displays a loading screen if data is still being loaded.
 */
const Manager = () => {
  const { profile, loading } = useAuth();

  // Fetch user profile data on component mount
  useEffect(() => {
    profile();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-load bg-cover">
        <img src="https://smartalentit.com/wp-content/uploads/2024/06/Logo-01-1.png" alt="logo" />
        <svg className="animate-spin w-16 h-16 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </div>
    );
  }

  return (
    <div className="bg-admin bg-cover min-h-screen">
      <AdministrationComponent />
    </div>
  );
};

export default Manager;
