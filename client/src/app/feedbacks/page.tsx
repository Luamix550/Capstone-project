"use client";
import '../globals.css';
import React, { useEffect, lazy, Suspense } from "react";
import { useAuth } from "../context/authContext";
import ReactLoading from "react-loading";
import Navbar from "./components/Navbar";
import HeroSectionFeedbacks from './components/HeroSection';
import Footer from './components/Footer';

const FeedBacks = () => {
  const { profile, loading, user} = useAuth();
  
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
    <div className="bg-background-1 bg-cover bg-center">
        <Navbar user={user} />
        <HeroSectionFeedbacks />
        <Footer />
    </div>
  );
};

export default FeedBacks;
