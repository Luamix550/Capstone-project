"use client"
import React, { StrictMode, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSectionFeedbacks from "../components/HeroSection";
import { Footer } from "../components/Footer";
import { FeedProvider } from "../context/feedContext";
import { AuthProvider } from "../context/authContext";

const FeedBacks = () => {
  return (
    <AuthProvider>
    <div className="bg-background-1  bg-cover bg-center ">
      <FeedProvider>
        <Navbar />
        <HeroSectionFeedbacks />
        <Footer />
      </FeedProvider>
    </div>
    </AuthProvider>
  );
};

export default FeedBacks;
