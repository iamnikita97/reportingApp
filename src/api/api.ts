import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';

// Define API Base URL
const API = axios.create({
  baseURL: 'https://your-api.com', // Change to your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor (Add Auth Token if needed)
API.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token: string | null = ''; // Retrieve token from Redux/AsyncStorage if needed
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// Response Interceptor (Handle Errors Globally)
API.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(
      error.response?.data || {message: 'Something went wrong'},
    );
  },
);

export default API;
