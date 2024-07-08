import DateToPretty from "@/handlers/dateToPretty";
import { FeedbackType } from "@/types/Feedbacks";
import React, { useState } from "react";

function OnlyCardFeed({ feedback }: { feedback: FeedbackType }) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ms-1 ${
            i <= rating ? "text-yellow-300" : "text-gray-300"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }
    return stars;
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  console.log(openModal);

  return (
    <>
      <div
        className={`bg-gray-100 hover:bg-gray-200 p-3 rounded-md cursor-pointer border border-gray-300`}
        onClick={handleOpenModal}
      >
        <div className="flex flex-row justify-between">
          <div className="flex items-center">
            {renderStars(feedback.current_rating as number)}
          </div>

          <p className="text-gray-500 text-sm">
            {DateToPretty(feedback.createdAt, false)}
          </p>
        </div>
        <h4 className="mt-2 font-bold text-gray-600">{feedback.title}</h4>
        <p className="line-clamp-1">{feedback.description}</p>
      </div>
    </>
  );
}

export default OnlyCardFeed;
