import api from "..";
import * as SecureStore from "expo-secure-store";
import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { toastError } from "../../common/util/ToastUtil";
import { getItemSecure, storeItemSecure } from "../../common/util/StorageUtil";
import { AxiosError } from "axios";

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
    return result;
  } catch (e) {
    console.error("Error canceling token: ", e as Error);
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
    console.error("Error Requesting OTP: ", e as Error);
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
  } catch (e) {
    console.debug("Error logging in user: ", e as Error);
    toastError("We encountered a problem while loggin you in");
  }
};

export const getUserLoginInfoAPI = async (email: string) => {
  try {
    const response = await api.get(`/api/v1/user/${email}`);
    if (response.status === 200) return response.data.data;
    return undefined;
  } catch (e) {
    if ((e as AxiosError).response) {
      if ((e as AxiosError).response?.status === 404)
        toastError("Email address not valid!");
      else toastError("We encountered an error, please try again!");
    }
    console.debug("Error get user login details: ", e as Error);
  }
};
