"use client"
import '../globals.css'
import React, { StrictMode, useEffect, useState } from "react";
import Navbar from './components/Navbar';
import HeroSectionFeedbacks from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { useAuth } from "../context/authContext";
import ReactLoading from "react-loading";

const FeedBacks = () => {
  const { profile, loading } = useAuth();

    useEffect(() => {
        profile();
    }, []);

    if (loading) {
        return (
            <div className='bg-load bg-cover'>  
                <div className="flex items-center justify-center min-h-screen">
                    <ReactLoading type={"spinningBubbles"} color="#047857" className="w-96 h-96"/>
                </div>
            </div>
        )
    }
  return (
      <div className="bg-background-1  bg-cover bg-center">
          <Navbar />
          <HeroSectionFeedbacks />
          <Footer />
      </div>
  );
};

export default FeedBacks;
