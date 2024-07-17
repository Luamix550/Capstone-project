import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFeed } from '@/app/context/feedContext';

// Calendar component for filtering feedbacks by date
const Calendar = () => {
  // State to control if the modal is open
  const [open, setOpen] = useState(false);
  // State to store the selected date
  const [selectedDate, setSelectedDate] = useState(new Date());
  // Destructure functions from the feed context
  const { filterFeeds, setShowInitialFeedbacks } = useFeed();

  // Function to open the modal
  const handleOpen = () => setOpen(true);
  // Function to close the modal
  const handleClose = () => setOpen(false);

  // Function to handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Function to handle the submission of the selected date
  const handleSubmit = async (dateTime) => {
    // Format the date to a readable format
    const date = dateTime.toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Filter feedbacks based on the selected date
    await filterFeeds({ date });
    handleClose();
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button 
        onClick={handleOpen} 
        className="text-white bg-green-600 hover:bg-green-400 font-semibold rounded-lg text-xl px-6 md:px-10 py-3 flex items-center space-x-2 hover:scale-105 transition duration-300" 
        type="button"
      >
        <p>Filter</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>
      </button>

      {/* Modal for date selection */}
      {open && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-xl bg-black bg-opacity-50 z-50">
          <div className="relative w-full max-w-md">
            <div className="relative bg-white rounded-lg border shadow-xl">
              <div className="flex items-center justify-between p-2 md:p-5 ">
                {/* Button to close the modal */}
                <button 
                  type="button" 
                  className="text-sm absolute top-3 right-3 text-black font-bold py-1 px-2.5 rounded-full"
                  onClick={handleClose}
                >
                  <svg className="w-3 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-10">
                <h2 className="flex justify-center text-xl text-black font-semibold mb-10 gap-2">
                  Select a date to <span className="text-green-600">filter feedbacks</span>
                </h2>
                <div className="flex justify-center">
                  {/* Date picker for selecting date */}
                  <DatePicker
                    className="flex justify-center content-center"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    inline
                  />
                </div>
                <div className="flex justify-center items-center mt-6 gap-2">
                  {/* Button to submit selected date */}
                  <button 
                    onClick={() => handleSubmit(selectedDate)}
                    type="submit"
                    className="bg-green-600 hover:bg-green-400 text-white font-bold px-4 py-2 rounded-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </button>
                  {/* Button to show all feedbacks */}
                  <button 
                    onClick={() => {
                      setShowInitialFeedbacks(true);
                      handleClose();
                    }}
                    type="submit"
                    className="bg-green-600 hover:bg-green-400 text-white font-bold px-4 py-2 rounded-md"
                  >
                    <img className="size-7" src="https://i.imgur.com/jEJYSNX.png" alt="icon-all" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
