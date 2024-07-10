import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
} from "../screens/Auth/astorage";
import { errorCatch } from "./use_in_future/err.catch";

const token = getAccessToken();
console.log("token", token);

// const baseURL = "http://localhost:4000/";
// const url = "http://192.168.0.105:4000/";
const url = "http://45.138.158.116:3000/";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// axiosInstance.interceptors.response.use(res => res, async error => {
// 	if (error.response.status === 401){
// 		await axiosInstance.get('auth/refresh',{
// 			withCredentials: true
// 		}).catch(async rtError => {
// 			await removeAccessToken();
// 			return Promise.reject(rtError)
// 		})
// 		return axios(error.config)
// 	}
// 	return Promise.reject(error)
// })
// axiosInstance.interceptors.response.use(res => res, async error => {
//     if (error.response.status === 401){
// 		try {
// 			const rt = await getRefreshToken();
// 			const refreshToken = await axiosInstance.post('auth/refresh');
// 			axios.defaults.headers.common['Authorization'] = `Bearer ${refreshToken}`;
// 			error.config.headers['Authorization'] = `Bearer ${refreshToken}`;
// 			return axiosInstance(error.config);
// 		} catch (error) {
// 			return Promise.reject(error);
// 		}
//     }
//     return Promise.reject(error)
// })

// axiosInstance.interceptors.request.use(async (config) => {
// 	const accessToken = await getAccessToken();
// 	if (config.headers && accessToken) {
// 		config.headers.Authorization = `Bearer ${accessToken}`
// 	}
// 	return config
// })

// axiosInstance.interceptors.response.use(
// 	(config) => config,
// 	async (error) => {
// 		const originalRequest = error.config
// 		if (error.response.status === 401) {
// 			originalRequest._isRetry = true
// 			try {
// 				const rt = await getRefreshToken();
// 				return axiosInstance.request(originalRequest)
// 			} catch (error) {
//				 if (errorCatch(error) === 'jwt expired') removeTokensStorage()
// 			}
// 		}
// 		throw error
// 	}
// )

export default axiosInstance;
