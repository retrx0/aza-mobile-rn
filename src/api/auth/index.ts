import * as SecureStore from "expo-secure-store";
import { AxiosError } from "axios";

import api from "..";

import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { toastError } from "../../common/util/ToastUtil";
import apiCourier from "../courier";

export const checkAuthEndpointHealthAPI = async () => {
  return await apiCourier("post", "/api/v1/auth/health", undefined, "none");
};

export const loginUserAPI = async (data: {
  email: string;
  phoneNumber: string;
  password: string;
}) => {
  return await apiCourier<typeof data, string>(
    "post",
    "/api/v1/auth/login",
    data,
    "none",
    true
  );
  try {
    const response = await api.post("/api/v1/auth/login", data);
    if (response.status === 200) {
      return response.headers["access-token"];
    }
    return undefined;
  } catch (e) {
    console.debug(e as AxiosError);
  }
};

export const requestOtpApi = async (data: {
  email: string;
  phoneNumber: string;
}) => {
  return await apiCourier("post", "/api/v1/auth/request-otp", data, "none");
  try {
    const result = await api.post("/api/v1/auth/request-otp", data);
    if (result.status === 204) return result.status;
    return undefined;
  } catch (e) {
    console.error("Error Requesting OTP: ", (e as AxiosError).toJSON());
    toastError("We encountered an error, please try again!");
  }
};

export const verifyOtpApi = async (
  data: {
    email: string;
    phoneNumber: string;
    otp: string;
  },
  type: "email" | "phone"
): Promise<string | undefined> => {
  return await apiCourier<typeof data, string>(
    "post",
    `/api/v1/auth/verify-otp`,
    data,
    "none",
    true
  );

  try {
    const result = await api.post("/api/v1/auth/verify-otp", data);
    if (result.status === 204) return result.headers["access-token"];
    return undefined;
  } catch (e) {
    console.debug("Error Requesting OTP: ", e as AxiosError);
  }
};

export const cancelToken = async () => {
  return await apiCourier(
    "post",
    `/api/v1/auth/cancel-token`,
    undefined,
    "jwt"
  );
};
