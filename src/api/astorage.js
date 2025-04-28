import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItem(key) {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export async function setItem(key, value) {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export const getTokens = () => getItem('tokens');
export const setTokens = value => setItem('tokens', value);
