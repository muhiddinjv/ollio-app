
import axios from "axios";
import { getAccessToken, removeAccessToken } from "./astorage";
import { AuthRef } from "./AuthProvider";

const baseURL = "https://ollioapi.vercel.app/";
// const baseURL = "http://localhost:4000/";
// const baseURL = "http://192.168.0.105:4000/";

const axiosInstance = axios.create({baseURL, headers: { "Content-Type": "application/json" }});

// Request Interceptor: Attach token to requests
axiosInstance.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor: Handle token expiration
axiosInstance.interceptors.response.use(
  (response) => response, // Return response if no errors
  async (error) => {
    if (error.response?.status === 401) {
      console.log("Token expired. Redirecting to SignIn...");
      
      await removeAccessToken(); // Remove expired token
      AuthRef.current?.signOut(); // Sign out user

      return Promise.reject("Session expired. Please sign in again.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
