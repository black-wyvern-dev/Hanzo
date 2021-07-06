import axios from 'axios';

export const baseUrl = 'http://192.168.104.78:8000/';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
