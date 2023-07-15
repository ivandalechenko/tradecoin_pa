import axios from "axios";

const baseURL = 'https://apisite.tradecoinai.com/api';

const api = axios.create({ baseURL })

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = token;
    }
    const registrationToken = localStorage.getItem('registrationToken');
    if (registrationToken) {
        config.headers['Authorization'] = registrationToken;
    }

    return config;
})

export default api;

