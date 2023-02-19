import axios, { Axios, AxiosError } from "axios";
import { API_BASE_URL, ENV } from "@env";

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
    let res = error as AxiosError;
    if (res.response?.status == 401) {
    }
    if (ENV === "developement") console.error(res.toJSON());
    return Promise.reject(error);
  }
);

export default api;
