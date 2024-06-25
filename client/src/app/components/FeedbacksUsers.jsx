import React, { useState, useRef } from 'react';
import HalfRating from './HalfRating';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const FeedbacksUsers = ({ feedbacks, addFeedback, scrollLeft, scrollRight }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const feedbackContainerRef = useRef(null);
  const [feedbacks, setFeedbacks] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  
  const addFeedback = (newFeedback) => {
    setFeedbacks([...feedbacks, newFeedback]);
  };

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

  return (
    <section className="mt-12 md:mt-20 relative">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center font-semibold tracking-tight text-gray-800 sm:text-3xl hover:scale-105 transition duration-400">
          Recent <span className='text-green-600'>Feedback</span>
        </h2>

        <div className="relative mt-12 flex items-center snap-x snap-start scroll-pl-6 scroll-smooth overflow-x-hidden ">
          <button
            className="absolute left-0 z-10 p-2 snap-proximity bg-white rounded-full shadow-md hover:bg-gray-200 transition"
            aria-label="Scroll Left"
            onClick={scrollLeft}
          >
            <ArrowBackIosIcon />
          </button>
          <div
            className="flex overflow-x-hidden space-x-4 mx-12 no-scrollbar snap-x snap-proximity"
            ref={feedbackContainerRef}
          >
            {feedbacks.map((feedback, index) => (
              <div
                key={index}
                className={`rounded-lg p-6 sm:p-8 border border-black bg-white shadow-2xl min-w-[400px] sm:min-w-[300px] lg:min-w-[300px] max-w-[400px] snap-center
                ${expandedIndex === index ? 'max-h-none' : 'max-h-60'} `}
                onClick={() => toggleExpand(index)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    toggleExpand(index);
                  }
                }}
                tabIndex={0}
                role="button"
              >
                <HalfRating name="read-only" value={feedback.rating} readOnly />
                <p className="mb-4 mt-4 text-green-600 font-extrabold text-1xl text-left">
                  {feedback.title}
                </p>
                <p className="mt-2 mb-6 text-gray-700">
                  {feedback.description}
                </p>
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-600 transition"
            aria-label="Scroll Right"
            onClick={scrollRight}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedbacksUsers;
