import axios from "axios";
import { API_BASE_URL } from "@env";

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

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let res = error.response;
    if (res.status == 401) {
    }
    // console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
  }
);

export default api;
