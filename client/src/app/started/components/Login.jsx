"use client"
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaSpinner } from "react-icons/fa";
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/authContext';

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn, user, isAuthenticated, btnState } = useAuth();

  // Redirecciona a la página de feedbacks si el usuario está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      toast.success(`Welcome back, ${user.name}!`, { duration: 2000 });
      setTimeout(() => {
        router.push('/feedbacks');
      }, 3000);
    }
  }, [isAuthenticated]);

  // Función para manejar el inicio de sesión del usuario
  const loginUser = async (userData) => {
    signIn(userData);
  };

  return (
    <div className="flex items-center justify-center max-h-screen">
      <div className="w-full max-w-md p-1">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-900 text-center">
          Sign in
        </h4>
        <form onSubmit={handleSubmit(loginUser)} className="mt-8 mb-2 w-full">
          <div className="flex flex-col gap-4 mb-6">
            {/* Campo de correo electrónico */}
            <label className="block font-sans text-base font-semibold leading-relaxed text-gray-900 bg-white">
              Email address
              <input
                { ...register('email', { required: true })}
                type='email'
                placeholder="Enter mail address"
                className="peer h-11 w-full rounded-md border border-gray-400 bg-transparent px-3 py-2 font-sans text-sm text-blue-gray-700 outline-none transition-all focus:border-2 focus:border-gray-900"
              />
              {errors.email && <p className='bg-red-700 rounded text-center text-white font-sans'>Email is required</p>}
            </label>
            {/* Campo de contraseña */}
            <label className="block font-sans text-base font-semibold leading-relaxed text-gray-900">
              Password
              <input
                { ...register('password', { required: true })}
                type="password"
                placeholder="********"
                className="peer h-11 w-full rounded-md border border-gray-400 bg-transparent px-3 py-2 font-sans text-sm text-blue-gray-700 outline-none transition-all focus:border-2 focus:border-gray-900"
              />
              {errors.password && <p className='bg-red-700 rounded text-center text-white font-sans'>Password is required</p>}
            </label>
          </div>
          {/* Botón de inicio de sesión */}
          { !btnState ? (
            <button
              className="mt-4 block w-full select-none rounded-lg bg-green-600 py-3 text-center font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85"
              type="submit"
            >
              Sign in
            </button>
          ) : (
            // Botón de carga cuando se está procesando la solicitud
            <button type="button" className="mt-4 block w-full select-none rounded-lg bg-green-600 py-1 text-center font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85 flex justify-center" disabled>
              <div className='flex row'>
                <FaSpinner className=' animate-spin h-8 w-5 mr-3 ..." viewBox="0 0 24 24"' />
                <p className='flex items-center'>Processing...</p>
              </div>
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
