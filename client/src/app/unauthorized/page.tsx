"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Unauthorized = () => {
  const router = useRouter();

  useEffect(() => {
    const returnHomePage = () => {
      setTimeout(() => {
        router.push("/started");
      }, 5000);
    };

    returnHomePage();
  }, [router]);

  return (
    <div className="bg-unauthorized relative h-screen bg-cover bg-center flex flex-col justify-centerbg-cover" />
  );
};

export default Unauthorized;
