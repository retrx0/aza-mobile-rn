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
import { toastError } from "../common/util/ToastUtil";

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

interface AzaError {
  data: any;
  message: string;
  requestState: string;
  statusCode: string;
}

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let res = error as AxiosError;
    if (process.env.ENV === ENV_DEVELOPMENT) {
      if (res.response) console.error("Interceptor error: ", res.response.data);
    }
    if (error.response) {
      const errorData = error.response.data as AzaError;
      if (
        res.response?.status === 400 ||
        res.response?.status === 401 ||
        res.response?.status === 409
      )
        toastError("" + errorData.message);
    }
    return Promise.reject(error);
  }
);

export default api;
