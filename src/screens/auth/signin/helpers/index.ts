// Helper functions goes here
import * as SecureStore from "expo-secure-store";
import {
  STORAGE_KEY_EMAIL_OTP_ACCESS_TOKEN,
  STORAGE_KEY_JWT_REFRESH_TOKEN,
  STORAGE_KEY_JWT_TOKEN,
  STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN,
  STORAGE_KEY_PUSH_NOTIFICATION_TOKEN,
  STORAGE_KEY_TRANSACTION_PIN,
  STORAGE_KEY_USER_CREDS,
} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  CEO_MESSAGE_STORAGE_KEY,
  PREFERENCE_STORAGE_KEY,
} from "../../../../constants/AppConstants";

export const forgetUser = async () => {
  console.debug("forgeting user!");
  try {
    SecureStore.getItemAsync(STORAGE_KEY_JWT_TOKEN)
      .then((_) => SecureStore.deleteItemAsync(STORAGE_KEY_JWT_TOKEN))
      .catch((e) => {
        console.error("Could not delete token from secure store");
      });
    SecureStore.getItemAsync(STORAGE_KEY_USER_CREDS)
      .then((_) => SecureStore.deleteItemAsync(STORAGE_KEY_USER_CREDS))
      .catch((e) => {
        console.error("Could not delete user from secure store");
      });
    SecureStore.getItemAsync(STORAGE_KEY_TRANSACTION_PIN)
      .then((_) => SecureStore.deleteItemAsync(STORAGE_KEY_TRANSACTION_PIN))
      .catch((e) => {
        console.error("Could not delete transaction pin from secure store");
      });
    // SecureStore.deleteItemAsync(STORAGE_KEY_JWT_REFRESH_TOKEN);
    // SecureStore.deleteItemAsync(STORAGE_KEY_EMAIL_OTP_ACCESS_TOKEN);
    // SecureStore.deleteItemAsync(STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN);
    // SecureStore.deleteItemAsync(STORAGE_KEY_PUSH_NOTIFICATION_TOKEN);
    AsyncStorage.removeItem(PREFERENCE_STORAGE_KEY);
    AsyncStorage.removeItem(CEO_MESSAGE_STORAGE_KEY);
  } catch (error) {
    console.error(error);
  }

  // clearUserCredentials();
};
