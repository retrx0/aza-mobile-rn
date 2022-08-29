import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

/* Common screens */

export type CommonStackParamList = {
  BvnVerificationRoot: NavigatorScreenParams<BvnVerificationStackParamList>;
  BvnVerificationScreen: undefined;

  // Status
  StatusScreen: StatusScreenParamsType;

  //Payments
  AirtimeData: undefined;
  Confirm: undefined;
  ConfirmTransaction: undefined;
  CompleteTransaction: undefined;
  InternetPlans: undefined;
  InternetPlanDetail: { name: string };
  Electricity: undefined;
  CableTV: undefined;
  Pie: undefined;
  Water: undefined;
  Charity: undefined;
  CharityDetail: { name: string };
};

export type CommonScreenProps<Screen extends keyof CommonStackParamList> = NativeStackScreenProps<
  CommonStackParamList,
  Screen
>;

/* BVN */

export type BvnVerificationStackParamList = {
  BvnVerificationScreen: undefined;
};

export type BvnVerificationScreenProps<Screen extends keyof BvnVerificationStackParamList> = NativeStackScreenProps<
  BvnVerificationStackParamList,
  Screen
>;

// Status screen
export type StatusScreenParamsType = {
  statusIcon: "Success" | "Warning";
  status: string;
  statusMessage: string;
  statusMessage2?: string;
  receiptButton?: boolean;
  setupRecurringTransfer?: boolean;
};

/* Payments Tab */

export type PaymentsStackParamList = {
  AirtimeData: undefined;
  Confirm: undefined;
  confirmTransaction: undefined;
  CompleteTransaction: undefined;
  InternetPlans: undefined;
  InternetPlanDetail: undefined;
  Electricity: undefined;
  CableTV: undefined;
  Pie: undefined;
  Water: undefined;
  Charity: undefined;
  CharityDetail: undefined;
};

export type PaymentsTabScreenProps<Screen extends keyof PaymentsStackParamList> = NativeStackScreenProps<
  PaymentsStackParamList,
  Screen
>;
