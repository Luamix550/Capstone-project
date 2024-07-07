"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { logOutRequest } from '../api/auth';
import { useAuth } from '../context/authContext';

const Navbar = () => {
  const router = useRouter();
  const { user, profile, loading, logOut } = useAuth();

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
        <div className="flex items-center md:space-x-6 rtl:space-x-reverse">
            <div className='flex flex-col items-center'>
              <button className="block h-16 w-16 rounded-full overflow-hidden border-2 hover:border-gray-900 object-cover hover:scale-110 transition duration-300">
                <img src={`https://gravatar.com/avatar/${user.avatar}?d=mp`} alt="Your avatar" />
              </button>
              <p>{user.name}</p>
            </div>
            <div className='relative flex items-center'>
            <div className='flex gap-2'>
                <button className='hover:scale-110 transition duration-300 rounded-md border-2 hover:border-gray-900'
                  onClick={logOut}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                  </svg>

                </button>
                { user.rol === 'Admin' && (
                  <button onClick={() => {
                    router.push("/manager")
                  }} className='hover:scale-110 transition duration-300 rounded-md border-2 hover:border-gray-900'>
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
