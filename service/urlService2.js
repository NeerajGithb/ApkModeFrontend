
import axios from 'axios';

const axiosApkInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/apks`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosApkInstance;
