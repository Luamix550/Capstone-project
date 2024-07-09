import { FeedbackCard } from "@/app/feedbacks/components/FeedbackCard";
import HalfRating from "../../feedbacks/components/HalfRating";
import DateToPretty from "@/handlers/dateToPretty";
import React, { useState } from "react";

function OnlyCardFeed({ feedback }) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const closeModal =  () => {
    setOpenModal(false);
  }
  return (
    <>
      <div
        className={`bg-gray-100 hover:bg-gray-200 p-3 rounded-md cursor-pointer border border-gray-300`}
        onClick={handleOpenModal}
      >
        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-6">
            <HalfRating name="read-only" value={feedback.current_rating} readOnly />
            <p className="text-gray-500 text-sm">
            {DateToPretty(feedback.createdAt, false)}
          </p>
          </div>
            <div>
              {feedback.category === 'Congratulations' ? (
                <img className='w-7 h-7' src="https://i.imgur.com/IdYtFDC.png" alt="congratulationsImg" />
              ) : feedback.category === 'Complaint' ? (
                <img className='w-7 h-7' src="https://i.imgur.com/naAzAnO.png" alt="complaintImg" />
              ) : (
                <img className='w-7 h-7' src="https://i.imgur.com/jhm9r5a.png" alt="suggestionImg" />
              )}
            </div>
        </div>
        <h4 className="mt-2 font-bold text-gray-600">{feedback.title}</h4>
        <p className="line-clamp-1">{feedback.description}</p>
      </div>
      {
        openModal && (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50 gap-5">
            <FeedbackCard feedback={feedback} />
            <button className="rounded-lg shadow-xl bg-green-600 h-14 w-36 text-base font-semibold text-white hover:bg-green-400 hover:scale-110 transition duration-300" onClick={closeModal}>
              Close Feedback
            </button>
          </div>
        )
      }
    </>
  );
}

export default OnlyCardFeed;