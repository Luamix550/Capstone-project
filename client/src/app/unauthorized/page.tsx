"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Unauthorized = () => {
  const router = useRouter();

  const returnHomePage = () => {
    setTimeout(() => {
      router.push('/started');
    }, 5000);
  }
  return (
    <div className="bg-unauthorized relative h-screen bg-cover bg-center flex flex-col justify-centerbg-cover">
      {returnHomePage()}
    </div>
  );
};

export default Unauthorized;