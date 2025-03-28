import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Keychain from "react-native-keychain";
import { STORAGE_KEY_USER_CREDS } from "@env";
import { IUserCred } from "../../types/types.redux";

// export const storeUserCredentialsSecure = (
//   username: string,
//   password: string
// ) => {
//   try {
//     Keychain.setGenericPassword(username, password, {
//       authenticationType:
//         Keychain.AUTHENTICATION_TYPE.DEVICE_PASSCODE_OR_BIOMETRICS,
//     });
//   } catch (e) {
//     console.debug(e as Error);
//     throw new Error((e as Error).message);
//   }
// };

// export const getUserCredentialsSecure = async () => {
//   try {
//     const credentials = await Keychain.getGenericPassword();
//     if (credentials) return credentials;
//   } catch (e) {
//     console.debug(e as Error);
//     throw new Error((e as Error).message);
//   }
// };

export const storeUserCredentialsSecure = (value: string) => {
  SecureStore.setItemAsync(STORAGE_KEY_USER_CREDS, value, {
    requireAuthentication: false,
  })
    .then(() => console.debug("creds stored to secure store!"))
    .catch((e) => console.error("Error storing item: " + e));
};

export const getUserCredentialsSecure = async (
  options: SecureStore.SecureStoreOptions
) => {
  try {
    const item = await SecureStore.getItemAsync(
      STORAGE_KEY_USER_CREDS,
      options
    );
    return item;
  } catch (e) {
    console.debug("Error getting item: ", e as Error);
  }
};

export const clearUserCredentials = async () => {
  const cleared = Keychain.resetGenericPassword();
  return cleared;
};

export const storeItemSecure = async (
  key: string,
  value: string,
  options?: SecureStore.SecureStoreOptions
) => {
  return await SecureStore.setItemAsync(key, value, options)
    .then(() => {
      console.debug("Item stored to secure store!");
      return true;
    })
    .catch((e) => {
      console.error("Error storing item: " + e);
      return false;
    });
};

export const storeItem = (key: string, value: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.debug("Error stroing object: " + value, e as Error);
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
    console.debug("Error getting item: ", e as Error);
  }
};

export const getItem = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.debug("Error getting object from stoarage! : ", e as Error);
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
    console.debug("Error deleting item: ", error as Error);
  }
};

export const removeItem = (key: string) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (e) {
    console.debug("Error removing item: ", e as Error);
  }
};

export const updateStoredCredentials = async ({
  fullName,
  pictureUrl,
}: {
  fullName?: string;
  pictureUrl?: string;
}) => {
  const item = await SecureStore.getItemAsync(STORAGE_KEY_USER_CREDS);
  if (item) {
    console.debug("Updating credentials");
    const _parsedCreds = JSON.parse(item) as IUserCred;
    if (fullName && pictureUrl) {
      await SecureStore.setItemAsync(
        STORAGE_KEY_USER_CREDS,
        JSON.stringify({
          ..._parsedCreds,
          fullName: fullName,
          pictureUrl: pictureUrl,
        })
      );
      return true;
    } else if (fullName) {
      await SecureStore.setItemAsync(
        STORAGE_KEY_USER_CREDS,
        JSON.stringify({
          ..._parsedCreds,
          fullName: fullName,
        })
      );
      return true;
    } else if (pictureUrl) {
      await SecureStore.setItemAsync(
        STORAGE_KEY_USER_CREDS,
        JSON.stringify({
          ..._parsedCreds,
          pictureUrl: pictureUrl,
        })
      );
      return true;
    } else {
      return undefined;
    }
  }
};
