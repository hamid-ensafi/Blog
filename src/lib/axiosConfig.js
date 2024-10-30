import axios from 'axios';
import Cookies from 'js-cookie'; 
const axiosConfig = axios.create({
    withCredentials: true, 
});


axiosConfig.interceptors.request.use(
    config => {
        const token = Cookies.get('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

axiosConfig.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
);

export default axiosConfig;