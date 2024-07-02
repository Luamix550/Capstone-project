"use client"
import React from "react";
import Homepage from "./components/Homepage";
import FeedBacks from "./feedbacks/page";
import { AuthProvider } from "./context/authContext";

export default function Home() {
  return (
      <>
      <AuthProvider>
      <Homepage />
      </AuthProvider>
      </>
  );
}
