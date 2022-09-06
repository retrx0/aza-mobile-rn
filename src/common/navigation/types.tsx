import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

/* Common screens */

export type CommonStackParamList = {
  BvnVerificationRoot: NavigatorScreenParams<BvnVerificationStackParamList>;
  NewVault: undefined;
  VaultPassword: undefined;
  LockVault: undefined;
  VaultSuccessful: undefined;
  AddVault: undefined;
  ConfirmDeleteVault: undefined;
  ArchievedVault: undefined;
  VaultToAza: undefined;
  VaultWithdrawsuccessful: undefined;
  details: undefined;
  activity: undefined;
  TopBar: undefined;
  mature: undefined;
  MatureTab: undefined;
  VaulToBank: undefined;
  VaultWithdrawConfirmation: undefined;
  VaultToBankSuccessfull: undefined;
  TransactionHistory: undefined;
};

export type CommonScreenProps<Screen extends keyof CommonStackParamList> =
  NativeStackScreenProps<CommonStackParamList, Screen>;

/* BVN */

export type BvnVerificationStackParamList = {
  BvnVerificationScreen: undefined;
  BvnVerificationSuccess: undefined;
};

export type BvnVerificationScreenProps<
  Screen extends keyof BvnVerificationStackParamList
> = NativeStackScreenProps<BvnVerificationStackParamList, Screen>;
