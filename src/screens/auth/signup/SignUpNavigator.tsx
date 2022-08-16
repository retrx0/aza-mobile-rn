import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpEmailScreen from "./SignUpProfileSetupScreen";
import SignUpOTPScreen from "./SignUpOTPScreen";
import SignUpPasswordScreen from "./SignUpPasswordScreen";
import SignUpScreen from "./SignUpScreen";

const SignUpStack = createNativeStackNavigator();

export type SignUpStackProps = {
  SignUpRoot: undefined;
  SignUpProfileSetup: undefined;
  SignUpOTP: undefined;
  SignUpPassword: undefined;
  SignUpConfirmPassword: undefined;
};

type PasswordScreenParamsType = {
  passWordScreenType: string;
};

const SignUpRoot = () => {
  const create: PasswordScreenParamsType = { passWordScreenType: "Create" };
  const confirm: PasswordScreenParamsType = { passWordScreenType: "Confirm" };
  return (
    <SignUpStack.Navigator>
      <SignUpStack.Screen
        component={SignUpScreen}
        name="SignUpRoot"
        options={{ headerShown: false, title: "Sign Up" }}
      />
      <SignUpStack.Screen component={SignUpEmailScreen} name="SignUpProfileSetup" options={{ headerShown: false }} />
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
