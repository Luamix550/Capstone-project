import React, { useState, useRef } from 'react';
import HalfRating from './HalfRating';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const FeedbacksUsers = ({ feedbacks = [], addFeedback }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const feedbackContainerRef = useRef(null);
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
        <h2 className="text-center font-semibold tracking-tight text-gray-800 text-3xl hover:scale-105 transition duration-400">
          Recent <span className="text-green-600">Feedback</span>
        </h2>
        <div className="relative mt-12 flex items-center snap-x snap-start scroll-smooth overflow-x-hidden">
        <button
          className="absolute left-0 z-10 p-2 snap-proximity bg-white rounded-full shadow-md hover:bg-gray-200 transition duration-300"
          aria-label="Scroll Left"
          onClick={scrollLeft}
        >
          <ArrowBackIosIcon />
        </button>
        <div
          className="flex overflow-x-hidden overflow-y-hidden space-x-4 mx-12 no-scrollbar snap-x snap-proximity"
          ref={feedbackContainerRef}
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 border shadow-2xl sm:shadow-2xl border-black bg-white min-w-[400px] sm:min-w-[640x] lg:min-w-[300px] max-w-[400px]`}
                role="button"
                style={{ scrollSnapAlign: 'start' }}
              >
                <HalfRating className="flex items-center" name="read-only" value={feedback.rating} readOnly />
                <p className="mb-4 mt-4 text-green-600 font-extrabold text-1xl text-left">
                  {feedback.title}
                </p>
                <p className="mt-2 mb-6 text-gray-700">
                  {feedback.description}
                </p>
              </div>
            ))
          ) : (
            <p className="inline-block pt-8 mb-8 align-baseline text-gray-700 text-bold">No feedback available.</p>
          )}
        </div>
        <button
          className="absolute right-0 z-10 p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
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