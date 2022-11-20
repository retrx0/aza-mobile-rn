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

const App = () => {
  const { isLoadingComplete } = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar />
        <Provider store={Store}>
          <Navigation colorScheme={colorScheme} />
        </Provider>
        <Toast config={toastConfig} />
      </SafeAreaProvider>
    );
  }
};

// Sentry report config

Sentry.init({
  dsn: "https://e0cda68987dd4b5197008ef21096f2ca@o4503908022550528.ingest.sentry.io/4503908024188928",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

export default App;
