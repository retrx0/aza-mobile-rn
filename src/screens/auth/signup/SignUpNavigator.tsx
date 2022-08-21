import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpOTPScreen from "./SignUpOTPScreen";
import SignUpPasswordScreen from "./SignUpPasswordScreen";
import SignUpScreen from "./SignUpScreen";
import { PasswordScreenParamsType } from "../../../../types";
import SignUpProfileSetupScreen from "./SignUpProfileSetupScreen";

const SignUpStack = createNativeStackNavigator();

const SignUpRoot = () => {
  const create: PasswordScreenParamsType = { passwordScreenType: "Create" };
  const confirm: PasswordScreenParamsType = { passwordScreenType: "Confirm" };
  return (
    <SignUpStack.Navigator>
      <SignUpStack.Screen component={SignUpScreen} name="SignUpRoot" options={{ headerShown: false }} />
      <SignUpStack.Screen
        component={SignUpProfileSetupScreen}
        name="SignUpProfileSetup"
        options={{ headerShown: false }}
      />
      <SignUpStack.Screen component={SignUpOTPScreen} name="SignUpOTP" options={{ headerShown: false }} />
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
    </SignUpStack.Navigator>
  );
};

export default SignUpRoot;
