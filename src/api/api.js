import axios from "axios";

const baseURL = 'https://apisite.tradecoinai.com/api';

const api = axios.create({ baseURL })

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = token;
    }

    return config;
})

export default api;

