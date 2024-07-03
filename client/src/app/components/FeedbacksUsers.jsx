"use client";
import { useFeed } from '../context/feedContext';
import React, { useState, useRef, useEffect } from 'react';
import HalfRating from './HalfRating';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Calendar from "./Calendar"

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
  
  
  const userFeedbacks = showInitialFeedbacks ? [...allFeedbacks, ...feedbacks] : [...feedbacks, ...filteredFeedbacks];
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
                <div
                  key={index}
                  className={`rounded-xl p-6 border sm:shadow-inner border-black bg-white min-w-[100%] sm:min-w-[400px] md:min-w-[640px] lg:min-w-[300px] max-w-[100%] sm:max-w-[400px] md:max-w-[640px] lg:max-w-[800px] h-auto overflow-auto hover:scale-95 transition duration-300`}
                  role="button"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-center items-center">
                        <HalfRating name="read-only" value={feedback.current_rating} readOnly />
                      </div>
                      <p className="mb-4 mt-4 text-green-600 font-extrabold text-xl text-center truncate">
                        {feedback.title}
                      </p>
                      <p className="mt-2 mb-6 text-gray-700 text-clip overflow-hidden">
                        {feedback.description}
                      </p>
                    </div>
                    <div className={`flex mt-4 p-6 rounded-lg w-full ${
                      feedback.status === "Not Started" ? 'bg-red-100' : 
                      feedback.status === 'In Progress' ? 'bg-amber-100' : 
                      'bg-lime-100'}`}>
                      <p className='mr-0.5 text-black'><strong>Status:</strong></p>
                      <p className={`${
                        feedback.status === "Not Started" ? 'text-red-600' : 
                        feedback.status === 'In Progress' ? 'text-amber-500' : 
                        'text-lime-500'}`}>
                        {feedback.status}
                      </p>
                    </div>
                  </div>
                </div>
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

        {allFeedbacks.length > 0 && (
          <div className="flex justify-center mt-8">
            <Calendar />
          </div>
        )}
      </div>
    </section>
  );
}

export default FeedbacksUsers;
