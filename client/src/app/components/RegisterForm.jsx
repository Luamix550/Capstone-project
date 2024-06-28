"use client";
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import React, { useEffect, useState } from 'react';
import { registerRequest } from '../api/auth';
import { FaSpinner } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Register = ({ openLoginModal }) => {
  const router = useRouter();
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const [errorInputs, setErrorInputs] = useState([]);
  const [btnState, setBtnState] = useState(false)

  const registerUser = async (values) => {
    setBtnState(true)
    try {
      const response = await registerRequest(values);
      toast.success('Registration successful', { duration: 2000 });
      setTimeout(() => {
        router.push('/feedbacks')
      }, 3000)
    } catch (err) {
      setBtnState(false)
      const newErrorInputs = err.response?.data?.message || ['An unknown error occurred'];
      setErrorInputs(newErrorInputs);
      console.log(err);
      newErrorInputs.forEach(error => {
        toast.warning(error);
      });
    }
  };

  return (
    <div className="flex items-center justify-center max-h-screen">
      <div className="w-full max-w-md p-1">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center">
          Sign Up
        </h4>
        <form onSubmit={handleSubmit(values => registerUser(values))} className="mt-8 mb-2 w-full">
          <div className="flex flex-col gap-4 mb-6">
            <label className="block font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Name
              <input
                {...register('name', { required: true })}
                placeholder="Enter name"
                className="peer h-11 w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-2 font-sans text-sm text-blue-gray-700 outline-none transition-all focus:border-2 focus:border-gray-900"
              />
              {errors.name && <p className='bg-red-700 rounded text-center text-red-50 font-sans'>Name is required</p>}
            </label>
            <label className="block font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Last name
              <input
                {...register('lastname', { required: true })}
                placeholder="Enter last name"
                className="peer h-11 w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-2 font-sans text-sm text-blue-gray-700 outline-none transition-all focus:border-2 focus:border-gray-900"
              />
              {errors.lastname && <p className='bg-red-700 rounded text-center text-red-50 font-sans'>Last name is required</p>}
            </label>
            <label className="block font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Email address
              <input
                {...register('email', { required: true })}
                type='email'
                placeholder="Enter mail address"
                className="peer h-11 w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-2 font-sans text-sm text-blue-gray-700 outline-none transition-all focus:border-2 focus:border-gray-900"
              />
              {errors.email && <p className='bg-red-700 rounded text-center text-red-50 font-sans'>Email is required</p>}
            </label>
            <label className="block font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
              Password
              <input
                {...register('password', { required: true })}
                type="password"
                placeholder="********"
                className="peer h-11 w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-2 font-sans text-sm text-blue-gray-700 outline-none transition-all focus:border-2 focus:border-gray-900"
              />
              {errors.password && <p className='bg-red-700 rounded text-center text-red-50 font-sans'>Password is required</p>}
            </label>
          </div>
          { !btnState ? (
            <button
              className="mt-4 block w-full select-none rounded-lg bg-green-600 py-3 text-center font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85"
              type="submit"
            >
            
            Sign Up
            </button>
          ) : (
            <button type="button" className="mt-4 block w-full select-none rounded-lg bg-green-600 py-1 text-center font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85 flex justify-center" disabled>
              <div className='flex row'>
                <FaSpinner className=' animate-spin h-8 w-5 mr-3 ..." viewBox="0 0 24 24"' />
                <p className='flex items-center'>Processing...</p>
              </div>
            </button>
          ) }
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
      </div>
    </div>
  );
};

export default Register;