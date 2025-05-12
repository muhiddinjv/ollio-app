import { jwtDecode } from 'jwt-decode';

import { getTokens, removeTokens, setTokens } from './astorage';
import axiosInstance from './axiostance';

export const signIn = async ({ phone, password }) => {
  const result = await axiosInstance.post('auth/signin', { phone, password });
  console.log('result :>> ', result);
  await setTokens(result?.data);
  const user = jwtDecode(result?.data?.access);
  return user;
};

export const signOut = async () => {
  const { refresh } = await getTokens();
  await axiosInstance.post('auth/signout', { refresh });
  await removeTokens();
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
