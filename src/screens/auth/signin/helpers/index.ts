// Helper functions goes here
import * as SecureStore from "expo-secure-store";
import { STORAGE_KEY_JWT_TOKEN, STORAGE_KEY_USER_CREDS } from "@env";

export const forgetUser = async (navigation: any) => {
  console.debug("forgeting user!");
  await SecureStore.deleteItemAsync(STORAGE_KEY_JWT_TOKEN);
  await SecureStore.deleteItemAsync(STORAGE_KEY_USER_CREDS);

  navigation.getParent()?.navigate("Welcome");
  // clearUserCredentials();
};
