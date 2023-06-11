import AsyncStorage from "@react-native-async-storage/async-storage";
import { PREFERENCE_STORAGE_KEY } from "../constants/AppConstants";
import { useAppDispatch } from "../redux";
import { setAppPreference } from "../redux/slice/preferenceSlice";

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
  transactionPinSwitch?: boolean;
}

export const useAppAsyncStorage = () => {
  // TODO fix redux state not updating after toggle changes
  // const dispatch = useAppDispatch();
  const saveSettingsToStorage = async (settings: ISettings) => {
    const entries = await AsyncStorage.getItem(PREFERENCE_STORAGE_KEY);
    const parsedEntries = JSON.parse(entries as string) as ISettings;
    const updatedEntries = { ...parsedEntries, ...settings };
    await AsyncStorage.setItem(
      PREFERENCE_STORAGE_KEY,
      JSON.stringify(updatedEntries)
    );
    // dispatch(setAppPreference(updatedEntries));
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
