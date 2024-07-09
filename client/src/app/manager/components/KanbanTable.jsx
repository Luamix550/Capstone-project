import React from "react";
import OnlyCardFeed from "./OnlyCardFeed";
import { TbArrowsDownUp } from "react-icons/tb";
import { useAdmin } from '../../context/adminContext';

const KanbanTable = ({ feedbacks }) => {
  const { setFeedbacks,  updateFeedback } = useAdmin();


  const notStartedFeedbacks = feedbacks?.filter((data) => data.status == "Not Started");
  const inProgressFeedbacks = feedbacks?.filter((data) => data.status == "In Progress");
  const doneFeedbacks = feedbacks?.filter((data) => data.status == "Done");
  const archivedFeedbacks = feedbacks?.filter((data) => data.status == "Archived");

  const startDrag = (e, feedback) => {
    e.dataTransfer.setData('FeedbackId', feedback._id);
  };

  const onDrop = (e, status) => {
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
      })
      
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
        style={{ maxHeight: "420px" }}
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
          <div className="flex justify-center items-center h-full">
            <p className="text-gray-500">No feedbacks</p>
          </div>
        )}
      </div>
    </div>
  );


  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      {renderColumn("Not Started", "bg-gray-500", notStartedFeedbacks, "Not Started")}
      {renderColumn("In Progress", "bg-yellow-500", inProgressFeedbacks, "In Progress")}
      {renderColumn("Done", "bg-green-500", doneFeedbacks, "Done")}
      {renderColumn("Archived", "bg-red-500", archivedFeedbacks, "Archived")}
    </div>
  );
};

export default KanbanTable;