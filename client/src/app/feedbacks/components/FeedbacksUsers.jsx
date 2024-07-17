"use client";
import { useFeed } from '../../context/feedContext';
import React, { useRef, useEffect, lazy, Suspense, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Calendar from "./Calendar";
import LoadingCard from "./LoadingCard";
const FeedbackCard = lazy(() => import("./FeedbackCard"));

/**
 * FeedbacksUsers component displays a list of feedback cards with horizontal scrolling.
 * 
 * @param {Array} feedbacks - Initial feedbacks to display.
 * @param {Function} addFeedback - Function to add new feedback.
 */
const FeedbacksUsers = ({ feedbacks = [], addFeedback }) => {
  const feedbackContainerRef = useRef(null);
  const [visibleFeedbackCount, setVisibleFeedbackCount] = useState(4);
  const { allFeedbacks, filteredFeedbacks, getAllFeedbacks, showInitialFeedbacks } = useFeed();

  /**
   * Scrolls the feedback container to the left.
   */
  const scrollLeft = () => {
    if (feedbackContainerRef.current) {
      feedbackContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  /**
   * Increases the number of visible feedback cards.
   */
  const scrollRight = () => {
    setVisibleFeedbackCount(prev => prev + 1);
  };

  // Fetch all feedbacks when the component mounts
  useEffect(() => {
    getAllFeedbacks();
  }, []);

  // Scroll the feedback container when the visible feedback count changes
  useEffect(() => {
    if (feedbackContainerRef.current) {
      feedbackContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  }, [visibleFeedbackCount]);

  // Determine which feedbacks to display based on whether initial feedbacks are shown
  const userFeedbacks = showInitialFeedbacks ? [...allFeedbacks, ...feedbacks] : filteredFeedbacks;

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
            {userFeedbacks.length > 3 && (
              <button
                className="absolute left-0 z-10 p-2 snap-proximity bg-white rounded-full shadow-md hover:bg-gray-200 transition duration-300"
                aria-label="Scroll Left"
                onClick={scrollLeft}
              >
                <ArrowBackIosIcon />
              </button>
            )}
            <div
              className="flex overflow-x-hidden overflow-y-hidden space-x-8 mx-12 no-scrollbar snap-x snap-proximity"
              ref={feedbackContainerRef}
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {userFeedbacks.slice(0, visibleFeedbackCount).map((feedback) => (
                <Suspense key={feedback._id} fallback={<LoadingCard />}>
                  <FeedbackCard feedback={feedback} />
                </Suspense>
              ))}
            </div>
            {userFeedbacks.length > 3 && (
              <button
                className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition duration-300"
                aria-label="Scroll Right"
                onClick={scrollRight}
              >
                <ArrowForwardIosIcon />
              </button>
            )}
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
