import React from "react";
import Navbar from "../components/Navbar";
import HeroSectionFeedbacks from "../components/HeroSection";
import { Footer } from "../components/Footer";

const FeedBacks = () => {
  return (
    <div className="bg-background-1  bg-cover bg-center ">
      <Navbar />
      <HeroSectionFeedbacks />
      <Footer />
    </div>
  );
};

export default FeedBacks;
