// /src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // Backend server URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
