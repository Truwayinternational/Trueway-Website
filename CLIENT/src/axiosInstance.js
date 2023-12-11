import axios from 'axios'

export const userInstance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

userInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config
    },
    (error) => {
      Promise.reject(error);
    }
)
