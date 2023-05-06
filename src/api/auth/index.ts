import * as Device from "expo-device";

import apiCourier from "../courier";

export const checkAuthEndpointHealthAPI = async () => {
  return await apiCourier("post", "/api/v1/auth/health", undefined, "none");
};

export const loginUserAPI = async (data: {
  email: string;
  phoneNumber: string;
  password: string;
}) => {
  return await apiCourier<any, string>(
    "post",
    "/api/v1/auth/login",
    {
      ...data,
      deviceUUID: Device.modelId,
      deviceName: Device.deviceName,
      deviceModel: Device.modelName,
    },
    "none",
    true
  );
};

export const requestOtpApi = async (data: {
  email: string;
  phoneNumber: string;
}) => {
  return await apiCourier("post", "/api/v1/auth/request-otp", data, "none");
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
};

export const cancelToken = async () => {
  return await apiCourier(
    "post",
    `/api/v1/auth/cancel-token`,
    undefined,
    "jwt"
  );
};

export const addNewDeviceAPI = async (
  password: string,
  type: "add" | "update"
) => {
  return await apiCourier<
    {
      deviceUUID: string;
      deviceName: string | null;
      deviceModel: string | null;
      password: string;
    },
    unknown
  >(
    type === "add" ? "put" : "post",
    "/api/v1/auth/device",
    {
      deviceUUID: Device.modelId,
      deviceName: Device.deviceName,
      deviceModel: Device.modelName,
      password: password,
    },
    "jwt"
  );
};
