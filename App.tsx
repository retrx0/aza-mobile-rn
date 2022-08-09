import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import Otp from "./src/screens/auth/otp/OtpScreen";
import Signin from "./src/screens/auth/signin/SignInScreen";
import Welcome from "./src/screens/auth/welcomeBack/welcome";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar />
        {/* <Signin /> */}
        {/* <Otp /> */}
        {/* <Welcome /> */}
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    );
  }
}
