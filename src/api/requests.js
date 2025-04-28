import { jwtDecode } from 'jwt-decode';

import { getRefreshToken, removeAccessToken, setAccessToken, setRefreshToken, setUser } from './astorage';
import axiosInstance from './axiostance';

export const signIn = async ({ phone, password }) => {
  const { data } = await axiosInstance.post('auth/signin', { phone, password });
  await setAccessToken(data.accessToken);
  await setRefreshToken(data.refreshToken);
  const user = jwtDecode(data.accessToken);
  await setUser(user);
  return user;
};

export const signOut = async () => {
  const refreshToken = await getRefreshToken();
  await axiosInstance.post('auth/signout', { refreshToken });
  await removeAccessToken();
};

export const refreshToken = async () => {
  const refreshToken = await getRefreshToken();
  if (!refreshToken) {
    throw new Error('No refresh token found.');
  }
  const { data } = await axiosInstance.post('auth/refresh', { refreshToken });
  await setAccessToken(data.accessToken);
  await setRefreshToken(data.refreshToken);
  return data;
};

export const fetchList = async (url, page = 1, limit = 25) => {
  const { data } = await axiosInstance.get(url, { params: { page, limit } });
  return data;
};

export const payBill = async billId => {
  const { data } = await axiosInstance.post(`/bills/pay/${billId}`);
  return data;
};
