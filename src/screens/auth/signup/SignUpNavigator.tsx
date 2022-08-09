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

const SignUpRoot = () => {
  return (
    <SignUpStack.Navigator>
      <SignUpStack.Screen component={SignUpScreen} name="SignUpRoot" options={{ title: "Sign Up" }} />
      <SignUpStack.Screen component={SignUpEmailScreen} name="SignUpProfileSetup" />
      <SignUpStack.Screen component={SignUpOTPScreen} name="SignUpOTP" />
      <SignUpStack.Screen
        component={SignUpPasswordScreen}
        initialParams={{ passWordScreenType: "create" }}
        name="SignUpPassword"
      />
      <SignUpStack.Screen
        component={SignUpPasswordScreen}
        initialParams={{ passWordScreenType: "confirm" }}
        name="SignUpConfirmPassword"
      />
    </SignUpStack.Navigator>
  );
};

export default SignUpRoot;
