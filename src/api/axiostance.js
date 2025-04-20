import React from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
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
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const accessToken = await getAccessToken();
    const decodedToken = jwtDecode(accessToken);
    const isTokenExpired = dayjs.unix(decodedToken.exp).isBefore(dayjs());

    if (isTokenExpired && !originalRequest._retry) {
      console.log("Token expired. Attempting to refresh...");
      const refreshToken = await getRefreshToken();

      if (refreshToken) {
        try {
          const response = await axios.post(`${baseURL}auth/refresh`, { refreshToken });

          await setAccessToken(response.data.accessToken);
          await setRefreshToken(response.data.refreshToken);

          // Update Authorization header
          originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`;

          return axiosInstance(originalRequest); // retry
        } catch (err) {
          console.error("Error refreshing token:", err);
          await removeAccessToken();
          AuthRef.current?.signOut();
          return Promise.reject("Session expired. Please sign in again.");
        }
      } 
    }

    return Promise.reject(error);
  }
);


export default axiosInstance;
