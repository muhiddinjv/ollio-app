import React from "react";
import axios from "axios";
import { getAccessToken, removeAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from "./astorage";
const AuthRef = React.createRef();

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
    if (error.response?.status === 403) {
      console.log("Token expired. Attempting to refresh...");

      const refreshToken = await getRefreshToken(); // Get the refresh token
      if (refreshToken) {
        try {
          const response = await axiosInstance.post("auth/refresh", { refreshToken });
          await setAccessToken(response.data.accessToken); // Update access token
          await setRefreshToken(response.data.refreshToken); // Update refresh token

          // Retry the original request with the new access token
          error.config.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
          return axiosInstance(error.config);
        } catch (refreshError) {
          console.error("Error refreshing token:", refreshError);
          await removeAccessToken(); // Remove expired token
          AuthRef.current?.signOut(); // Sign out user
          return Promise.reject("Session expired. Please sign in again.");
        }
      } else {
        console.log("No refresh token found. Redirecting to SignIn...");
        await removeAccessToken(); // Remove expired token
        AuthRef.current?.signOut(); // Sign out user
        return Promise.reject("Session expired. Please sign in again.");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
