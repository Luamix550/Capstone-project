import axios from "../api/axios";

// Function to create a new feedback
export const newFeedback = (data) => axios.post('/feedbacks', data);

// Function to fetch all feedbacks
export const getFeedbacks = () => axios.get('/feedbacks');

// Function to filter feedbacks by date
export const filterFeedbacks = (date) => axios.post('/feedbacks/filter', date);
