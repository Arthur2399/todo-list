import axios from 'axios';
import { getEnvironments } from '../helpers/getEnvironments';

const { VITE_API_URL } = getEnvironments();

export const todoApi = axios.create({
    baseURL: VITE_API_URL
});



/* morgquickApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'Authorization': localStorage.getItem('token')
    }

    return config;
})
 */