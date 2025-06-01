import { jwtDecode } from 'jwt-decode';

import { getTokens, removeTokens, setTokens } from './astorage';
import axiosInstance from './axiostance';

export const signIn = async ({ phone, password }) => {
  const result = await axiosInstance.post('auth/signin', { phone, password });
  await setTokens(result?.data);
  const user = jwtDecode(result?.data?.access);
  return user;
};

export const signOut = async () => {
  try {
    const { refresh } = await getTokens();
    await axiosInstance.post('auth/signout', { refresh });
    await removeTokens();
  } catch (error) {
    console.error('Error during sign out:', error);
    throw error;
  }
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

export const goodsAdd = async (goods) => {
  try {
    const response = await axiosInstance.post('stock/receive', goods);
    return response.data;
  } catch (error) {
    console.error('Error during goods addition:', error);
    throw error;
  }
};

export const goodEdit = async (good) => {
  try {
    const response = await axiosInstance.patch('stock/update', {
      product_id: good.product_id,
      price: Number(good.price),
      order: Number(good.order),
      available: good.available,
      group: good.group,
    });
    return response.data;
  } catch (error) {
    console.error('Error during good editing:', error);
    throw error;
  }
};

export const goodDelete = async (productId) => {
  try {
    const response = await axiosInstance.delete('stock/delete', {
      data: { product_id: productId },
    });
    return response.data;
  } catch (error) {
    console.error('Error during good deletion:', error);
    throw error;
  }
};

export const processSale = async (billId) => {
  try {
    const response = await axiosInstance.post(`bills/pay/${billId}`);
    return response.data;
  } catch (error) {
    console.error('Error during sale processing:', error);
    throw error;
  }
};

export const userAdd = async (user) => {
  try {
    const response = await axiosInstance.post('users', user);
    return response.data;
  } catch (error) {
    console.error('Error during user addition:', error);
    throw error;
  }
};


