import axios from 'axios';
import * as AuthService from '../services/AuthService';

axios.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${decodeURI(AuthService.getAccessToken())}`,
    'Content-Type': 'application/json',
  };

  config.baseURL = process.env.API_BASE_URL;

  return config;
});

export default axios;
