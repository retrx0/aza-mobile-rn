import AsyncStorage from "@react-native-async-storage/async-storage";

export interface ISettings {
  nameVisibilitySwitch?: boolean;
  contactVisibilitySwitch?: boolean;
  splitAndMoneyRequestsSwitch?: boolean;
  communicationPermitSwitch?: boolean;
  loginWithFaceIDSwitch?: boolean;
  confirmTransactionsWithFaceIDSwitch?: boolean;
  appearance?: string;
  appLanguage?: string;
}

export const useAsyncStorage = () => {
  const saveSettingsToStorage = async (settings: ISettings) => {
    const entries = await AsyncStorage.getItem("settings");
    const parsedEntries = JSON.parse(entries as string);
    const updatedEntries = { ...parsedEntries, ...settings };
    await AsyncStorage.setItem("settings", JSON.stringify(updatedEntries));
  };

  const loadSettingsFromStorage = async () => {
    const entry = await AsyncStorage.getItem("settings");
    if (entry == null) {
      return null;
    }
    const settings = JSON.parse(entry) as ISettings;
    return settings;
  };

  const clearSettingsInStorage = async () => {
    await AsyncStorage.removeItem("settings");
  };

  return {
    saveSettingsToStorage,
    loadSettingsFromStorage,
    clearSettingsInStorage,
  };
};
