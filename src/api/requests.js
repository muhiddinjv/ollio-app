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

export const saveGood = async (good) => {
  console.log(111);
  const response = await axiosInstance.patch('stock/update', {
    product_id: good.product_id,
    price: Number(good.price),
    order: Number(good.order),
    available: good.available,
    group: good.group,
  });
  console.log(222);
  console.log('response :>> ', response.data);
  return response.data;
};

export const deleteGood = async (productId) => {
  const response = await axiosInstance.delete('stock/delete', {
    data: { product_id: productId },
  });
  return response.data;
};

export const processSale = async (billId) => {
  const response = await axiosInstance.post(`bills/pay/${billId}`);
  return response.data;
};
