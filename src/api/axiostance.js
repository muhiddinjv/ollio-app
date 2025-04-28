import axios from "axios";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";
import { getTokens, setTokens } from "./astorage";
import { Alert } from "react-native";
import { formatError } from "../utils";

const baseURL = "https://ollioapi.vercel.app/";
// const baseURL = "http://localhost:4000/";
// const baseURL = "http://192.168.0.105:4000/";

const axiosInstance = axios.create({baseURL, headers: { "Content-Type": "application/json" }});

// Request Interceptor: Attach token to requests before sending a request
axiosInstance.interceptors.request.use(async (req) => {
  const tokens = await getTokens();
  if (!tokens) return req;
  const { refresh, access } = tokens;

  req.headers.Authorization = `Bearer ${access}`;

  const user = jwtDecode(access);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (isExpired) {
    try {
      const {data} = await axios.post(`${baseURL}/auth/refresh/`, {refresh});
      await setTokens(data);
      req.headers.Authorization = `Bearer ${data.access}`;
    } catch (error) {
      Alert.alert("Error refreshing token:", formatError(error));
      await setTokens(null);
      throw error;
    }
  }

  return req;
});

// Response Interceptor: Handle responses
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally if needed
    return Promise.reject(error);
  }
);

export default axiosInstance;
