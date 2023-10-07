import axios from 'axios';



axios.defaults.withCredentials = true;

export const axiosAuth = axios.create({
    baseURL: process.env.REACT_APP_BASEURLSERVER || 'http://localhost:3001/',
    timeout: 1000,
});

export const axiosSever = axios.create({
    baseURL: process.env.REACT_APP_BASEURLAUTH || 'http://localhost:3001/',
    timeout: 1000,
})