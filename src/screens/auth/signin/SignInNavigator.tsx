import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginOTPScreen from "./SignInOTPScreen";
import SignInWelcomeBackScreen from "./SignInWelcomBackScreen";
import SignInScreen from "./SignInScreen";
import useCachedResources from "../../../hooks/useCachedResources";
import { RootStackScreenProps } from "../../../../types";
import { useAppDispatch } from "../../../redux";
import { getUserInfo } from "../../../redux/slice/userSlice";

const LogInStack = createNativeStackNavigator();

const LoginNavigator = ({
  navigation,
  route,
}: RootStackScreenProps<"SignIn">) => {
  const isSignedIn = route.params.isUserSignedIn;
  const cachedUser = route.params.cachedUser;
  // const dispatch = useAppDispatch();

  // if (isSignedIn) dispatch(getUserInfo());

  return (
    <LogInStack.Navigator
      initialRouteName={
        route.params.isUserSignedIn ? "SignInWelcomeBack" : "SignInRoot"
      }
      screenOptions={{ gestureEnabled: false }}
    >
      <LogInStack.Screen
        component={SignInScreen}
        name="SignInRoot"
        options={{ headerShown: false }}
      />
      <LogInStack.Screen
        component={LoginOTPScreen}
        name="SignInOTP"
        options={{ headerShown: false }}
      />
      <LogInStack.Screen
        component={SignInWelcomeBackScreen}
        name="SignInWelcomeBack"
        options={{ headerShown: false }}
        initialParams={{ cachedUser: cachedUser }}
      />
    </LogInStack.Navigator>
  );
};

export default LoginNavigator;
