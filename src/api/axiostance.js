import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { getTokens, setTokens } from "./astorage";
import { authService } from "../screens/Auth/AuthService";

const axiosInstance = axios.create({
  baseURL: "https://ollioapi.vercel.app/",
  headers: { "Content-Type": "application/json" },
});

// 1) Refresh-token logic
const refreshAuthLogic = async (failedRequest) => {
  const tokens = await getTokens();
  if (!tokens?.refresh) {
    await authService.signOut();
    return Promise.reject("No refresh token");
  }

  try {
    // NOTE: call the same instance so baseURL, interceptors, etc. are consistent
    console.log('refreshing tokens...');
    const { data } = await axiosInstance.post("auth/refresh", { refresh: tokens.refresh });
    console.log('refreshAuthLogic data :>> ', 111,data);

    // save the new tokens
    await setTokens(data);

    // update the header on the failed request
    failedRequest.response.config.headers["Authorization"] = `Bearer ${data.access}`;

    // tell axios-auth-refresh “go ahead and retry”
    return Promise.resolve();
  } catch (err) {
    // if anything goes wrong, force a sign-out
    await authService.signOut();
    return Promise.reject(err);
  }
};

// 2) Attach the refresh interceptor to YOUR instance
createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic, {
  statusCodes: [401, 403]
});

// 3) Regular request interceptor to add the access token
axiosInstance.interceptors.request.use(
  async (config) => {
    const tokens = await getTokens();
    if (tokens?.access) {
      config.headers.Authorization = `Bearer ${tokens.access}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;