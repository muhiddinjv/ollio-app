import { jwtDecode } from "jwt-decode";
import { setTokens, getTokens } from "./astorage";
import axiosInstance from "./axiostance";

export const signIn = async ({ phone, password }) => {
    const { data } = await axiosInstance.post("auth/signin", { phone, password });
    await setTokens(data);
    const user = jwtDecode(data.access);
    return user;
};
  
export const signOut = async () => {
  const {refresh} = await getTokens();
  await axiosInstance.post("auth/signout", { refresh });
  await setTokens(null);
};

export const refresh = async () => {
  const {refresh} = await getTokens();
  if (!refresh) {
    throw new Error("No refresh token found.");
  }
  const { data } = await axiosInstance.post("auth/refresh", { refresh });
  await setTokens(data);
  return data;
};

export const fetchList = async (url, page = 1, limit = 25) => {
  const { data } = await axiosInstance.get(url, {params: { page, limit }});
  return data;
};

export const payBill = async (billId) => {
  const { data } = await axiosInstance.post(`/bills/pay/${billId}`);
  return data;
};


