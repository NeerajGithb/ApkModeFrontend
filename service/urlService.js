import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://apkmods.onrender.com/api/auth',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default axiosInstance;