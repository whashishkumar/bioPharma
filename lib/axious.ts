import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      // const token = localStorage.getItem("token");
      const token = process.env.NEXT_PUBLIC_USER_TOKEN;
      if (token) {
        if (!config.headers) {
          config.headers = {} as import("axios").AxiosRequestHeaders;
        }
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized - maybe redirect to login?");
      // Optionally: handle logout or redirect logic here
    }
    return Promise.reject(error);
  }
);

export default api;
