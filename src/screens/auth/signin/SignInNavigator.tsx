import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginOTPScreen from "./SignInOTPScreen";
import SignInWelcomeBackScreen from "./SignInWelcomBackScreen";
import SignInScreen from "./SignInScreen";
import { useAppSelector } from "../../../hooks/redux";
import { selectAuthIsLoggedIn } from "../../../redux/slice/authSlice";

const LogInStack = createNativeStackNavigator();

export type LogInStackProps = {
  SignInRoot: undefined;
  SignInWelcomeBack: undefined;
  SignInOTP: undefined;
};

const LoginNavigator = () => {
  const isLoggedIn = useAppSelector(selectAuthIsLoggedIn);

  return (
    <LogInStack.Navigator
      initialRouteName={isLoggedIn ? "SignInWelcomeBack" : "SignInRoot"}
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
      />
    </LogInStack.Navigator>
  );
};

export default LoginNavigator;
