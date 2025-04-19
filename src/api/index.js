import { removeAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from "./astorage";
import axiosInstance from "./axiostance";

export const signIn = async ({ phone, password }) => {
    const { data } = await axiosInstance.post("auth/signin", { phone, password });
    await setAccessToken(data.accessToken);
    await setRefreshToken(data.refreshToken);
    return data;
};
  

export const signOut = async () => {
  const refreshToken = await getRefreshToken();
  await axiosInstance.post("auth/signout", { refreshToken });
  await removeAccessToken();
};

export const refreshToken = async () => {
    const refreshToken = await getRefreshToken();
    if (!refreshToken) {
      throw new Error("No refresh token found.");
    }
    const response = await axiosInstance.post("auth/refresh", { refreshToken });
    await setAccessToken(response.data.accessToken);
    await setRefreshToken(response.data.refreshToken);
    return response.data;
  };

export const fetchBills = async () => {
  const response = await axiosInstance.get("bills");
  return response.data;
};

export const fetchGoods = async () => {
  const response = await axiosInstance.get("stock");
  return response.data;
};

export const payBill = async (billId) => {
  const response = await axiosInstance.post(`/bills/pay/${billId}`);
  return response.data;
};

// Add more API functions as needed


