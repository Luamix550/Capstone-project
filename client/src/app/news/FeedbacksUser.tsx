import React from 'react';
import Navbar from '../components/Navbar';
import { FeedbacksUsers } from '../components/FeedbacksUsers';
import Login from '../components/LoginForm';
const FeedbacksUser = () => {
  return (
    <div className="bg-background-1 flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow">
      </div>
      <div className="mt-auto">
        <Login></Login>
      </div>
    </div>
  );
};

export default FeedbacksUser;
