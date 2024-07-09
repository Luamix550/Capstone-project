import React, { useEffect, useState } from "react";
import OnlyCardFeed from "./OnlyCardFeed";
import { TbArrowsDownUp } from "react-icons/tb";
import { useAdmin } from '../../context/adminContext';
import { toast } from "sonner";
const KanbanTable = ({ feedbacks }) => {
  const { setFeedbacks,  updateFeedback } = useAdmin();
  const notStartedFeedbacks = feedbacks?.filter((data) => data.status == "Not Started");
  const inProgressFeedbacks = feedbacks?.filter((data) => data.status == "In Progress");
  const doneFeedbacks = feedbacks?.filter((data) => data.status == "Done");
  const archivedFeedbacks = feedbacks?.filter((data) => data.status == "Archived");
  const startDrag = (e, feedback) => {
    e.dataTransfer.setData('FeedbackId', feedback._id);
  };

  const notificationEmail = () => {
    return new Promise((resolve) => {
      toast(
        <div>
          <p>Do you want to notify the user of the status change?</p>
          <div className="flex justify-center gap-3 mt-3">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              type="button"
              onClick={() => {
                resolve(true); // Resuelve la promesa con true cuando se hace clic en Send
                toast.dismiss();
              }}
            >
              Yes
            </button>
            <button
              className="bg-red-700 text-white px-4 py-2 rounded"
              type="button"
              onClick={() => {
                resolve(false); // Resuelve la promesa con false cuando se hace clic en Cancel
                toast.dismiss();
              }}
            >
              No
            </button>
          </div>
        </div>,
        {
          position: "top-center",
          className: "bg-white text-black p-4 rounded-md hover:border-gray-300 border-solid duration-300 border-1 shadow-2xl",
        }
      );
    });
  };

  const onDrop = async (e, status) => {
    const feedbackId = e.dataTransfer.getData('FeedbackId');
    const feedback = feedbacks.find(feedback => feedback._id === feedbackId);
    if (feedback) {
      feedback.status = status;

      const newFeedbacks = feedbacks.map(feed => {
        if (feed._id === feedbackId) return feedback;
        return feed;
      });

      const boolEmail = await notificationEmail();

      updateFeedback({
        _id: feedback._id,
        status: feedback.status,
        sendEmail: boolEmail,
      });

      console.log("bye");
      setFeedbacks(newFeedbacks);
    }
  };

  const draggingOver = (e) => {
    e.preventDefault();
  };

   const renderColumn = (title, bgColor, feedbacks, status) => (
    <div className="flex flex-col">
      <div className={`p-5 flex flex-row justify-between font-bold text-white ${bgColor} rounded-md`}>
        <h3 className="grid place-content-center">{title}</h3>
        <div className="flex flex-row gap-3">
          <p className="p-1 font-normal text-sm">{feedbacks.length}</p>
          <div className="grid place-content-center cursor-pointer">
            <TbArrowsDownUp />
          </div>
        </div>
      </div>
      <div
        className="overflow-x-auto scrollbar-hide overflow-scroll"
        style={{ maxHeight: "700px" }}
        onDragOver={draggingOver}
        onDrop={(e) => onDrop(e, status)}
      >
        {feedbacks.length > 0 ? (
          feedbacks.map((filteredData) => (
            <div key={filteredData._id} className="flex flex-col p-1" draggable onDragStart={(e) => startDrag(e, filteredData)}>
              <OnlyCardFeed feedback={filteredData} />
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-96">
            <p className="text-gray-500">No feedbacks</p>
          </div>
        )}
      </div>
    </div>
  );
  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      {renderColumn("Not Started", "bg-red-500", notStartedFeedbacks, "Not Started")}
      {renderColumn("In Progress", "bg-amber-500", inProgressFeedbacks, "In Progress")}
      {renderColumn("Done", "bg-green-600", doneFeedbacks, "Done")}
      {renderColumn("Archived", "bg-gray-500", archivedFeedbacks, "Archived")}
    </div>
  );
};
export default KanbanTable;