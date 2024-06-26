import axios from 'axios';
import React from 'react';

const Login = () => {

  const login = async (formData) => {
    const email = formData.get('email');
    const password = formData.get('password');

    axios({
      method: 'post',
      url: 'http://localhost:3000/register',
      data: {
        email,
        password,
      }
    })
  }
  
  return (
    <div className="flex items-center justify-center max-h-screen">
      <div className="w-full max-w-md p-1">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center">
          Sign in
        </h4>
        <form onSubmit={login} className="mt-8 mb-2 w-full">
          <div className="flex flex-col gap-4 mb-6">
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
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;