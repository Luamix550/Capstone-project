import axios from "../api/axios";

export const newFeedback = (data) => axios.post('/feedbacks', data);
export const getFeedbacks = () => axios.get('/feedbacks');