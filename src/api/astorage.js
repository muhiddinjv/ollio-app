import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItem(key) {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export async function setItem(key, value) {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function removeItem(key) {
  return AsyncStorage.removeItem(key);
}

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';
const USER = 'user';

export const getAccessToken = () => getItem(ACCESS_TOKEN);
export const removeAccessToken = () => removeItem(ACCESS_TOKEN);
export const setAccessToken = value => setItem(ACCESS_TOKEN, value);

export const getRefreshToken = () => getItem(REFRESH_TOKEN);
export const removeRefreshToken = () => removeItem(REFRESH_TOKEN);
export const setRefreshToken = value => setItem(REFRESH_TOKEN, value);

export const getUser = () => getItem(USER);
export const removeUser = () => removeItem(USER);
export const setUser = value => setItem(USER, value);
