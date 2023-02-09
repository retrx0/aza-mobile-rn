import AsyncStorage from "@react-native-async-storage/async-storage";
import { PREFERENCE_STORAGE_KEY } from "../constants/AppConstants";

export interface ISettings {
  accountBalanceVisibilitySwitch?: boolean;
  nameVisibilitySwitch?: boolean;
  contactVisibilitySwitch?: boolean;
  splitAndMoneyRequestsSwitch?: boolean;
  communicationPermitSwitch?: boolean;
  loginWithFaceIDSwitch?: boolean;
  confirmTransactionsWithFaceIDSwitch?: boolean;
  appearance?: string;
  appLanguage?: string;
  hideAccountBalance?: string;
}

export const useAppAsyncStorage = () => {
  const saveSettingsToStorage = async (settings: ISettings) => {
    const entries = await AsyncStorage.getItem(PREFERENCE_STORAGE_KEY);
    const parsedEntries = JSON.parse(entries as string);
    const updatedEntries = { ...parsedEntries, ...settings };
    await AsyncStorage.setItem(
      PREFERENCE_STORAGE_KEY,
      JSON.stringify(updatedEntries)
    );
  };

  const loadSettingsFromStorage = async () => {
    const entry = await AsyncStorage.getItem(PREFERENCE_STORAGE_KEY);
    if (entry == null) {
      return null;
    }
    const settings = JSON.parse(entry) as ISettings;
    return settings;
  };

  const clearSettingsInStorage = async () => {
    await AsyncStorage.removeItem(PREFERENCE_STORAGE_KEY);
  };

  return {
    saveSettingsToStorage,
    loadSettingsFromStorage,
    clearSettingsInStorage,
  };
};
