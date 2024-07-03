import axios from "../api/axios";

export const newFeedback = (data) => axios.post('/feedbacks', data);
export const getFeedbacks = () => axios.get('/feedbacks');
export const filterFeedbacks = (date) => axios.post('/feedbacks/filter', date);