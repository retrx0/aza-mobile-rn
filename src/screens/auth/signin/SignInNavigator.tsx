import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginOTPScreen from "./SignInOTPScreen";
import SignInScreen from "./SignInScreen";
import WelcomeBackScreen from "./SignInWelcome";

const LogInStack = createNativeStackNavigator();

export type LogInStackProps = {
  SignUpRoot: undefined;
  SignUpEmail: undefined;
  SignUpOTP: undefined;
  SignUpPassword: undefined;
  SignUpConfirmPassword: undefined;
};

const LoginNavigator = () => {
  return (
    <LogInStack.Navigator>
      <LogInStack.Screen
        component={SignInScreen}
        name='LogInRoot'
        options={{ headerShown: false, title: "Sign In" }}
      />
      <LogInStack.Screen
        component={LoginOTPScreen}
        name='LogiOTP'
        options={{ headerShown: false }}
      />
      <LogInStack.Screen
        component={WelcomeBackScreen}
        name='Welcome'
        options={{ headerShown: false }}
      />
    </LogInStack.Navigator>
  );
};

export default LoginNavigator;
