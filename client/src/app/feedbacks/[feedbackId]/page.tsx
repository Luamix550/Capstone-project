/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect } from 'react'
import { useFeed } from '@/app/context/feedContext';
import FeedbackCard from '../components/FeedbackCard';
import { useRouter } from 'next/navigation';
import Footer from "../components/Footer";
import { useMediaQuery } from '@mui/material';

export default function FeedbackId({params} : {params : {feedbackId : string}}) {
    const { getFeedbackUser, feedbackUser, loading } = useFeed();
    const { feedbackId } = params;
    const router = useRouter();
    const buttom = useMediaQuery("(min-width: 768px)");

    useEffect(() => {
        getFeedbackUser(feedbackId);
    }, []);

    if (loading) {
        return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-load bg-cover">
            <img src="https://smartalentit.com/wp-content/uploads/2024/06/Logo-01-1.png" alt="logo" />
            <svg className='animate-spin animate-infinite w-16 h-16 max-2xl:text-green-600 text-green-600 ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </div>
        );
      }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-background-1'>
      <button
        type='button'
        onClick={() => router.push('/started')}
        className='flex items-center absolute left-2 top-2 md:left-4 md:top-4 bg-red-700 rounded-md p-4 text-white font-bold hover:bg-red-500 hover:scale-105 duration-300'
      >
        <svg className="w-6 h-6 text-gray-800 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
        </svg>
        {buttom && (
          <span className="hidden sm:inline">Back to home</span>
        )}
      </button>
      <div className="flex-grow flex items-center justify-center w-full px-4">
        <FeedbackCard feedback={feedbackUser} />
      </div>
      <div className='w-full md:absolute bottom-0'>
        <Footer />
      </div>
    </div>
  )
}
