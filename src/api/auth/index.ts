import api from "..";
import * as SecureStore from "expo-secure-store";
import { STORAGE_KEY_JWT_TOKEN } from "@env";

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
    console.error("error: ", e);
  }
};

export const requestOtpApi = async (data: {
  email: string;
  phoneNumber: string;
}) => {
  try {
    const result = await api.post("/api/v1/auth/request-otp", data);
    if (result.status == 204) return result.data;
  } catch (e) {
    console.error("Error Requesting OTP: " + e);
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
    if (result.status == 204) return result.headers["access-token"];
  } catch (e) {
    console.error("Error Requesting OTP: " + e);
  }
};
