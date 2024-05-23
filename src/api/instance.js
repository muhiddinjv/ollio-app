import axios, { AxiosInstance } from 'axios';
import { getAccessToken, getRefreshToken, removeAccessToken } from '../screens/Auth/astorage';
import { errorCatch } from './err.catch';

const axiosInstance = axios.create({
	withCredentials: true,
	baseURL: "http://10.0.2.2:4000/",
	headers: {
	  "Content-Type": "application/json",
	},
});

// axiosInstance.interceptors.response.use(res => res, async error => {
// 	console.log('err status',error.response.status);
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
// 			console.log(111,rt);
// 			const refreshToken = await axiosInstance.post('auth/refresh');
// 			axios.defaults.headers.common['Authorization'] = `Bearer ${refreshToken}`;
// 			error.config.headers['Authorization'] = `Bearer ${refreshToken}`;
// 			return axiosInstance(error.config);
// 		} catch (error) {
// 			console.log(444);
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
// 		console.log({error});
// 		const originalRequest = error.config

// 		if (error.response.status === 401) {
// 			originalRequest._isRetry = true

// 			try {
// 				const rt = await getRefreshToken();
// 				console.log(rt);
// 				return axiosInstance.request(originalRequest)
// 			} catch (error) {
// 				// if (errorCatch(error) === 'jwt expired') removeTokensStorage()
// 			}
// 		}

// 		throw error
// 	}
// )

export default axiosInstance

