import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignInScreen from "./SignInScreen";

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
      <LogInStack.Screen component={SignInScreen} name="LogInRoot" />
    </LogInStack.Navigator>
  );
};

export default LoginNavigator;
