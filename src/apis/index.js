import axios from "axios";
import { getToken } from "./auth/storage";

const BASE_URL = "http://192.168.2.19:8000";


const instance = axios.create({
  baseURL: BASE_URL + "/api",
  
});

instance.interceptors.request.use(async (config) => {
  const token = await getToken();

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export { BASE_URL };
export default instance;