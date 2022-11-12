import axios from "axios";
import { API_BASE_URL, STORAGE_KEY_JWT_TOKEN } from "@env";
import * as SecureStore from "expo-secure-store";

const USER_JWT = SecureStore.getItemAsync(`${STORAGE_KEY_JWT_TOKEN}`);

console.log(API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL.replace("\\", ""),
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  // headers: {
  //   "X-API-KEY": "Bearer <KEY>",
  //   Accept: "application/json",
  // },
});

// api.interceptors.request.use((config) => {
//   if (config.headers) {
//     config.headers.Authorization = `Bearer ${USER_JWT}`;
//   }
// });

// api.interceptors.response.use(() => {

// })

export default api;
