import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "Zxy5663$!@#thisBiobox",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== "undefined") {
      const token = Cookies.get("token");
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
      console.error("Unauthorized - token may be missing or expired.");
    }
    return Promise.reject(error);
  }
);

export default api;
