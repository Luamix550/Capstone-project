import React, { useEffect, useState } from "react";
import OnlyCardFeed from "./OnlyCardFeed";
import { TbArrowsDownUp } from "react-icons/tb";
import { useAdmin } from '../../context/adminContext';
import { toast } from "sonner";

const KanbanTable = ({ feedbacks }) => {
  const { setFeedbacks,  updateFeedback } = useAdmin();
  const [sendEmail, setSendEmail] = useState(null);
  const notStartedFeedbacks = feedbacks?.filter((data) => data.status == "Not Started");
  const inProgressFeedbacks = feedbacks?.filter((data) => data.status == "In Progress");
  const doneFeedbacks = feedbacks?.filter((data) => data.status == "Done");
  const archivedFeedbacks = feedbacks?.filter((data) => data.status == "Archived");

  const startDrag = (e, feedback) => {
    e.dataTransfer.setData('FeedbackId', feedback._id);
  };

  const onDrop = (e, status) => {
    toast(
      <div>
        <p>Do you want to notify the user of the status change?</p>
        <div className="flex justify-center gap-3 mt-3">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            type="button"
            onClick={() => {
              setSendEmail(true);
              toast.dismiss()
            }}
          >
            Send
          </button>
          <button
            className="bg-red-700 text-white px-4 py-2 rounded"
            type="button"
            onClick={() => {
              setSendEmail(false);
              toast.dismiss()
            }}
          >
            Cancel
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        className: "bg-white text-black p-4 rounded-md hover:border-gray-300 border-solid duration-300 border-1 shadow-2xl",
      }
    );
    const feedbackId = e.dataTransfer.getData('FeedbackId');
    const feedback = feedbacks.find(feedback => feedback._id === feedbackId);
    if (feedback) {
      feedback.status = status;

      const newFeedbacks = feedbacks.map(feed => {
        if (feed._id === feedbackId) return feedback;
        return feed;
      });
      updateFeedback({
        _id: feedback._id,
        status: feedback.status,
        sendEmail
      })
      
      setFeedbacks(newFeedbacks);
    }
  };

  const draggingOver = (e) => {
    e.preventDefault();
  };

   const renderColumn = (title, bgColor, feedbacks, status) => (
    <div className="flex flex-col">
      <div className={`p-5 flex flex-row justify-between font-bold text-white ${bgColor} rounded-md sm:w-42`}>
        <h3 className="grid place-content-center sm:w-full md:w-[50%] lg:w-[25%] xl:w-[30%]">{title}</h3>
        <div className="flex flex-row">
          <p className="font-normal text-sm pl-4">{feedbacks.length}</p>
        </div>
      </div>
      <div
        className="overflow-x-auto scrollbar-hide overflow-scroll max-h-[70vh]"
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
    <div className="grid grid-cols-4 gap-x-5 gap-6 mt-5">
      {renderColumn("Not Started", "bg-gradient-to-r from-red-400 to-red-500", notStartedFeedbacks, "Not Started")}
      {renderColumn("In Progress", "bg-gradient-to-r from-yellow-400 to-yellow-500", inProgressFeedbacks, "In Progress")}
      {renderColumn("Done", "bg-gradient-to-r from-green-400 to-green-500", doneFeedbacks, "Done")}
      {renderColumn("Archived", "bg-gradient-to-r from-gray-400 to-gray-500", archivedFeedbacks, "Archived")}
    </div>
  );
};

export default KanbanTable;