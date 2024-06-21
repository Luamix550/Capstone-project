import React from 'react';
import Navbar from '../components/Navbar';
import { FeedbacksUsers } from '../components/FeedbacksUsers';

const FeedbacksUser = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow">
      </div>
      <div className="mt-auto">
        <FeedbacksUsers />
      </div>
    </div>
  );
};

export default FeedbacksUser;
