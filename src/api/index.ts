import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "https://app-backend-api-seven.vercel.app",
  headers: {
    "Content-type": "application/json",
  },
});

export const loginURL = "/api/auth/login";
export const logoutURL = "/api/auth/logout";

export default api;