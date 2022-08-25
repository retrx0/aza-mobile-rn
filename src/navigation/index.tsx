/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import ModalScreen from "../screens/modals/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
  SignInStackParamList,
  SignUpStackParamList,
} from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
import SignUpRoot from "../screens/auth/SignUp/SignUpNavigator";
import LoginNavigator from "../screens/auth/SignIn/SignInNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import SignInScreen from "../screens/auth/SignIn/SignInScreen";
import LoginOTPScreen from "../screens/auth/SignIn/SignInOTPScreen";
import SignUpScreen from "../screens/auth/SignUp/SignUpScreen";
import SignUpEmailScreen from "../screens/auth/SignUp/SignUpProfileSetupScreen";
import SignUpOTPScreen from "../screens/auth/SignUp/SignUpOTPScreen";
import SignUpPasswordScreen from "../screens/auth/SignUp/SignUpPasswordScreen";
import CommonStack from "../common/navigation/CommonStackNavigator";

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

type PasswordScreenParamsType = {
  passWordScreenType: string;
};

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUpRoot}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignIn'
        component={LoginNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Common'
        component={CommonStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />

      {/* Auth Stack */}
      {/* <Stack.Group navigationKey={isSignedIn ? "Home" : "Login"} screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen component={SignInScreen} name="SignInRoot" options={{ headerShown: false }} />
          <Stack.Screen component={LoginOTPScreen} name="SignInOTP" options={{ headerShown: false }} />
          <Stack.Screen component={WelcomeScreen} name="SignInWelcomeBack" options={{ headerShown: false }} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen component={SignUpScreen} name="SignUpRoot" options={{ headerShown: false, title: "Sign Up" }} />
          <Stack.Screen component={SignUpEmailScreen} name="SignUpProfileSetup" options={{ headerShown: false }} />
          <Stack.Screen component={SignUpOTPScreen} name="SignUpOTP" options={{ headerShown: false }} />
          <Stack.Screen
            component={SignUpPasswordScreen}
            initialParams={create}
            name="SignUpPassword"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={SignUpPasswordScreen}
            initialParams={confirm}
            name="SignUpConfirmPassword"
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Group> */}
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};

export default Navigation;
