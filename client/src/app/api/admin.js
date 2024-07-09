import axios from "../api/axios";

export const getAllFeedbacks = () => axios.get('/admin/feedbacks');
export const getAllUsers = () => axios.get('/admin/users');
export const updateRol = (data) => axios.put(`/admin/user/${data._id}`, data);
export const updateFeed = (data) => axios.put(`/admin/feedback/${data._id}`, data);