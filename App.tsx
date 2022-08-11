import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import Otp from "./src/screens/signIn/otp/0tp";
import Login from "./src/screens/signIn/login/Login";
import Signin from "./src/screens/signIn/login/Login";
import Welcome from "./src/screens/signIn/welcomeBack/Welcome";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar />
        <Login />
        {/* <Otp /> */}
        {/* <Welcome /> */}
        {/* <Navigation colorScheme={colorScheme} /> */}
      </SafeAreaProvider>
    );
  }
}
