"use client";
import React, { useState, useRef, useEffect } from 'react';
import HalfRating from './HalfRating';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getFeedbacks } from '../api/userFeedback';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const FeedbacksUsers = ({ feedbacks = [], addFeedback }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const feedbackContainerRef = useRef(null);
  const [allFeedbacks, setFeedback] = useState([]);
  const router = useRouter();

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

  const getAllFeedbacks = async () => {
    try {
      const { data } = await getFeedbacks();
      setFeedback(data);
    } catch (error) {
      if (error.response.status === 401) {
        router.push('/unauthorized');
      }
    }
  };

  useEffect(() => {
    getAllFeedbacks();
  }, []);

  const userFeedbacks = [...allFeedbacks, ...feedbacks];

  return (
    <section className="mt-12 md:mt-20 relative">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center font-semibold tracking-tight text-gray-800 text-3xl hover:scale-105 transition duration-400">
          {userFeedbacks.length > 0 && (
            <>Recent <span className="text-green-600">Feedback</span></>
          )}
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
            className="flex overflow-x-hidden overflow-y-hidden space-x-8 mx-12 no-scrollbar snap-x snap-proximity"
            ref={feedbackContainerRef}
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {userFeedbacks.length > 0 && userFeedbacks.map((feedback, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 border shadow-2xl sm:shadow-2xl border-black bg-white min-w-[100%] sm:min-w-[400px] md:min-w-[640px] lg:min-w-[300px] max-w-[100%] sm:max-w-[400px] md:max-w-[640px] lg:max-w-[800px] h-auto overflow-auto`}
                role="button"
                style={{ scrollSnapAlign: 'start' }}
              >
                  <HalfRating className="flex items-center" name="read-only" value={feedback.current_rating} readOnly />
                <p className="mb-4 mt-4 text-green-600 font-extrabold text-1xl text-left">
                  {feedback.title}
                </p>
                <p className="mt-2 mb-6 text-gray-700 text-clip overflow-hidden">
                  {feedback.description}
                </p>
                <div className='flex  content-center items-center'>
                <p className='mr-0.5 text-green-600'><strong>Status:</strong></p>
                  { feedback.status === "Not Started" ? (
                    <p className='text-red-600'>{feedback.status}</p>
                  ) : feedback.status === 'In Progress' ? (
                    <p className='text-amber-500'>{feedback.status}</p>
                  ) : <p className='text-lime-500'>{feedback.status}</p>}
                </div>
              </div>
            ))}
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
