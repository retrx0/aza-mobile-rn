import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import Otp from "./src/screens/otp/otp";
import Signin from "./src/screens/signIn/signIn";
import Welcome from "./src/screens/welcomeBck/welcome";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar />
        <Signin />
        {/* <Otp /> */}
        {/* <Welcome /> */}
        {/* <Navigation colorScheme={colorScheme} /> */}
      </SafeAreaProvider>
    );
  }
}
