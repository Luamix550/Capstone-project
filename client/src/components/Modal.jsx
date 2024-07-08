import React, { useState, useEffect } from 'react';
import HalfRating from './HalfRating';
import { useFeed } from '../app/context/feedContext';

const Modal = ({ isOpen, onClose, onAddFeedback, category, prevCloseModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [current_rating, setRating] = useState(0);
  const status = 'Not Started';
  const { createFeedback } = useFeed();


  const closeModals = () => {
    onClose();
    prevCloseModal();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFeedback({ title, description, current_rating, status, category });
    createFeedback({
      title,
      description,
      current_rating,
      status,
      category
    });
    closeModals();
  };

  useEffect(() => {
    if (isOpen) {
      setTitle('');
      setDescription('');
      setRating(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <button onClick={onClose}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          </button>
          <h2 className="flex-col items-center pl-28 text-xl font-semibold text-black mr-16 gap-1">Add new <span className='text-green-600'>Feedback</span></h2>
          <button onClick={closeModals} className="text-sm text-black font-bold py-1.5 px-1.5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border bg-gray-100 border-gray-300 text-black rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength="50"
              minLength={10}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              className="w-full px-3 py-2 border bg-gray-100 border-gray-300 text-black rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              maxLength="300"
              minLength={10}
              rows="5"
              cols="30"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Rating</label>
            <HalfRating
              name="feedback-rating"
              value={current_rating}
              onChange={(event, newValue) => setRating(newValue)}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;