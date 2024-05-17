import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getItem<T>(key: string): Promise<T | null> {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export async function setItem<T>(key: string, value: T): Promise<void> {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function removeItem(key: string): Promise<void> {
  return AsyncStorage.removeItem(key);
}

const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";

export const getAccessToken = () => getItem<string>(ACCESS_TOKEN)
export const removeAccessToken = () => removeItem(ACCESS_TOKEN)
export const setAccessToken  = (value : string ) => setItem<string>(ACCESS_TOKEN,value)

export const getRefreshToken = () => getItem<string>(REFRESH_TOKEN)
export const removeRefreshToken = () => removeItem(REFRESH_TOKEN)
export const setRefreshToken  = (value : string ) => setItem<string>(REFRESH_TOKEN,value)