"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useFeed } from '@/app/context/feedContext';
import { useAuth } from '@/app/context/authContext';

/**
 * Navbar component for displaying navigation and user information.
 * 
 * @param {Object} user - User object containing user details like name, avatar, and role.
 * @returns {JSX.Element} Navbar component UI.
 */
const Navbar = ({ user }) => {
  const router = useRouter();
  const { logOut } = useAuth();
  const { setAllFeedbacks } = useFeed();

  return (
    <nav className="shadow-lg">
      <div className="shadow-lg flex justify-between items-center mx-auto max-w-screen p-6 bg-white">
        {/* Logo */}
        <a href="https://smartranks.co/" className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-95 transition duration-300">
          <img src="https://i.imgur.com/PcOLLVm.png" className="h-14" alt="SmartRank" />
        </a>
        
        {/* User Info */}
        <div className="flex items-center md:space-x-6 rtl:space-x-reverse">
          <div className='flex flex-col items-center'>
            {/* User Avatar */}
            <button className="block h-16 w-16 rounded-full overflow-hidden border-2 hover:border-gray-900 object-cover hover:scale-110 transition duration-300">
              <img src={`https://gravatar.com/avatar/${user.avatar}?d=mp`} alt="Your avatar" />
            </button>
            {/* User Name */}
            <p>{user.name}</p>
          </div>

          {/* Actions */}
          <div className='relative flex items-center'>
            <div className='flex gap-2 md:gap-3 mb-4'>
              {/* Logout Button */}
              <button
                className='hover:scale-110 transition duration-300 rounded-md border-2 hover:border-gray-900'
                onClick={() => {
                  logOut();
                  setAllFeedbacks([]);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
              </button>

              {/* Admin Panel Button (shown only to admins) */}
              {user.rol === 'Admin' && (
                <button
                  onClick={() => {
                    router.push("/manager");
                  }}
                  className='hover:scale-110 transition duration-300 rounded-md border-2 hover:border-gray-900'
                >
                  <img className='h-7 w-7 ' src="https://cdn-icons-png.freepik.com/512/9703/9703596.png" alt="adminImage" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
