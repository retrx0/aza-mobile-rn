import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { STORAGE_KEY_JWT_TOKEN, STORAGE_KEY_USER_CREDS } from "@env";
import { ISettings, useAppAsyncStorage } from "./useAsyncStorage";
import { IUserCred } from "../types/types.redux";
import {
  EuclidBold,
  EuclidLight,
  EuclidMedium,
  EuclidRegular,
  EuclidSemiBold,
  EuclidSemiBoldItalic,
  SpaceMonoRegular,
} from "../../assets/fonts";

const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  // change default to true only in dev
  const [isUserSignedIn, setUserSignedIn] = useState(false);
  const [userPreferences, setUserPreferences] = useState<ISettings>();
  const [cachedUser, setCachedUser] = useState<IUserCred>();
  const { loadSettingsFromStorage } = useAppAsyncStorage();

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        // Keep the splash screen visible while we fetch resources
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          "Euclid-Circular-A-Bold": EuclidBold,
          "Euclid-Circular-A": EuclidRegular,
          "Euclid-Circular-A-Semi-Bold": EuclidSemiBold,
          "Euclid-Circular-A-Medium": EuclidMedium,
          "Euclid-Circular-A-Semi-Bold-Italic": EuclidSemiBoldItalic,
          "Euclid-Circular-A-Light": EuclidLight,
          "SpaceMono-Regular": SpaceMonoRegular,
        });

        // Check if user is already logged in
        // const token = await SecureStore.getItemAsync(STORAGE_KEY_JWT_TOKEN);
        // if (token) setUserSignedIn(true);

        // load cached user
        const _cachedUsr = await SecureStore.getItemAsync(
          STORAGE_KEY_USER_CREDS
        );
        if (_cachedUsr) {
          const _prsd = JSON.parse(_cachedUsr);
          setCachedUser({
            email: _prsd.email,
            phoneNumber: _prsd.phoneNumber,
            password: _prsd.password,
            fullName: _prsd.fullName,
            token: _prsd.token,
            pictureUrl: _prsd.pictureUrl,
          });
        }

        // Load users preferences if present
        const uPrefs = await loadSettingsFromStorage();
        if (uPrefs) setUserPreferences(uPrefs);

        // do any api call here
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  return { isLoadingComplete, userPreferences, cachedUser };
};

export default useCachedResources;
