import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Sentry from "sentry-expo";
import Toast from "react-native-toast-message";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

import { Provider } from "react-redux";
import { Store } from "./src/redux/Store";
import { toastConfig } from "./src/components/notification/toast";
import * as Device from "expo-device";
import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { toastError, toastInfo } from "./src/common/util/ToastUtil";
import { ENV, SENTRY_DSN } from "@env";

const App = () => {
  const { isLoadingComplete, userPreferences, cachedUser } =
    useCachedResources();
  const colorScheme = useColorScheme();

  const [isDeviceRooted, setisDeviceRooted] = useState(false);

  const colorSchemeReversion = colorScheme === "dark" ? "light" : "dark";
  const systemStatus =
    userPreferences?.appearance && userPreferences.appearance === "system"
      ? colorSchemeReversion
      : "dark";
  const statusBarTheme =
    userPreferences?.appearance && userPreferences.appearance === "dark"
      ? "light"
      : systemStatus;

  useEffect(() => {
    Device.isRootedExperimentalAsync().then((rooted) =>
      setisDeviceRooted(rooted)
    );

    // TODO fix below code
    NetInfo.addEventListener((netChange) => {
      if (
        netChange.isConnected === false &&
        netChange.isInternetReachable === false
      ) {
        toastError("Couldn't connect to internet");
      }
    });
  }, []);

  if (!isLoadingComplete || isDeviceRooted) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar style={statusBarTheme} />
        <Provider store={Store}>
          <Navigation
            colorScheme={colorScheme}
            loadedPreference={userPreferences}
            isUserSignedIn={cachedUser?.token ? true : false}
            cachedUser={cachedUser}
          />
        </Provider>
        <Toast config={toastConfig} />
      </SafeAreaProvider>
    );
  }
};

// Sentry report config
Sentry.init({
  dsn: SENTRY_DSN,
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
  enableInExpoDevelopment: process.env.ENV === "developement",
  debug: process.env.ENV === "developement", // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

export default App;
