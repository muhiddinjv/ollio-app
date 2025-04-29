import { jwtDecode } from 'jwt-decode';

import { getTokens, setTokens } from './astorage';
import axiosInstance from './axiostance';

export const signIn = async ({ phone, password }) => {
  const { data } = await axiosInstance.post('auth/signin', { phone, password });
  await setTokens(data);
  const user = jwtDecode(data.access);
  return user;
};

export const signOut = async () => {
  const { refresh } = await getTokens();
  await axiosInstance.post('auth/signout', { refresh });
  await setTokens(null);
};

export const refresh = async () => {
  const { refresh } = await getTokens();
  if (!refresh) {
    throw new Error('No refresh token found.');
  }
  const { data } = await axiosInstance.post('auth/refresh', { refresh });
  await setTokens(data);
  return data;
};
