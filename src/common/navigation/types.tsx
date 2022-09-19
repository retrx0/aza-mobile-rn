import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Contact } from "expo-contacts";

/* Common screens */

export type CommonStackParamList = {
  //bvn
  BvnVerification: BvnScreenParamsType;

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
  VaultToBank: undefined;
  VaultWithdrawConfirmation: undefined;
  VaultToBankSuccessful: undefined;

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

  // Home Menu
  Split: undefined;
  ChooseSplit: undefined;
  SplitSelectContacts: SplitSelectContactsParamsType;
  SplitEditContacts: SplitEditContactsParamsType;
  SplitEditContact: SplitEditContactParamsType;
  SplitConfirmation: SplitConfirmationParamsType;
  IncomingSplitRequests: undefined;
  IncomingSplitRequestAcceptance: undefined;
  CompletedSplitRequestDetails: undefined;
  OutgoingSplitRequests: undefined;
  MonthlySummary: undefined;
  FeesAndLimits: undefined;
};

export type CommonScreenProps<Screen extends keyof CommonStackParamList> =
  NativeStackScreenProps<CommonStackParamList, Screen>;

// bvn screen

export type BvnScreenParamsType = {
  onVerifyNavigateBackTo: string;
};

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

export type PaymentsTabScreenProps<
  Screen extends keyof PaymentsStackParamList
> = NativeStackScreenProps<PaymentsStackParamList, Screen>;

/* Profile */

export type AddBankAccountParamsType = {
  bankName: string;
};

export type AddBankAccountConfirmationParamsType = {
  bankName: string;
  accountNumber: string;
  accountName: string;
};

// Home menu
export type SplitSelectContactsParamsType = {
  amount: string;
  date: string;
  splitImage: string;
  name: string;
};

export type SplitEditContactsParamsType = {
  amount: string;
  date: string;
  splitImage: string;
  name: string;
  contacts: Contact[];
};

export type SplitEditContactParamsType = {
  contactSplitAmount: string;
  contactImage: string;
  contactName: string;
};

export type SplitConfirmationParamsType = {
  amount: string;
  splitImage: string;
  name: string;
  contacts: Contact[];
};
