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

export const getTokens = async () => {
  try {
    const tokens = await getItem('tokens');
    return tokens || {};
  } catch (error) {
    console.log('error :>> ', error);
    return {};
  }
};
export const setTokens = value => setItem('tokens', value);
export const removeTokens = () => removeItem('tokens');
