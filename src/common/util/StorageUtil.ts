import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Keychain from "react-native-keychain";

const storeUserCredentialsSecure = (username: string, password: string) => {
  Keychain.setGenericPassword(username, password, {
    authenticationType: Keychain.AUTHENTICATION_TYPE.BIOMETRICS,
  });
};

export const getUserCredentialsSecure = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) return credentials;
  } catch (e) {
    console.log(e as Error, (e as Error).stack);
  }
};

export const clearUserCredentials = async () => {
  const cleared = Keychain.resetGenericPassword();
  return cleared;
};

export const storeItemSecure = (
  key: string,
  value: string,
  options?: SecureStore.SecureStoreOptions
) => {
  SecureStore.setItemAsync(key, value, options)
    .then(() => console.debug("Item stored to secure store!"))
    .catch((e) => console.error("Error storing item: " + e));
};

export const storeItem = (key: string, value: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error("Error stroing object: " + value, e as Error);
  }
};

export const getItemSecure = async (
  key: string,
  options?: SecureStore.SecureStoreOptions
) => {
  try {
    const item = await SecureStore.getItemAsync(key, options);
    return item;
  } catch (e) {
    console.error("Error getting item: ", e as Error);
  }
};

export const getItem = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error getting object from stoarage! : ", e as Error);
  }
};

export const removeItemSecure = async (
  key: string,
  options?: SecureStore.SecureStoreOptions
) => {
  try {
    const result = await SecureStore.deleteItemAsync(key, options);
    return result;
  } catch (error) {
    console.error("Error deleting item: ", error as Error);
  }
};

export const removeItem = (key: string) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (e) {
    console.error("Error removing item: ", e as Error);
  }
};
