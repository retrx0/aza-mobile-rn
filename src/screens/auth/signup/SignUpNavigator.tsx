import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpOTPScreen from "./SignUpOTPScreen";
import SignUpPasswordScreen from "./SignUpPasswordScreen";
import SignUpScreen from "./SignUpScreen";
import {
  PasswordScreenParamsType,
  RootStackScreenProps,
  SignUpStackParamList,
} from "../../../../types";
import SignUpProfileSetupScreen from "./SignUpProfileSetupScreen";
import PhoneNumberScreen from "../common/PhoneNumberScreen";

const SignUpStack = createNativeStackNavigator<SignUpStackParamList>();

const SignUpRoot = () => {
  const create: PasswordScreenParamsType = { passwordScreenType: "Create" };
  const confirm: PasswordScreenParamsType = { passwordScreenType: "Confirm" };
  return (
    <SignUpStack.Navigator screenOptions={{ gestureEnabled: false }}>
      <SignUpStack.Screen
        component={SignUpScreen}
        name="SignUpRoot"
        options={{ headerShown: false }}
      />
      <SignUpStack.Screen
        component={SignUpProfileSetupScreen}
        name="SignUpProfileSetup"
        options={{ headerShown: false }}
      />
      <SignUpStack.Screen
        component={SignUpOTPScreen}
        name="SignUpOTP"
        options={{ headerShown: false }}
      />
      <SignUpStack.Screen
        component={SignUpPasswordScreen}
        initialParams={create}
        name="SignUpPassword"
        options={{ headerShown: false }}
      />
      <SignUpStack.Screen
        component={SignUpPasswordScreen}
        initialParams={confirm}
        name="SignUpConfirmPassword"
        options={{ headerShown: false }}
      />

      <SignUpStack.Screen
        component={PhoneNumberScreen}
        name="SignUpPhoneNumber"
        options={{ headerShown: false }}
      />
    </SignUpStack.Navigator>
  );
};

export default SignUpRoot;
