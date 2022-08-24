import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

/* Common screens */

export type CommonStackParamList = {
  BvnVerificationRoot: NavigatorScreenParams<BvnVerificationStackParamList>;
  BvnVerificationScreen: undefined;
  StatusScreen: StatusScreenParamsType;
};

export type CommonScreenProps<Screen extends keyof CommonStackParamList> =
  NativeStackScreenProps<CommonStackParamList, Screen>;

/* BVN */

export type BvnVerificationStackParamList = {
  BvnVerificationScreen: undefined;
};

export type BvnVerificationScreenProps<
  Screen extends keyof BvnVerificationStackParamList
> = NativeStackScreenProps<BvnVerificationStackParamList, Screen>;

// Status screen
export type StatusScreenParamsType = {
  statusIcon: "Success" | "Warning";
  status: string;
  statusMessage: string;
  statusMessage2?: string;
  receiptButton?: boolean;
  setupRecurringTransfer?: boolean;
};