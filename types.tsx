/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { CommonStackParamList } from "./src/common/navigation/types";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

/* Root Stack */

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Welcome: undefined;
  Common: NavigatorScreenParams<CommonStackParamList>;
  SignUp: undefined;
  SignIn: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

/* Tabs */

export type RootTabParamList = {
  Home: undefined;
  Vault: undefined;
  Payments: undefined;
  Settings: undefined;
  Profile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

/* Sign In */

export type SignInStackParamList = {
  SignInRoot: undefined;
  SignInWelcomeBack: undefined;
  SignInOTP: undefined;
};

export type SignInScreenProps<Screen extends keyof SignInStackParamList> = NativeStackScreenProps<
  SignInStackParamList,
  Screen
>;

/* Sign Up */

export type PasswordScreenParamsType = {
  passwordScreenType: "Create" | "Confirm";
  password?: string;
};

export type SignUpStackParamList = {
  SignUpRoot: undefined;
  SignUpProfileSetup: undefined;
  SignUpOTP: undefined;
  SignUpPassword: PasswordScreenParamsType;
  SignUpConfirmPassword: PasswordScreenParamsType;
};

export type SignUpScreenProps<Screen extends keyof SignUpStackParamList> = NativeStackScreenProps<
  SignUpStackParamList,
  Screen
>;

/* Other Types */

export type PercentageProps = {
  percentage: string;
  onPress?: () => void;
};

export type DaysProps = {
  days: string;
  onPress?: () => void;
};

export type CountryProps = {
  code: string;
  shortName: string;
  name?: string;
  id?: string;
  imageLink?: string;
  onPress?: () => void;
};

export type SocialSignInProps = {
  icon: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  connect: string;
  styleText?: StyleProp<TextStyle>;
};
