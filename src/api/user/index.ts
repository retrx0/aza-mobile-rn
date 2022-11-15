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
    const result = await api.put("/api/v1/user/register", data, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log(data);
    console.log(result.data);
    if (result.status === 200) return result.data;
    // temporary!!!! must remove the below if endpoint gets fixed
    else if (result.status === 400) return { data: "bad request" };
    else if (result.status === 409) return "";
    return undefined;
  } catch (e) {
    console.log("error: ", e);
  }
};
