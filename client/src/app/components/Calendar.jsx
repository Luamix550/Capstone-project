import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ onDateChange }) => {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onDateChange(date);
        handleClose();
    };

    return (
        <div className="flex justify-center items-center">
            <button 
                onClick={handleOpen} 
                className="text-white bg-green-600 hover:bg-green-400 font-semibold rounded-lg text-xl px-6 md:px-10 py-3 flex items-center space-x-2 hover:scale-105 transition duration-300" 
                type="button"
            >
                <span className="hidden md:block">Filter feedbacks by date</span>
                <span className="md:hidden">Filter by date</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>

            {open && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="relative w-full max-w-md">
                        <div className="relative bg-white rounded-lg border shadow-xl">
                            <div className="flex items-center justify-between p-2 md:p-5 ">
                                <button 
                                    type="button" 
                                    className="text-sm absolute top-3 right-3 bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2.5 rounded-full"
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
                                    Select a date to <span className='text-green-600'>filter feedbacks</span>
                                </h2>
                                <div className='flex justify-center'>
                                <DatePicker
                                    className="flex justify-center content-center"
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    dateFormat="yyyy-MM-dd"
                                    inline
                                />
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
