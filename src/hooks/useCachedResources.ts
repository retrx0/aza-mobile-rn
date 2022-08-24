import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

const EuclidRegular = require("../../assets/fonts/Euclid-Circular/Euclid-Circular-A.ttf");
const EuclidLight = require("../../assets/fonts/Euclid-Circular/Euclid-Circular-A-Light.ttf");
const EuclidSemiBold = require("../../assets/fonts/Euclid-Circular/Euclid-Circular-A-Semi-Bold.ttf");
const EuclidBold = require("../../assets/fonts/Euclid-Circular/Euclid-Circular-A-Bold.ttf");
const EuclidMedium = require("../../assets/fonts/Euclid-Circular/Euclid-Circular-A-Medium.ttf");
const EuclidSemiBoldItalic = require("../../assets/fonts/Euclid-Circular/Euclid-Circular-A-Semi-Bold-Italic.ttf");

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
          "Euclid-Circular-A-Bold": EuclidBold,
          "Euclid-Circular-A": EuclidRegular,
          "Euclid-Circular-A-Semi-Bold": EuclidSemiBold,
          "Euclid-Circular-A-Medium": EuclidMedium,
          "Euclid-Circular-A-Semi-Bold-Italic": EuclidSemiBoldItalic,
          "Euclid-Circular-A-Light": EuclidLight,
          "SpaceMono-Regular": SpaceMono,
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
