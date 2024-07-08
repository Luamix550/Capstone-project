import React from 'react'
import HalfRating from './HalfRating';

export const FeedbackCard = ({ feedback }) => (
    <div
      className={`rounded-xl p-6 border sm:shadow-inner border-black bg-white min-w-[100%] sm:min-w-[400px] md:min-w-[640px] lg:min-w-[300px] max-w-[100%] sm:max-w-[400px] md:max-w-[640px] lg:max-w-[800px] h-auto overflow-auto hover:scale-95 transition duration-300`}
      role="button"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-between items-center">
            <HalfRating name="read-only" value={feedback.current_rating} readOnly />
            {feedback.category === 'Congratulations' ? (
              <img className='w-10 h-10' src="https://i.imgur.com/IdYtFDC.png" alt="congratulationsImg" />
            ) : feedback.category === 'Complaint' ? (
              <img className='w-10 h-10' src="https://i.imgur.com/naAzAnO.png" alt="complaintImg" />
            ) : (
              <img className='w-10 h-10' src="https://i.imgur.com/jhm9r5a.png" alt="suggestionImg" />
            )}
          </div>
          <p className="mb-4 mt-4 text-green-600 font-semibold text-xl text-center truncate">
            {feedback.title}
          </p>
          <p className="mt-2 mb-6 text-gray-700 text-clip overflow-hidden">
            {feedback.description}
          </p>
        </div>
        <div className={`flex mt-4 p-6 rounded-lg w-full ${
          feedback.status === "Not Started" ? 'bg-red-200' : 
          feedback.status === 'In Progress' ? 'bg-amber-200' : 
          'bg-green-200'}`}>
          <p className='mr-0.5 text-black'><strong>Status:</strong></p>
          <p className={`font-bold ${
            feedback.status === "Not Started" ? 'text-red-600' : 
            feedback.status === 'In Progress' ? 'text-amber-600' : 
            'text-green-500'}`}>
            {feedback.status}
          </p>
        </div>
      </div>
    </div>
  );
