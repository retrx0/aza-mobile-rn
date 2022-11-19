import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    console.error("Error stroing object: " + value);
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
    console.error("Error getting item: " + e);
  }
};

export const getItem = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error getting object from stoarage! : " + e);
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
    console.error("Error deleting item: " + error);
  }
};

export const removeItem = (key: string) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (e) {
    console.error("Error removing item: " + e);
  }
};
