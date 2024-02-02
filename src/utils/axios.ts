import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

// export const baseUrl="http://api.ollio.uz/v1/";
export const baseUrl="https://ollio.web-sayt.uz";
// export const baseUrl="http://localhost:9000/api/";

// http://localhost:9000/api/
export const baseFileUrl="https://ollio.web-sayt.uz/uploads/";
// export const baseFileUrl="http://localhost:9000/api/";

const instance = axios.create({
  baseURL: baseUrl
});
const getTokenByLocalStorage = async () => {
  instance.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTlmYzNlNTRhYTA4YWU0YjBiYmU4ODYiLCJuYW1lIjoiSmFtZXMiLCJpYXQiOjE3MDY3OTcyMjUsImV4cCI6MTcwNjc5NzM0NX0.sax-VimQlpOOr4oeG_BzZpXQmrcQzULXc5YiPD3YehU`;
}
getTokenByLocalStorage()

export default instance;