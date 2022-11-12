import api from "..";
import * as SecureStore from "expo-secure-store";
import { STORAGE_KEY_JWT_TOKEN } from "@env";

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
