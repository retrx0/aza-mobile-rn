import axios from "axios";
import { API_BASE_URL } from "@env";
console.log(API_BASE_URL);
const api = axios.create({
  baseURL: API_BASE_URL,
  responseType: "json",
  headers: { 
    'Content-Type':'application/json'
  },
  // headers: {
  //   "X-API-KEY": "Bearer <KEY>",
  //   Accept: "application/json",
  // },
});
export default api;
