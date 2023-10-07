import axios from 'axios';



axios.defaults.withCredentials = true;

export const instanceAxios = axios.create({
    baseURL: process.env.REACT_APP_BASEURL || 'http://localhost:3001/',
    timeout: 1000,
});

export const axiosJWT = axios.create()