"use client"
import React, { useState, useEffect } from 'react';
import { useFeed } from '../../context/feedContext';
import FeedbacksUsers from './FeedbacksUsers';
import ModalCategory from './ModalCategory';

const HeroSectionFeedbacks = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { allFeedbacks, getAllFeedbacks } = useFeed();
  const [feedbacks, setFeedbacks] = useState([]);
  const [heroImage, setHeroImage] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const addFeedback = (newFeedback) => {
    setFeedbacks([...feedbacks, newFeedback]);
    setHeroImage(false);
  };

  useEffect(() => {
    getAllFeedbacks();
    setHeroImage(true);
  }, []);

  if (allFeedbacks.length === 0 && heroImage === true) {
    return (
      <div className="relative py-32 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="max-h-screen text-5xl lg:text-6xl text-gray-900 leading-tight mb-8">
            Change starts with you! Share us your <span className='font-Expletus text-green-600'>Feedback.</span>
          </h1>
          <div className="flex justify-center">
            <img className='absolute max-sm:mt-5 max-sm:ml-28 max-sm:top-96 ml-20 md:top-60 animate-fade-left' src="https://i.imgur.com/LZGJ42x.png" alt="" />
            <button
              onClick={openModal}
              className="absolute rounded-lg border border-gray shadow-xl bg-green-600 px-6 py-4 text-base font-semibold text-white hover:bg-green-400 hover:scale-110 transition duration-300 mt-8"
            >
              Add Feedback
            </button>
          </div>
        </div>
      </div>
      <ModalCategory enterModal={modalOpen} onClose={closeModal} feedback={addFeedback} />
      <FeedbacksUsers feedbacks={feedbacks} addFeedback={addFeedback} allFeedbacks={allFeedbacks}/>
    </div>
    )
  }
  return (
    <div className="relative py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="max-h-screen text-3xl lg:text-5xl text-gray-900 leading-tight mb-12">
            Change starts with you! Share us your <span className='font-Expletus text-green-600'>Feedback.</span>
          </h1>
          <div className="flex items-center justify-center">
            <button
              className="rounded-lg border border-gray shadow-xl bg-green-600 px-6 py-4 text-base font-semibold text-white hover:bg-green-400 hover:scale-110 transition duration-300"
              onClick={openModal}
            >
              Add Feedback
            </button>
          </div>

        </div>
      </div>
      <ModalCategory enterModal={modalOpen} onClose={closeModal} feedback={addFeedback} />
      <FeedbacksUsers feedbacks={feedbacks} addFeedback={addFeedback} allFeedbacks={allFeedbacks}/>
    </div>
  );
};
export default HeroSectionFeedbacks;