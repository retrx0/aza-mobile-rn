import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

/* Common screens */

export type CommonStackParamList = {
  BvnVerificationRoot: NavigatorScreenParams<BvnVerificationStackParamList>;
};

export type CommonScreenProps<Screen extends keyof CommonStackParamList> = NativeStackScreenProps<
  CommonStackParamList,
  Screen
>;

/* BVN */

export type BvnVerificationStackParamList = {
  BvnVerificationScreen: undefined;
  BvnVerificationSuccess: undefined;
};

export type BvnVerificationScreenProps<Screen extends keyof BvnVerificationStackParamList> = NativeStackScreenProps<
  BvnVerificationStackParamList,
  Screen
>;
