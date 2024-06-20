"use client"
import React, { useState } from 'react';

const DropDownProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <button
        className="block h-12 w-12 rounded-full overflow-hidden border-2  focus:outline-none focus:border-white"
        onClick={toggleDropdown}
      >
        <img className="h-full w-full object-cover" src="https://ca.slack-edge.com/T0423U1MW21-U0614Q8SG5A-c0a8883acfc6-512" alt="Your avatar" />
      </button>
      {isOpen && (
        <div className='absolute mt-2 w-28 bg-white border-2 rounded-lg shadow-md'>
          <a href="./pages" className='block px-5 py-2 text-gray-800 hover:bg-slate-100'>Sign out</a>
        </div>
      )}
    </div>
  );
};

export default DropDownProfile;
