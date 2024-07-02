import React from "react";
import Homepage from "../components/Homepage";
import { AuthProvider } from '../context/authContext';

const GetStarted = () => {
  return (
    <>
    <AuthProvider>
      <Homepage />
    </AuthProvider>
    </>
  );
};

export default GetStarted;
