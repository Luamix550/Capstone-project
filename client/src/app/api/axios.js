import axios from 'axios';

// Create an instance of Axios with custom configuration
const instance = axios.create({
    baseURL: 'http://localhost:4000/api/', // Base URL for all requests
    withCredentials: true // Allows sending credentials (like cookies) with cross-origin requests
});

export default instance;