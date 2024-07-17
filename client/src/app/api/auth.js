import axios from "../api/axios";

// Function to make a POST request to register a user
export const registerRequest = (user) => axios.post('/register', user);

// Function to make a POST request to log in a user
export const loginRequest = (user) => axios.post('/login', user);

// Function to make a POST request to log out a user
export const logOutRequest = () => axios.post('/logout');

// Function to make a GET request to fetch user profile information
export const profileRequest = () => axios.get('/profile');
