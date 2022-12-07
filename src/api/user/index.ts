import api from "..";
import * as SecureStore from "expo-secure-store";
import {
  STORAGE_KEY_JWT_TOKEN,
  STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN,
} from "@env";
import { toastError } from "../../common/util/ToastUtil";

export const changePassword = async (
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
    return result;
  } catch (e) {
    console.log("Error changing password: ", e as Error);
    toastError(
      "There was a problem changing your password ⚠️, please try again!"
    );
  }
};

type RegisterUserModel = {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  newPassword: string;
  pushNotificationToken: string;
};

export const registerUserAPI = async (data: RegisterUserModel) => {
  try {
    const jwt = await SecureStore.getItemAsync(
      STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN
    );
    const result = await api.put(
      "https://aza-backend-asp-dev.azurewebsites.net/api/v1/user/register",
      data,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (result.status === 200) return result.data;
    // temporary!!!! must remove the below if endpoint gets fixed
    else if (result.status === 400) return { data: "bad request" };
    else if (result.status === 409) return "";
    return undefined;
  } catch (e) {
    console.log("Error registering user: ", e as Error);
    toastError("We encountered a problem while creating your account ⚠️");
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
