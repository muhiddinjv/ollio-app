import axios from "axios";
import { getTokens, setTokens } from "./astorage";
import { authService } from "../screens/Auth/AuthService";

const baseURL = "https://ollioapi.vercel.app/";
// const baseURL = "http://localhost:4000/";
// const baseURL = "http://192.168.0.105:4000/";

const axiosInstance = axios.create({baseURL, headers: { "Content-Type": "application/json" }});

// Request Interceptor: Attach token to requests
axiosInstance.interceptors.request.use(async (config) => {
  const tokens = await getTokens();
  if (!tokens) {
    console.log('No access token available');
  }
  config.headers.Authorization = `Bearer ${tokens.access}`;
  return config;
});

// Response Interceptor: Handle token expiration
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status

    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // <== Mark request as retried
      
      console.log("Token expired. Attempting to refresh...");
      const { refresh } = await getTokens();

      if (refresh) {
        try {
          const response = await axios.post(`${baseURL}auth/refresh`, { refresh });

          await setTokens(response.data);

          originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`;

          return axiosInstance(originalRequest); // retry
        } catch (err) {
          console.error("Error refreshing token:", err);
          authService.signOut();
          return Promise.reject("Session expired. Please sign in again.");
        }
      } 
    }
    return Promise.reject(error);
  }
);


export default axiosInstance;