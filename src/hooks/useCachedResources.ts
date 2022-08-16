import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

const Euclid = require("../../assets/fonts/Euclid-Circular/Euclid-Circular-A-Regular.ttf");
const EuclidSemiBold = require("../../assets/fonts/Euclid-Circular/Euclid-Circular-A-SemiBold.ttf");
const SpaceMono = require("../../assets/fonts/SpaceMono-Regular.ttf");

const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [isUserSignedIn, setUserSignedIn] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Check if user is already logged in

        // Load fonts
        await Font.loadAsync({
          "Euclid-Circular-A": Euclid,
          "Euclid-Circular-A-Semi-Bold": EuclidSemiBold,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};

export default useCachedResources;
