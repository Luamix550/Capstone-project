"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { profileRequest } from '../api/auth';
import { logOutRequest } from '../api/auth';
import { useAuth } from '../context/authContext';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { user, profile, loading } = useAuth();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    profile();
  }, []);
  
  if (loading) {
    return (
      <>
       <nav className="shadow-lg">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-6">
        <a href="https://smartranks.co/" className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-95 transition duration-300">
          <img src="https://i.imgur.com/PcOLLVm.png" className="h-14" alt="SmartRank" />
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div className='relative flex items-left h-16 w-16 '>
              <img className="h-full w-full object-cover rounded-full " src={`https://gravatar.com/avatar/?d=mp`} alt="Your avatar" />
          </div>
        </div>
      </div>
    </nav>
      </>
    )
  }

  return (
    <nav className="shadow-lg">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-6">
        <a href="https://smartranks.co/" className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-95 transition duration-300">
          <img src="https://i.imgur.com/PcOLLVm.png" className="h-14" alt="SmartRank" />
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div className='relative flex items-left'>
            <button
              className="block h-16 w-16 rounded-full overflow-hidden border-2 focus:border-gray-900"
              onClick={toggleDropdown}
            >
              <img className="h-full w-full object-cover" src={`https://gravatar.com/avatar/${user.avatar}?d=mp`} alt="Your avatar" />
            </button>
            <p className='pt-5 ml-4'>{user.name}</p>
            {isOpen && (
              <div className='absolute mt-2 w-28 bg-white border-2 rounded-lg shadow-md right-0'>
                <button 
                  onClick={() => {
                    logOutRequest();
                    router.push("/started")
                  }} 
                  className='block px-5 py-2 text-gray-800 hover:bg-gray-100 w-full text-left'
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
