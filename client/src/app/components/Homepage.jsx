import React, { useState } from 'react';
import Register from '../components/RegisterForm'
import Login from './Login';

const Homepage = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const openLoginModal = (e) => {
    e.preventDefault();
    setIsLoginModalOpen(true);
    closeRegisterModal();
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="relative h-screen bg-mobile bg-cover bg-center sm:bg-homepage flex flex-col justify-center">
      <div className="absolute top-4 left-4 cursor-pointer" onClick={() => window.location.href = 'https://smartranks.co/'}>
        <img src="https://i.imgur.com/fbDATZn.png" alt="Logo" className="h-12 w-auto" />
      </div>
      <div className="flex flex-col items-end pr-8">
        <header className="text-right mb-4">
          <h1 className="text-6xl font-semibold mb-4">
            Your voice<span className="text-green-600 font-bold uppercase"> <br />MATTERS!</span>
          </h1>
        </header>
        <article className="prose text-right mb-8 w-6/12">
          <p className="text-lg break-keep font-semibold text-black-700 container">
            Help us improve by sharing your honest <span className="text-green-600">feedback</span>.
            <br />
            We listen and use it to make things even better for you.
          </p>
        </article>
        <button
          className="text-3xl rounded-full bg-green-600 hover:bg-green-900 hover:scale-125 transition duration-600 text-white hover:text-white font-bold py-2 px-4 rounded"
          onClick={openRegisterModal}
        >
          Get started
        </button>
      </div>

      {isRegisterModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-60" onClick={closeRegisterModal}></div>
          <div className="relative bg-white rounded-lg shadow-lg p-5 z-50 max-w-lg mx-auto">
            <button
              className="text-sm absolute top-3 right-3 bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2.5 rounded-full"
              onClick={closeRegisterModal}
            >
              x
            </button>
            <div className="p-5">
              <Register openLoginModal={openLoginModal} />
            </div>
          </div>
        </div>
      )}

      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-60" onClick={closeLoginModal}></div>
          <div className="relative bg-white rounded-lg shadow-lg p-5 z-50 max-w-lg mx-auto">
            <button
              className="text-sm absolute top-3 right-3 bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2.5 rounded-full"
              onClick={closeLoginModal}
            >
              x
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