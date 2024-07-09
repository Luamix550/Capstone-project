"use client"
import { useFeed } from '../../context/feedContext';
import React, { useState, useRef, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Calendar from "./Calendar";
import { FeedbackCard } from "./FeedbackCard";

const FeedbacksUsers = ({ feedbacks = [], addFeedback }) => {
  const feedbackContainerRef = useRef(null);
  const { allFeedbacks, filteredFeedbacks, getAllFeedbacks, showInitialFeedbacks } = useFeed();

  const scrollLeft = () => {
    if (feedbackContainerRef.current) {
      feedbackContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (feedbackContainerRef.current) {
      feedbackContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    getAllFeedbacks();
  }, []);

  const userFeedbacks = showInitialFeedbacks ? [...allFeedbacks, ...feedbacks] : [...filteredFeedbacks];

  return (
    <section className="mt-12 md:mt-20 relative">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center font-semibold w-38 text-gray-800 text-3xl hover:scale-105 transition duration-300">
          {showInitialFeedbacks && allFeedbacks.length > 0 && (
            <>Recent <span className="text-green-600">Feedback</span></>
          )}
        </h2>
        {userFeedbacks.length > 0 && (
          <div className="relative mt-12 flex items-center snap-x snap-start overflow-x-hidden">
              <button
                className="absolute left-0 z-10 p-2 snap-proximity bg-white rounded-full shadow-md hover:bg-gray-200 transition duration-300"
                aria-label="Scroll Left"
                onClick={scrollLeft}
              >
                <ArrowBackIosIcon />
              </button>
            <div
              className="flex overflow-x-hidden overflow-y-hidden space-x-8 mx-12 no-scrollbar snap-x snap-proximity"
              ref={feedbackContainerRef}
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {userFeedbacks.map((feedback, index) => (
                <FeedbackCard key={index} feedback={feedback} />
              ))}
            </div>
              <button
                className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition duration-300"
                aria-label="Scroll Right"
                onClick={scrollRight}
              >
                <ArrowForwardIosIcon />
              </button>
          </div>
        )}

        {(userFeedbacks.length > 0 || allFeedbacks.length > 0) && (
          <div className="flex justify-center mt-8">
            <Calendar />
          </div>
        )}
      </div>
    </section>
  );
};

export default FeedbacksUsers;
