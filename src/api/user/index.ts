import api from "..";
import * as SecureStore from "expo-secure-store";
import {
  STORAGE_KEY_JWT_TOKEN,
  STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN,
} from "@env";

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
    console.log("error: ", e);
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
    const result = await api.post("/api/v1/user/register", data, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log(result);
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log("error: ", e);
  }
};
