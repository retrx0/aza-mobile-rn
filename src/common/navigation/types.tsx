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

  // Vault
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

  // Settings
  ChangePassword: undefined;
  NewPassword: undefined;
  ChangePhoneNumber: undefined;
  ChangePhoneNumberOTP: undefined;
  ChangeEmail: undefined;
  PrivacySettings: undefined;
  NameVisibility: undefined;
  ContactVisibility: undefined;
  SplitAndMoneyRequests: undefined;
  BlockUsers: undefined;
  BlockNewUser: undefined;
  NotificationSettings: undefined;
  FaceId: undefined;
  LoginOptions: undefined;
  Appearance: undefined;
  AppLanguage: undefined;

  // Profile
  AccountDetails: undefined;
  TransactionHistory: undefined;
  BankAccounts: undefined;
  SelectBank: undefined;
  AddBankAccount: AddBankAccountParamsType;
  AddBankAccountConfirmation: AddBankAccountConfirmationParamsType;
  DebitCreditCards: undefined;
  ManageCard: undefined;
  AddNewCard: undefined;
  ScanCard: undefined;
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
  statusMessage: string | JSX.Element;
  statusMessage2?: string;
  receiptButton?: boolean;
  setupRecurringTransfer?: boolean;
  cancelButton?: boolean;
  navigateTo: string;
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

/* Profile */

export type AddBankAccountParamsType = {
  bankName: string;
};

export type AddBankAccountConfirmationParamsType = {
  bankName: string;
  accountNumber: string;
  accountName: string;
};
