import axios from 'axios';
import React from 'react';

const Login = () => {
<<<<<<< HEAD

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
    })
  }
  
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
=======
  return (
    <div className="flex items-center justify-center min-h-screen min-h-2.5">
      <div className="relative flex flex-col text-gray-700 bg-grey shadow-lg rounded-xl p-6 bg-clip-border">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center">
          Sign Up
        </h4>
        <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
          <div className="flex flex-col gap-6 mb-1">
            <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Name
            </h6>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                name='name'
                placeholder="John Doe"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>
            <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Last name
            </h6>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                name='lastname'
                placeholder="John Doe"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
>>>>>>> 1044e60a275ed0c16233b1b79c7a7a28a1083343
              />
            </label>
            <label className="block font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Last name
              <input
                name='lastname'
                placeholder="Enter last name"
                className="peer h-11 w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-2 font-sans text-sm text-blue-gray-700 outline-none transition-all focus:border-2 focus:border-gray-900"
              />
<<<<<<< HEAD
            </label>
            <label className="block font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Email address
              <input
=======
            </div>
            <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Email address
            </h6>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                placeholder="name@mail.com"
>>>>>>> 1044e60a275ed0c16233b1b79c7a7a28a1083343
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
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;