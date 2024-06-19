import mongoose from "mongoose";

/**
 * Connect to the MongoDB database using Mongoose.
 *
 * This function attempts to establish a connection to the MongoDB database
 * using the connection string provided in the environment variables. It leverages
 * Mongoose, an ODM (Object Data Modeling) library for MongoDB and Node.js.
 *
 * If the connection is successful, a confirmation message is logged to the console.
 * If the connection fails, the error is caught and logged to the console.
 *
 * Environment Variables:
 * - MONGO_URI: The MongoDB connection string.
 *
 * Example Usage:
 *
 * import { connectDb } from './path_to_this_file';
 *
 * connectDb();
 */
export const connectDb = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
};
