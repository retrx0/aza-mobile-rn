import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import LoginOTPScreen from "./SignInOTPScreen";
import SignInWelcomeBackScreen from "./SignInWelcomBackScreen";
import SignInScreen from "./SignInScreen";
import {
  RootStackScreenProps,
  SignInScreenProps,
  SignInStackParamList,
} from "../../../types/types.navigation";

const LogInStack = createNativeStackNavigator<SignInStackParamList>();

const LoginNavigator = ({
  navigation,
  route,
}: RootStackScreenProps<"SignIn">) => {
  const isSignedIn = route.params.isUserSignedIn;
  const cachedUser = route.params.cachedUser;
  // const dispatch = useAppDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(
    route.params.cachedUser ? true : false
  );

  // if (isSignedIn) dispatch(getUserInfo());

  useEffect(() => {
    route.params.cachedUser ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [cachedUser]);

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
        initialParams={{ cachedUser: cachedUser }}
      />
    </LogInStack.Navigator>
  );
};

export default LoginNavigator;
