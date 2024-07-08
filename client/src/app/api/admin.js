import axios from "../api/axios";

export const getAllFeedbacks = () => axios.get('/admin/feedbacks');
export const getAllUsers = () => axios.get('/admin/users');
export const updateRol = (data) => axios.put(`/admin/user/${data._id}`, data);
export const getUser = (id) => axios.get(`/admin/user/{id}`, id);