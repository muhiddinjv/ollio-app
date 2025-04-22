import axios from "axios";
import { getAccessToken, removeAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from "./astorage";

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

    if (error.response?.status === 403 && !originalRequest._retry) {
      console.log("Token expired. Attempting to refresh...");
      const refreshToken = await getRefreshToken();

      if (refreshToken) {
        try {
          const response = await axios.post(`${baseURL}auth/refresh`, { refreshToken });

          await setAccessToken(response.data.accessToken);
          await setRefreshToken(response.data.refreshToken);

          originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`;

          return axiosInstance(originalRequest); // retry
        } catch (err) {
          console.error("Error refreshing token:", err);
          await removeAccessToken();
          return Promise.reject("Session expired. Please sign in again.");
        }
      } 
    }

    return Promise.reject(error);
  }
);


export default axiosInstance;
