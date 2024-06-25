import React from 'react';
import Navbar from '../components/Navbar';
import { FeedbacksUsers } from '../components/FeedbacksUsers';
import  HeroSectionFeedbacks from '../components/HeroSection'

const FeedbacksUser = () => {
  return (
    <>
    <div className="bg-background-1 bg-no-repeat bg-cover">
      <Navbar />
      <HeroSectionFeedbacks />
    </div>
    </>
  );
};

export default FeedbacksUser;
