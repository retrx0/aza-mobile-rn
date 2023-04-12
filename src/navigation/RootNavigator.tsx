import { useNavigation } from "@react-navigation/native";
import React from "react";
import useCachedResources from "../hooks/useCachedResources";
import { useNotifications } from "../hooks/useNotifications";
import { useAppDispatch, useAppSelector } from "../redux";
import { selectActivityModal } from "../redux/slice/activityModalSlice";
import { setPushToken } from "../redux/slice/newUserSlice";
import * as Notifications from "expo-notifications";
import UserInactivity from "react-native-user-inactivity";
import ActivityModal from "../components/modal/ActivityModal";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types.navigation";
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
import SignUpRoot from "../screens/auth/signup/SignUpNavigator";
import LoginNavigator from "../screens/auth/signin/SignInNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import CommonStack from "./CommonStackNavigator";
import NotFoundScreen from "../screens/NotFoundScreen";
import QRTransactionsScreen from "../screens/qr-transactions/QRTransactionsScreen";
import QRCodeScreen from "../screens/qr-transactions/QRCodeScreen";
import CEOMessage from "../screens/onboarding/CEOMessage";
import { IUserCred } from "../types/types.redux";
import {
  setUserEmail,
  setUserPhoneAndFullName,
} from "../redux/slice/userSlice";
import * as SecureStore from "expo-secure-store";
import { STORAGE_KEY_JWT_TOKEN } from "@env";
import QRReceivePaymentTab from "../screens/qr-transactions/components/QRReceivePaymentTab";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const RootNavigator = ({
  isUserSignedIn,
  cachedUser,
}: {
  isUserSignedIn: boolean;
  cachedUser: IUserCred | undefined;
}) => {
  const { registerForPushNotificationsAsync, sendPushNotification } =
    useNotifications();
  const notificationListener = React.useRef<any>();
  const responseListener = React.useRef<any>();
  const navigation = useNavigation<any>();
  const [active, setActive] = React.useState(true);

  const dispatch = useAppDispatch();
  const isActivityModalOpen = useAppSelector(selectActivityModal);

  React.useEffect(() => {
    // dispatch cached user to redux
    if (cachedUser) {
      dispatch(
        setUserPhoneAndFullName({
          fullName: cachedUser.fullName,
          phoneNumber: cachedUser.phoneNumber,
        })
      );
      dispatch(setUserEmail(cachedUser.email));
    }

    registerForPushNotificationsAsync().then((token) => {
      if (token) {
        console.log(token);
        dispatch(setPushToken(token));
      }
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log(notification);
        // handle notification
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
        // console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <UserInactivity
      isActive={active}
      // 10 minutes inactivity
      timeForInactivity={1000 * 60 * 10}
      onAction={(isActive) => {
        setActive(isActive);
        if (isActive === false && isUserSignedIn) {
          navigation.navigate("SignInWelcomeBack");

          SecureStore.deleteItemAsync(STORAGE_KEY_JWT_TOKEN, {
            requireAuthentication: true,
          })
            .then(() => {
              navigation.navigate("SignInWelcomeBack");
            })
            .catch((e) => console.log(e));
        }
      }}
      style={{ flex: 1 }}
    >
      <ActivityModal loading={isActivityModalOpen} />
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
          initialParams={{
            isUserSignedIn: isUserSignedIn,
            cachedUser: cachedUser,
          }}
        />
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Common"
          component={CommonStack}
          options={{ headerShown: false, gestureEnabled: true }}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "Oops!" }}
        />
        <Stack.Screen
          name="QRTransactions"
          component={QRTransactionsScreen}
          options={{ presentation: "card" }}
        />
        <Stack.Screen name="QRCode" component={QRCodeScreen} />
        <Stack.Screen
          name="QRReceivePayment"
          component={QRReceivePaymentTab}
          options={{
            presentation: "modal",
            headerTitle: "Receive Payment",
            gestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="CEOMessage"
          component={CEOMessage}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </UserInactivity>
  );
};

export default RootNavigator;
