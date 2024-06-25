import React, { useState } from 'react';
import { Modal } from 'flowbite';
import Login from './LoginForm'; // Ajusta la ruta de importación según sea necesario

export const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative bg-homepage h-screen bg-cover bg-center flex flex-col justify-center">

      <div className="absolute top-4 left-4 cursor-pointer" onClick={() => window.location.href = 'https://smartranks.co/'}>
        <img src="https://i.imgur.com/fbDATZn.png" alt="Logo" className="h-12 w-auto" />
      </div>

      <div className="flex flex-col items-end pr-8">
        <header className="text-right mb-4">
          <h1 className="text-6xl font-semibold mb-4">
            Your voice <span className="text-green-600"> <br />matters!</span>
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
          className="text-3xl bg-green-600 hover:bg-green-900 hover:scale-125 transition duration-300 text-white hover:text-white font-bold py-2 px-4 rounded"
          onClick={openModal}
        >
          Get started
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeModal}></div>
          <div className="bg-white rounded-lg shadow-lg p-8 z-50 max-w-lg mx-auto">
            <Login />
            <button
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
