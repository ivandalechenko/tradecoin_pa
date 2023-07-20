import axios from "axios";

const baseURL = 'https://apisite.tradecoinai.com/api';

const api = axios.create({ baseURL })

api.interceptors.request.use((config) => {
    // config.headers['Access-Control-Allow-Origin'] = '*';
    // config.headers['Content-Type'] = 'application/json';
    const registrationToken = localStorage.getItem('registrationToken');
    if (registrationToken) {
        config.headers['Authorization'] = registrationToken;
    }
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = token;
    }


    return config;
})

export default api;

