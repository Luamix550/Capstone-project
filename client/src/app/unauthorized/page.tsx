"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Unauthorized = () => {
  const router = useRouter(); // Obtaining the router object using `useRouter`

  useEffect(() => {
    // useEffect to handle the redirection timer
    const timer = setTimeout(() => {
      router.push("/started"); // Redirecting to the "/started" route after 5000ms (5 seconds)
    }, 5000);

    // useEffect cleanup to clear the timer
    return () => clearTimeout(timer);
  }, [router]); // Dependency for useEffect: router

  return (
    <div className="bg-unauthorized relative h-screen bg-cover bg-center flex flex-col justify-center">
      {/* Component content */}
    </div>
  );
};

export default Unauthorized;
