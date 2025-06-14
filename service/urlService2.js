
import axios from 'axios';

const axiosApkInstance = axios.create({
  baseURL: 'https://apkmods.onrender.com/api/apks',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosApkInstance;
