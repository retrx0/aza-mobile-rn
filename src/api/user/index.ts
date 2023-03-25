import * as SecureStore from "expo-secure-store";
import { AxiosError } from "axios";

import api from "..";

import {
  STORAGE_KEY_JWT_TOKEN,
  STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN,
} from "@env";
import { toastError, toastSuccess } from "../../common/util/ToastUtil";

type RegisterUserModel = {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  newPassword: string;
  pushNotificationToken: string;
};

export const checkUserEndpointHealthAPI = async () => {
  try {
    const result = await api.get("/api/v1/user/health");
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};

// Use only without the need to update data in redux, else call the dispatch(getUserInfo)
export const getFullUserInfoAPI = async () => {
  try {
    const jwt = await SecureStore.getItemAsync(STORAGE_KEY_JWT_TOKEN);
    const result = await api.get("/api/v1/user/info", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log("Error getting user info: ", e as Error);
    toastError("We encountered a problem ⚠️, please try again!");
  }
};

export const registerUserAPI = async (data: RegisterUserModel) => {
  try {
    const jwt = await SecureStore.getItemAsync(
      STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN
    );
    const result = await api.put("/api/v1/user/register", data, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "x-api-key": "6ab5e79e-4deb-4993-ad0e-e41b70f31166",
      },
    });
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    const err = e as AxiosError;
    console.debug("Error registering user: ", err.message);
    if (err.status && err.status === "409") {
      toastError("User already registered!");
    } else {
      toastError("We encountered a problem while creating your account ⚠️");
    }
  }
};

export const changePasswordAPI = async (
  oldPassword: string,
  newPassword: string
) => {
  try {
    const jwt = await SecureStore.getItemAsync(STORAGE_KEY_JWT_TOKEN);
    const result = await api.patch(
      "/api/v1/user/change-password",
      {
        oldPassword,
        newPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (result.status === 204) {
      return result;
    }
  } catch (e) {
    console.debug("Error changing password: ", e as AxiosError);
    throw Error();
  }
};

export const verifyEmailAPI = async (email: string) => {
  try {
    const jwt = await SecureStore.getItemAsync(STORAGE_KEY_JWT_TOKEN);
    const result = await api.patch("/api/v1/user/verify-email", email, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return result;
  } catch (e) {
    console.log(e as Error);
  }
};

export const createPinAPI = async (newTransactionPin: string) => {
  try {
    const jwt = await SecureStore.getItemAsync(STORAGE_KEY_JWT_TOKEN);
    const result = await api.patch(
      "/api/v1/user/create-pin",
      {
        newTransactionPin,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return result.data;
  } catch (e) {
    throw Error("Error creating pin");
  }
};

export const updatePinAPI = async (oldPin: string, newPin: string) => {
  try {
    const jwt = await SecureStore.getItemAsync(STORAGE_KEY_JWT_TOKEN);
    const result = await api.patch(
      "/api/v1/user/update-pin",
      {
        oldPin,
        newPin,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return result.data;
  } catch (e) {
    console.log(e as Error);
  }
};

export const resetPinAPI = async (newTransactionPin: string) => {
  try {
    const jwt = await SecureStore.getItemAsync(STORAGE_KEY_JWT_TOKEN);
    const result = await api.post(
      "/api/v1/user/reset-pin",
      {
        newTransactionPin,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return result.data;
  } catch (e) {
    console.log(e as Error);
  }
};

export const inviteUserAPI = async (phoneNumber: string, email: string) => {
  try {
    const jwt = await SecureStore.getItemAsync(STORAGE_KEY_JWT_TOKEN);
    const result = await api.post(
      "/api/v1/user/invite",
      {
        phoneNumber,
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return result.data;
  } catch (e) {
    console.log(e as Error);
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

const deleteUser = async () => {};

const getUserAccountStatus = async (email: string) => {};
