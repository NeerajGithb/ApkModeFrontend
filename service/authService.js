// // src/api/authService.js

// import axiosInstance from "./urlService";


// export const signup = async (email, password) => {
//   try {
//     const res = await axiosInstance.post('/signup', { email, password });
//     return res.data; // return success response
//   } catch (error) {
//    console.error('Signup error:', error?.response?.data || error.message);
//     throw error?.response?.data?.message || 'Unknown signup error';
//   }
// };

// export const signin = async (email, password) => {
//   try {
//     const res = await axiosInstance.post('/signin', { email, password });
//     return res.data;
//   } catch (error) {
//     throw error.response.data.message;
//   }
// };

// export const signout = async () => {
//   try {
//     const res = await axiosInstance.post('/signout');
//     return res.data;
//   } catch (error) {
//     throw error.response.data.message;
//   }
// };

// export const checkLogin = async () => {
//   try {
//     const res = await axiosInstance.get('/me'); 
//     return res.data;
//   } catch (error) {
//     return null;
//   }
// };
