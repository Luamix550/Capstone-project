import React from 'react';
import { FiXCircle } from "react-icons/fi";

const Unauthorized = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-10 bg-white shadow-md rounded-lg flex-row items-center">
        <img src="https://cdn-icons-png.flaticon.com/512/2345/2345338.png" alt="unathorized" className='h-20 w-20'/>
        <div className='flex items-center'>
        <h1 className="text-4xl font-bold text-green-600">401</h1>
        <FiXCircle className='text-red-600 h-8 w-8' />
        </div>
        <p className="mt-4 text-xl text-gray-700">Unauthorized</p>
        <p className="mt-2 text-gray-600">You need to log in to view this page.</p>
      </div>
    </div>
  );
};

export default Unauthorized;