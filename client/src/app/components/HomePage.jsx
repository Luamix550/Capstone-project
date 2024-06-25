import React, { useState } from 'react';
import { Modal } from 'flowbite';
import Login from './LoginForm';

export const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-homepage bg-cover bg-center max-sm:bg-cover max-sm:bg-left max-sm:bg-right relative  h-screen flex flex-col justify-center">

      <div className="absolute top-4 left-4 cursor-pointer hover:scale-125 transition duration-1200" onClick={() => window.location.href = 'https://smartranks.co/'}>
        <img src="https://i.imgur.com/fbDATZn.png" alt="Logo" className="h-12 w-auto" />
      </div>

      <div className="flex flex-col items-end pr-5 lg:pr-60">
        <header className="text-right mb-4">
          <h1 className="text-6xl font-semibold mb-4">
            Your voice <span className="text-green-600"> <br />matters!</span>
          </h1>
        </header>
        <article className="prose text-right mb-8 w-6/12">
          <p className="text-lg break-keep font-semibold text-black-700 max-lg:backdrop-blur-md max-lg:border max-lg:border-black max-lg:rounded-md p-3">
            Help us improve by sharing your honest <span className="text-green-600">feedback</span>.
            <br />
            We listen and use it to make things even better for you.
          </p>
        </article>
        <button
          className="text-3xl rounded-full bg-green-600 hover:bg-green-900 hover:scale-125 transition duration-00 text-white hover:text-white font-bold py-2 px-4 rounded"
          onClick={openModal}
        >
          Get started
        </button>
      </div>

      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black bg-opacity-60" onClick={closeModal}></div>
    <div className="relative bg-white rounded-lg shadow-lg p-5 z-50 max-w-lg mx-auto">
      <button
        className="absolute bt-3 right-3 text-gray-500 hover:text-red-500"
        onClick={closeModal}
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