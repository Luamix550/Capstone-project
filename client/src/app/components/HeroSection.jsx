"use client"
import React, { useState } from 'react';
import Modal from './Modal';
import FeedbacksUsers from './FeedbacksUsers';
import ModalCategory from './ModalCategory';
import "../globals.css";

const HeroSectionFeedbacks = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const addFeedback = (newFeedback) => {
    setFeedbacks([...feedbacks, newFeedback]);
  };
  return (
    <div className="relative py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl text-gray-900 leading-tight mb-6">
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
      <FeedbacksUsers feedbacks={feedbacks} addFeedback={addFeedback} />
    </div>
  );
};
export default HeroSectionFeedbacks;