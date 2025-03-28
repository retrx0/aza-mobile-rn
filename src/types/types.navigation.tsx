/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { CommonStackParamList } from "../common/navigation/types";
import { IGiftCard, IUserCred } from "./types.redux";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

/* Root Stack */

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  QRTransactions: undefined;
  QRReceivePayment: undefined;
  CEOMessage: undefined;
  QRFeature: undefined;
  QRCode: undefined;
  NotFound: undefined;
  Welcome: undefined;
  Common: NavigatorScreenParams<CommonStackParamList>;
  SignUp: NavigatorScreenParams<SignUpStackParamList> | undefined;
  SignIn: {
    isUserSignedIn: boolean;
    cachedUser: IUserCred | undefined;
  };
  TopBar: NavigatorScreenParams<CommonStackParamList>;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

/* Tabs */

interface IStatusScreenParams {
  statusIcon: "Success" | "Warning";
  status: string;
  statusMessage: string;
  navigateTo: string;
  statusMessage2?: string;
  recurringTransferBeneficiary?: any;
  receiptDetails: any;
  cancelButton?: any;
  navigateToParams?: any;
  screenType?: any;
}

export type RootTabParamList = {
  Home: undefined;
  Vault: undefined;
  Payments: undefined;
  Settings: undefined;
  Profile: undefined;
  StatusScreen: any;
};

export type PaymentsStackParamList = {
  PaymentIndex: undefined;
  airtimeData: undefined;
  confirm: undefined;
  confirm_transaction: undefined;
  complete_transaction: undefined;
  internet_plans: undefined;
  internet_plan_detail: undefined;
  electricity: undefined;
  cabletv: undefined;
  pie: undefined;
  water: undefined;
  Charity: undefined;
  charity_detail: undefined;
  ElectricityConfirmation: undefined;
  AirtimeConfirmation: undefined;
  InternetConfirmation: undefined;
  CableConfirmation: undefined;
  WaterConfirmation: undefined;
  GiftCardConfirmation: { giftCard: IGiftCard };
  CharityConfirmation: undefined;
  GiftCard: undefined;
  GiftCardDetails: undefined;
  GameScreen: undefined;
  PaymentRecurring: undefined;
  InternetRecurring: undefined;
  CableRecurring: undefined;
  ElectricityRecurring: undefined;
  WaterRecurring: undefined;
  CharityRecurring: undefined;
  AirtimeRecurring: undefined;
  RecurringPlan: undefined;
  GiftCardEmail: undefined;
  GameCredit: undefined;
  Airtime: undefined;
  DataBundle: undefined;
};

export type TopTabParamList = {
  details: undefined;
  activity: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

/* Sign In */

export type SignInStackParamList = {
  SignInRoot: undefined;
  SignInWelcomeBack: {
    cachedUser: IUserCred | undefined;
    clearPasswordInput?: boolean;
  };
  SignInOTP: undefined;
};

export type SignInScreenProps<Screen extends keyof SignInStackParamList> =
  NativeStackScreenProps<SignInStackParamList, Screen>;

/* Sign Up */

export type PasswordScreenParamsType = {
  passwordScreenType: "Create" | "Confirm";
};

export type OtpForScreenType = {
  otpScreenType: "email" | "phone" | "forgotpassword";
};

export type ProfileSetupInfo = {
  profilePreloadedInfo: { firstname: string; lastname: string };
};

export type SignUpStackParamList = {
  SignUpRoot: undefined;
  SignUpProfileSetup: ProfileSetupInfo | undefined;
  SignUpOTP: OtpForScreenType;
  SignUpPassword: PasswordScreenParamsType;
  SignUpConfirmPassword: PasswordScreenParamsType;
  SignUpPhoneNumber: undefined;
};

export type SignUpScreenProps<Screen extends keyof SignUpStackParamList> =
  NativeStackScreenProps<SignUpStackParamList, Screen>;

/* Other Types */

export type PercentageProps = {
  percentage: string;
  onPress?: () => void;
};

export type DaysProps = {
  days: string;
  onPress?: () => void;
};

export type UnmatureVaultListProps = {
  onPress?: () => void;
  closeIcon: any;
  title: string;
  subTitle: string;
};

export type VaultListProps = {
  item: string;
  lockIcon: any;
  onPress?: () => void;
  closeIcon: any;
  amount: string;
  stage: string;
  altamount: string;
};

export type VaultActivitytProps = {
  send: any;
  status: string;
  amount: string;
  due: string;
  onPress?: () => void;
};

export type SocialSignInProps = {
  icon: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  connect: string;
  styleText?: StyleProp<TextStyle>;
};

export type CountryProps = {
  code: string;
  short_name: string;
  name?: string;
  id?: string;
  imageLink?: string;
  onPress?: () => void;
  onChangePhoneNumber?: any;
};

export type CountriesType = Omit<CountryProps, "onPress">;
