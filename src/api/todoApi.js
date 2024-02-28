import axios from 'axios';
import { getEnvironments } from '../helpers/getEnvironments';

const { VITE_API_URL } = getEnvironments();

export const todoApi = axios.create({
    baseURL: VITE_API_URL
});

todoApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': sessionStorage.getItem('token')
    }

    return config;
})
