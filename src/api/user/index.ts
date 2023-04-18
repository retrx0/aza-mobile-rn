import * as SecureStore from "expo-secure-store";
import { AxiosError } from "axios";

import api from "..";

import {
  STORAGE_KEY_JWT_TOKEN,
  STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN,
} from "@env";
import { toastError, toastSuccess } from "../../common/util/ToastUtil";
import apiCourier from "../courier";

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

export const setUserTransactionPinAPI = async (newTransactionPin: string) => {
  return await apiCourier(
    "patch",
    "/api/v1/user/set/transactionPin",
    {
      newTransactionPin,
    },
    "jwt"
  );
};

export const createPinAPI = async (newTransactionPin: string) => {
  return await apiCourier(
    "patch",
    "/api/v1/user/create-pin",
    {
      newTransactionPin,
    },
    "jwt"
  );
};

export const updatePinAPI = async (oldPin: string, newPin: string) => {
  return await apiCourier(
    "patch",
    "/api/v1/user/update-pin",
    {
      oldPin,
      newPin,
    },
    "jwt"
  );
};

export const resetPinAPI = async (newTransactionPin: string) => {
  return await apiCourier(
    "post",
    "/api/v1/user/reset-pin",
    {
      newTransactionPin,
    },
    "jwt"
  );
};

export const inviteUserAPI = async (phoneNumber: string, email: string) => {
  return await apiCourier(
    "post",
    "/api/v1/user/invite",
    {
      phoneNumber,
      email,
    },
    "jwt"
  );
};

export const getUserLoginInfoAPI = async (email: string) => {
  return await apiCourier<
    null,
    {
      data: {
        fullName: string;
        phoneNumber: string;
        profilePictureUrl: string;
      };
      message: string | null;
      requestState: string | "Success";
      statusCode: string | "OK";
    }
  >("get", `/api/v1/user/${email}`, null, "jwt");
};

export const updateUserNotificationToken = async (newPushToken: string) => {
  return await apiCourier<any, any>(
    "patch",
    "/api/v1/user/update-push-token",
    {
      newPushToken,
    },
    "jwt"
  );
};

const deleteUser = async () => {};

const getUserAccountStatus = async (email: string) => {};
