/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useState } from 'react';
import Register from './RegisterForm';
import Login from './Login';

/**
 * Homepage component for the main landing page.
 * Handles opening and closing of register and login modals.
 */
const Homepage = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Open the register modal
  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  // Close the register modal
  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  // Open the login modal and close the register modal
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    closeRegisterModal();
  };

  // Close the login modal
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  // Switch from login modal to register modal
  const loginReturnRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  return (
    <div className="relative h-screen bg-mobile bg-cover bg-center sm:bg-homepage flex flex-col justify-center">
      <div className="absolute top-4 left-4 cursor-pointer" onClick={() => window.location.href = 'https://smartranks.co/'}>
        <img src="https://i.imgur.com/fbDATZn.png" alt="Logo" className="h-16 w-auto hover:scale-95 transition duration-300" />
      </div>
      <div className="flex flex-col items-end pr-5 sm:pr-24">
        <header className="text-right mb-4">
          <h1 className="text-7xl font-Expletus b-4 text-black">
            <span className="tracking-wide">Your voice</span> <span className="text-green-600 font-bold uppercase"><br />MATTERS!</span>
          </h1>
        </header>
        <article className="prose text-right mb-8 w-6/12">
          <p className="text-xl break-keep font-semibold text-black container">
            Help us improve by sharing your honest <span className="text-green-600">feedback</span>.
            <br />
            We listen and use it to make things even better for you.
          </p>
        </article>
        <button
          className="text-3xl rounded-full bg-green-600 hover:bg-green-900 hover:scale-125 transition duration-600 text-white font-bold py-2 px-4"
          onClick={openRegisterModal}
        >
          Get started
        </button>
      </div>

      {isRegisterModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 backdrop-blur-xl bg-black bg-opacity-50" onClick={closeRegisterModal}></div>
          <div className="relative bg-white rounded-lg shadow-lg p-5 z-50 max-w-lg mx-auto">
            <button onClick={closeRegisterModal} className="absolute top-3 right-3 py-1 px-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-5">
              <Register openLoginModal={openLoginModal} />
            </div>
          </div>
        </div>
      )}

      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 backdrop-blur-xl bg-black bg-opacity-50" onClick={closeLoginModal}></div>
          <div className="relative bg-white rounded-lg shadow-lg p-5 z-50 max-w-lg mx-auto">
            <button onClick={loginReturnRegister} className="absolute top-3 left-3 py-1 px-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button onClick={closeLoginModal} className="absolute top-3 right-3 py-1 px-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-5">
              <Login />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
