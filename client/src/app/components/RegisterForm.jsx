import axios from 'axios';
import React, { useState } from 'react';
import Login from './Login';

const Register = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = (e) => {
    e.preventDefault();
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const register = async (formData) => {
    const name = formData.get('name');
    const lastname = formData.get('lastname');
    const email = formData.get('email');
    const password = formData.get('password');

    axios({
      method: 'post',
      url: 'http://localhost:3000/register',
      data: {
        name,
        lastname,
        email,
        password,
      }
    });
  };

  return (
    <div className="flex items-center justify-center max-h-screen">
      <div className="w-full max-w-md p-1">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center">
          Sign Up
        </h4>
        <form onSubmit={register} className="mt-8 mb-2 w-full">
          <div className="flex flex-col gap-4 mb-6">
            <label className="block font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Name
              <input
                name='name'
                placeholder="Enter name"
                className="peer h-11 w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-2 font-sans text-sm text-blue-gray-700 outline-none transition-all focus:border-2 focus:border-gray-900"
              />
            </label>
            <label className="block font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Last name
              <input
                name='lastname'
                placeholder="Enter last name"
                className="peer h-11 w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-2 font-sans text-sm text-blue-gray-700 outline-none transition-all focus:border-2 focus:border-gray-900"
              />
            </label>
            <label className="block font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Email address
              <input
                name='email'
                type='email'
                placeholder="Enter mail address"
                className="peer h-11 w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-2 font-sans text-sm text-blue-gray-700 outline-none transition-all focus:border-2 focus:border-gray-900"
              />
            </label>
            <label className="block font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Password
              <input
                name='password'
                type="password"
                placeholder="********"
                className="peer h-11 w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-2 font-sans text-sm text-blue-gray-700 outline-none transition-all focus:border-2 focus:border-gray-900"
              />
            </label>
          </div>
          <button
            className="mt-4 block w-full select-none rounded-lg bg-green-600 py-3 text-center font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85"
            type="submit"
          >
            Sign Up
          </button>
          <p className="block mt-4 text-center font-sans text-base font-normal leading-relaxed text-gray-700">
            Already have an account?
            <br />
            <button
              className="font-medium text-gray-900"
              onClick={openLoginModal}
            >
              Sign in
            </button>
          </p>
        </form>

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
    </div>
  );
};

export default Register;