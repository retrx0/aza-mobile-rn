import * as SecureStore from "expo-secure-store";
import { AxiosError } from "axios";

import api from "..";

import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { toastError } from "../../common/util/ToastUtil";

export const checkAuthEndpointHealthAPI = async () => {
  try {
    const result = await api.get("/api/v1/auth/health");
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};

export const loginUserAPI = async (data: {
  email: string;
  phoneNumber: string;
  password: string;
}) => {
  try {
    const response = await api.post("/api/v1/auth/login", data);
    if (response.status === 200) {
      return response.headers["access-token"];
    }
    return undefined;
  } catch (e) {
    console.debug("Error logging in user: ", e as Error);
    if ((e as AxiosError).response) {
      if ((e as AxiosError).response?.status === 400) throw Error();
      else toastError("We encountered an error, please try again!");
    }
  }
};

export const requestOtpApi = async (data: {
  email: string;
  phoneNumber: string;
}) => {
  try {
    const result = await api.post("/api/v1/auth/request-otp", data);
    if (result.status === 204) return result.status;
    return undefined;
  } catch (e) {
    console.error("Error Requesting OTP: ", (e as AxiosError).toJSON());
  }
};

export const verifyOtpApi = async (
  data: {
    email: string;
    phoneNumber: string;
    otp: number;
  },
  type: "email" | "phone"
): Promise<string | undefined> => {
  try {
    const result = await api.post("/api/v1/auth/verify-otp", data);
    if (result.status === 204) return result.headers["access-token"];
    return undefined;
  } catch (e) {
    console.error("Error Requesting OTP: ", e as Error);
  }
};

export const cancelToken = async () => {
  try {
    const jwt = await SecureStore.getItemAsync(STORAGE_KEY_JWT_TOKEN);
    const result = await api.post(
      "/api/v1/auth/cancel-token",
      {},
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return result.data;
  } catch (e) {
    console.error("Error canceling token: ", e as Error);
  }
};
