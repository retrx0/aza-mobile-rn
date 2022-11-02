import axios from "axios";
import { API_BASE_URL } from "@env";
const api = axios.create({
  baseURL:'https://aza-backend-asp-dev.azurewebsites.net',
  responseType: "json",
  headers: { 
    'Content-Type':'application/json',
  },
  // headers: {
  //   "X-API-KEY": "Bearer <KEY>",
  //   Accept: "application/json",
  // },
});
export default api;
