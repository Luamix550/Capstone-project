import axios from "../api/axios";

export const registerRequest = (user) => axios.post('/register', user);
export const loginRequest = (user) => axios.post('/login', user);
export const logOutRequest = () => axios.post('/logout');
export const profileRequest = () => axios.get('/profile');