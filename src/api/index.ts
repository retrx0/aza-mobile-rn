import axios, { Axios, AxiosError } from "axios";
import {
  API_BASE_URL,
  ENV,
  API_KEY_DEV,
  API_BASE_URL_DEV,
  API_BASE_URL_TST,
  API_BASE_URL_PROD,
  API_KEY_TST,
  API_KEY_PROD,
} from "@env";
import { ENV_DEVELOPMENT, ENV_TESTING } from "../constants/AppConstants";

const api = axios.create({
  baseURL:
    process.env.ENV === ENV_DEVELOPMENT
      ? API_BASE_URL_DEV.replace("\\", "")
      : process.env.ENV === ENV_TESTING
      ? API_BASE_URL_TST.replace("\\", "")
      : API_BASE_URL_PROD.replace("\\", ""),
  responseType: "json",
  headers: {
    "X-API-KEY":
      process.env.ENV === ENV_DEVELOPMENT
        ? API_KEY_DEV
        : process.env.ENV === ENV_TESTING
        ? API_KEY_TST
        : API_KEY_PROD,
    "Content-Type": "application/json",
  },
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
    if (process.env.ENV === ENV_DEVELOPMENT) console.error(res.toJSON());
    return Promise.reject(error);
  }
);

alert(process.env.ENV + ": " + api.defaults.baseURL);
alert(
  process.env.ENV === ENV_DEVELOPMENT
    ? API_BASE_URL_DEV.replace("\\", "")
    : process.env.ENV === ENV_TESTING
    ? API_BASE_URL_TST.replace("\\", "")
    : API_BASE_URL_PROD.replace("\\", "")
);
alert(
  process.env.ENV === ENV_DEVELOPMENT
    ? API_KEY_DEV
    : process.env.ENV === ENV_TESTING
    ? API_KEY_TST
    : API_KEY_PROD
);

export default api;
