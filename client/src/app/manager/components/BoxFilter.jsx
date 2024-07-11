import React, { useState } from "react";
import { toast } from "sonner";

function BoxFilter({ feedbacks, filter }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedRating, setSelectedRating] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const handlerFilter = () => {
    let filteredFeedbacks = feedbacks;

    if (!feedbacks || feedbacks.length === 0) {
      toast.error('Feedbacks not found', {
        description: new Date(Date.now()).toLocaleString('en-us'),
        position: "bottom-right",
        action: {
            label: "Close",
            onClick: () => console.log("Close"),
        },
        className: 'custom-toast'
    });
    }

    const selectDateObject = selectedDate ? new Date(selectedDate) : null;

    if (selectDateObject) {
      filteredFeedbacks = filteredFeedbacks.filter((feedback) => {
        const feedbackDate = new Date(feedback.createdAt);
        const selectedDateString = selectDateObject.toISOString().split("T")[0];
        const feedbackDateString = feedbackDate.toISOString().split("T")[0];

        return selectedDateString === feedbackDateString;
      });
    }

    if (selectedRating !== "all") {
      filteredFeedbacks = filteredFeedbacks.filter(
        (feedback) =>
          feedback.current_rating &&
          feedback.current_rating.toString() === selectedRating
      );
    }

    if (selectedStatus !== "all") {
      filteredFeedbacks = filteredFeedbacks.filter(
        (feedback) =>  selectedStatus === "Archived" ? feedback?.archived === selectedStatus : feedback?.status === selectedStatus
      );
    }

    if (filteredFeedbacks.length === 0) {
      toast.error('Feedbacks not found', {
        description: new Date(Date.now()).toLocaleString('en-us'),
        position: "bottom-right",
        action: {
            label: "Close",
            onClick: () => console.log("Close"),
        },
        className: 'custom-toast'
      });
    }
    
    filter(filteredFeedbacks);
  };

  return (
    <div className="p-10 flex flex-row gap-10 mt-5 justify-between rounded-md drop-shadow-md">
      <div className="flex flex-row gap-10">
        <div>
          <h5 className="text-green-700 font-bold text-2xl mb-2">Date</h5>
          <div className="relative max-w-sm">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              datepicker-buttons="true"
              datepicker-autoselect-today="true"
              type="date"
              onChange={(e) => setSelectedDate(e.target.value)}
              className="text-gray-900 text-sm rounded-lg block w-full ps-10 p-3 bg-slate-100 placeholder-gray-100"
              placeholder="Select date"
            />
          </div>
        </div>

        <form className="max-w-sm">
          <h5 className="text-green-700 font-bold text-2xl mb-2">Ratings</h5>
          <select
          id="countries"
          className="text-gray-900 text-sm rounded-lg block w-full ps-4 p-3 bg-slate-100 placeholder-gray-100"
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          >
            <option value="all">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </form>

        <form className="max-w-sm">
          <h5 className="text-green-700 font-bold text-2xl mb-2">Status</h5>
          <select
            id="countries"
            className="text-gray-900 text-sm rounded-lg block w-full ps-4 p-3 bg-slate-100 placeholder-gray-100"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
            <option value="Archived">Archived</option>
          </select>
        </form>
      </div>

      <button
        onClick={handlerFilter}
        className="rounded-lg mt-9 shadow-xl bg-gradient-to-r from-green-700 to-green-500 h-12 w-32 font-semibold text-white hover:bg-green-400 hover:scale-110 transition duration-300"
      >
        Apply Filters
      </button>
    </div>
  );
}

export default BoxFilter;
