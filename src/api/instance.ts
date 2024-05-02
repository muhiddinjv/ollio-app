import axios from 'axios';
import { getToken } from '../screens/Auth/astorage';

const axiosInstance = axios.create({
    baseURL: 'http://10.0.2.2:4000/',
})


axiosInstance.interceptors.response.use(res => res, async error => {
    if (error.response && error.response.status === 401){
        console.log('call the refresh token here');
        // console.log(333,getToken());
        try {
            const refreshToken = await axiosInstance.get('auth/refresh');
            console.log(222,refreshToken);
            axios.defaults.headers.common['Authorization'] = `Bearer ${refreshToken}`;

            const originalRequest = error.config;
            originalRequest.headers['Authorization'] = `Bearer ${refreshToken}`;
        } catch (error) {
            console.log(111);
            return Promise.reject(error)
        }
    }
    return Promise.reject(error)
})

export default axiosInstance;