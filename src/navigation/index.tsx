/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import * as Notifications from "expo-notifications";

import QRTransactionsScreen from "../screens/qrTransactions/QRTransactionsScreen";
import QRCodeScreen from "../screens/qrTransactions/QRCodeScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList, RootTabParamList } from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
import SignUpRoot from "../screens/auth/signup/SignUpNavigator";
import LoginNavigator from "../screens/auth/signin/SignInNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import CommonStack from "../common/navigation/CommonStackNavigator";

import { useAppSelector } from "../hooks/redux";
import { selectAuthIsLoggedIn } from "../redux/slice/authSlice";
import useCachedResources from "../hooks/useCachedResources";
import { useNotifications } from "../hooks/useNotifications";

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

type PasswordScreenParamsType = {
  passWordScreenType: string;
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const RootNavigator = () => {
  const { isUserSignedIn } = useCachedResources();
  const { registerForPushNotificationsAsync, sendPushNotification } =
    useNotifications();
  const [expoPushToken, setExpoPushToken] = React.useState<string>("");
  const notificationListener = React.useRef<any>();
  const responseListener = React.useRef<any>();

  React.useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      if (token !== undefined) {
        setExpoPushToken(token);
      }
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        // handle notification
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={isUserSignedIn ? "SignIn" : "Welcome"}
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpRoot}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={LoginNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Common"
        component={CommonStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen name="QRTransactions" component={QRTransactionsScreen} />
      <Stack.Screen name="QRCode" component={QRCodeScreen} />
    </Stack.Navigator>
  );
};

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};

export default Navigation;
