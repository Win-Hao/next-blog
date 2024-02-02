import axios from "axios";
import {cookies} from "next/headers";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})
axiosInstance.interceptors.request.use((config) => {
    // 获取token
    const token = cookies().get('token')?.value

    // 如果token存在，则添加到请求头中
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});
export default axiosInstance;
