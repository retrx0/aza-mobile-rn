import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

/* Common screens */

export type CommonStackParamList = {
  BvnVerificationRoot: NavigatorScreenParams<BvnVerificationStackParamList>;
  NewVault: undefined;
  VaultPassword: undefined;
  DeleteVault: undefined;
  VaultSuccessful: undefined;
  AddVault: undefined;
  ConfirmDeleteVault: undefined;
  ArchievedVault: undefined;
  VaultWithdraw: undefined;
  VaultWithdrawsuccessful: undefined;
  VaultDetails: undefined;
  VaultActivity: undefined;
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
