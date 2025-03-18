import axios from 'axios';

// Base URL for API
const API = axios.create({
  baseURL: 'https://your-api.com', // Change to your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor (Add Auth Token if needed)
API.interceptors.request.use(
  config => {
    const token = ''; // Get token from Redux or AsyncStorage if needed
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// Response Interceptor (Handle Errors Globally)
API.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error.response?.data || 'Something went wrong');
  },
);

export default API;
