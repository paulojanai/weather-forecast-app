import axios from "axios";
import { API_URL, APP_ID } from "../../.env.json";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(async (config) => {
  config.params = { appid: APP_ID, units: "metric" };
  return config;
});

export default api;
