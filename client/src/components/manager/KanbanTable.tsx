import { FeedbackType } from "@/types/Feedbacks";
import React from "react";
import OnlyCardFeed from "./OnlyCardFeed";
import { TbArrowsDownUp } from "react-icons/tb";

function KanbanTable({ feedbacks }: { feedbacks: FeedbackType[] }) {
  const notStartedFeedbacks = feedbacks?.filter(
    (data) => data.status == "Not Started"
  );
  const InProgressFeedbacks = feedbacks?.filter(
    (data) => data.status == "In Progress"
  );
  const DoneFeedbacks = feedbacks?.filter((data) => data.status == "Done");
  const ArchivedFeedbacks = feedbacks?.filter(
    (data) => data.status == "Archived"
  );
  return (
    <>
      <div className="grid grid-cols-4 gap-5 mt-5">
        <div className="flex flex-col">
          <div className="p-5 flex flex-row justify-between font-bold text-white bg-gray-500 rounded-md">
            <h3 className="grid place-content-center">Pending</h3>
            <div className="flex flex-row gap-3">
              <p className="p-1 font-normal text-sm">
                {notStartedFeedbacks?.length}
              </p>
              <div className="grid place-content-center cursor-pointer">
                <TbArrowsDownUp />
              </div>
            </div>
          </div>

          <div
            className="overflow-x-auto scrollbar-hide overflow-scroll"
            style={{
              maxHeight: "420px",
              // maskImage: "linear-gradient(black 100%, transparent)",
            }}
          >
            {feedbacks
              ?.filter((data) => data.status === "Not Started")
              .map((filteredData) => (
                <div className="flex flex-col p-1">
                  <OnlyCardFeed feedback={filteredData} />
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="p-5 flex flex-row justify-between font-bold text-white bg-yellow-500 rounded-md">
            <h3 className="grid place-content-center">In Progress</h3>
            <div className="flex flex-row gap-3">
              <p className="p-1 font-normal text-sm">
                {InProgressFeedbacks?.length}
              </p>
              <div className="grid place-content-center cursor-pointer">
                <TbArrowsDownUp />
              </div>
            </div>
          </div>
          <div
            className="overflow-x-auto scrollbar-hide overflow-scroll"
            style={{
              maxHeight: "420px",
              // maskImage: "linear-gradient(black 90%, transparent)",
            }}
          >
            {feedbacks
              ?.filter((data) => data.status === "In Progress")
              .map((filteredData) => (
                <div className="flex flex-col p-1">
                  <OnlyCardFeed feedback={filteredData} />
                </div>
              ))}
          </div>
        </div>

        <div>
          <div className="p-5 flex flex-row justify-between font-bold text-white bg-green-500 rounded-md">
            <h3 className="grid place-content-center">Done</h3>
            <div className="flex flex-row gap-3">
              <p className="p-1 font-normal text-sm">{DoneFeedbacks?.length}</p>
              <div className="grid place-content-center cursor-pointer">
                <TbArrowsDownUp />
              </div>
            </div>
          </div>
          <div
            className="overflow-x-auto scrollbar-hide overflow-scroll"
            style={{
              maxHeight: "420px",
              // maskImage: "linear-gradient(black 90%, transparent)",
            }}
          >
            {feedbacks
              ?.filter((data) => data.status === "Done")
              .map((filteredData) => (
                <div className="flex flex-col p-1">
                  <OnlyCardFeed feedback={filteredData} />
                </div>
              ))}
          </div>
        </div>

        <div>
          <div className="p-5 flex flex-row justify-between font-bold text-white bg-red-500 rounded-md">
            <h3 className="grid place-content-center">Archived</h3>
            <div className="flex flex-row gap-3">
              <p className="p-1 font-normal text-sm">
                {ArchivedFeedbacks?.length}
              </p>
              <div className="grid place-content-center cursor-pointer">
                <TbArrowsDownUp />
              </div>
            </div>
          </div>
          <div
            className="overflow-x-auto scrollbar-hide overflow-scroll"
            style={{
              maxHeight: "420px",
              // maskImage: "linear-gradient(black 90%, transparent)",
            }}
          >
            {feedbacks
              ?.filter((data) => data.status === "Archived")
              .map((filteredData) => (
                <div className="flex flex-col p-1" key={filteredData._id}>
                  <OnlyCardFeed feedback={filteredData} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default KanbanTable;
