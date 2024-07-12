import React, { useState, lazy, Suspense } from "react";
import { useAdmin } from '../../context/adminContext';
import { toast } from "sonner";

import Loader from './Loader';
const OnlyCardFeed = lazy(() => import("./OnlyCardFeed"));

const KanbanTable = ({ feedbacks }) => {
  const { setFeedbacks, updateFeedback } = useAdmin();
  const [visibleFeedbacks, setVisibleFeedbacks] = useState(6);

  const notStartedFeedbacks = feedbacks.filter((data) => data.status === "Not Started" && data.archived === "");
  const inProgressFeedbacks = feedbacks.filter((data) => data.status === "In Progress" && data.archived === "");
  const doneFeedbacks = feedbacks.filter((data) => data.status === "Done" && data.archived === "");
  const archivedFeedbacks = feedbacks.filter((data) => data.archived === "Archived");

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
                resolve(true);
                toast.dismiss();
              }}
            >
              Yes
            </button>
            <button
              className="bg-red-700 text-white px-4 py-2 rounded"
              type="button"
              onClick={() => {
                resolve(false);
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
      status !== "Archived" ? (feedback.status = status, feedback.archived = "") : feedback.archived = status;

      const newFeedbacks = feedbacks.map(feed => {
        if (feed._id === feedbackId) return feedback;
        return feed;
      });

      let boolEmail = status === 'Archived' ?  false : notificationEmail();

      updateFeedback({
        _id: feedback._id,
        status: feedback.status,
        sendEmail: boolEmail,
        archived: status === "Archived" ? status : ""
      });

      setFeedbacks(newFeedbacks);
    }
  };
  
  const draggingOver = (e) => {
    e.preventDefault();
  };

  const handleScroll = (e, feedbacksLength) => {
    const bottom = e.target.scrollHeight - Math.ceil(e.target.scrollTop) <= e.target.clientHeight + 1;
    if (bottom && visibleFeedbacks < feedbacksLength) {
      setVisibleFeedbacks(prev => prev + 5);
    }
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
        className="overflow-x-auto scrollbar-hide overflow-scroll max-h-[80vh] mt-2"
        onDragOver={draggingOver}
        onDrop={(e) => onDrop(e, status)}
        onScroll={(e) => handleScroll(e, feedbacks.length)}
      >
        {feedbacks.slice(0, visibleFeedbacks).map((filteredData) => (
          <div key={filteredData._id} className="flex flex-col p-1" draggable onDragStart={(e) => startDrag(e, filteredData)}>
            <Suspense fallback={<Loader />}>
              <OnlyCardFeed feedback={filteredData} />
            </Suspense>
          </div>
        ))}
        {feedbacks.length === 0 && (
          <div className="flex justify-center items-center h-96">
            <div className="border rounded-lg border-gray-400 p-2">
              <p className="text-gray-500">No feedbacks</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
      {renderColumn("Not Started", "bg-gradient-to-r from-red-400 to-red-600", notStartedFeedbacks, "Not Started")}
      {renderColumn("In Progress", "bg-gradient-to-r from-yellow-400 to-yellow-600", inProgressFeedbacks, "In Progress")}
      {renderColumn("Done", "bg-gradient-to-r from-green-400 to-green-600", doneFeedbacks, "Done")}
      {renderColumn("Archived", "bg-gradient-to-r from-gray-400 to-gray-600", archivedFeedbacks, "Archived")}
    </div>
  );
};

export default KanbanTable;
