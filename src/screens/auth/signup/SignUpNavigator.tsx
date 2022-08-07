import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpEmailScreen from "./SignUpEmailScreen";
import SignUpOTPScreen from "./SignUpOTPScreen";
import SignUpPasswordScreen from "./SignUpPasswordScreen";
import SignUpScreen from "./SignUpScreen";

const SignUpStack = createNativeStackNavigator();

export type SignUpStackProps = {
  SignUpRoot: undefined;
  SignUpEmail: undefined;
  SignUpOTP: undefined;
  SignUpPassword: undefined;
  SignUpConfirmPassword: undefined;
};

const SignUpRoot = () => {
  return (
    <SignUpStack.Navigator>
      <SignUpStack.Screen component={SignUpScreen} name="SignUpRoot" options={{ title: "Sign Up" }} />
      <SignUpStack.Screen component={SignUpEmailScreen} name="SignUpEmail" />
      <SignUpStack.Screen component={SignUpOTPScreen} name="SignUpOTP" />
      <SignUpStack.Screen component={SignUpPasswordScreen} name="SignUpPassword" />
      <SignUpStack.Screen component={SignUpPasswordScreen} name="SignUpComfirmPassword" />
    </SignUpStack.Navigator>
  );
};

export default SignUpRoot;
