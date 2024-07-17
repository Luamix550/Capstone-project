import axios from "../api/axios";

// Function to fetch all feedbacks from the server
export const getAllFeedbacks = () => axios.get('/admin/feedbacks');

// Function to fetch all users from the server
export const getAllUsers = () => axios.get('/admin/users');

// Function to update the role of a user
export const updateRol = (data) => axios.put(`/admin/user/${data._id}`, data);

// Function to update a specific feedback
export const updateFeed = (data) => axios.put(`/admin/feedback/${data._id}`, data);
