import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Contact } from "expo-contacts";

/* Common screens */

export type CommonStackParamList = {
  // page with virtual keyboard
  TransactionKeypad: TransactionKeypadParamsType;

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
  BankAccounts: BankAccountsParamsType;
  SelectBank: BankAccountsParamsType;
  AddBankAccount: AddBankAccountParamsType & BankAccountsParamsType;
  AddBankAccountConfirmation: AddBankAccountConfirmationParamsType &
    BankAccountsParamsType;
  EditBankAccountDetails: undefined;
  DebitCreditCards: undefined;
  ManageCard: undefined;
  AddNewCard: { navigateBackTo: string };
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
  ContactUs: undefined;

  //withdraw and deposit
  WithdrawDepositTabs: { screen: string };
  Deposit: undefined;

  // Transfer modal screens
  SendMoney: undefined;
  RequestMoney: undefined;
  RequestMoneyConfirmation: undefined;
  SendMoneyConfirmation: undefined;

  SetupRecurringTransfer: undefined;
  RecurringTransfer: undefined;
  SelectNewRecurringTransfer: undefined;
  RecurringTransferConfirmation: undefined;
};

export type CommonScreenProps<Screen extends keyof CommonStackParamList> =
  NativeStackScreenProps<CommonStackParamList, Screen>;

// page with virtual keyboard
interface RecurringTransaction {
  type: "recurring";
  beneficiary: {
    beneficiaryImage: string;
    beneficiaryName: string;
    beneficiaryAccount: string;
  };
  period: string;
  day: string;
}
interface NormalTransaction {
  type: "normal";
  transaction: "withdraw" | "deposit" | "send" | "request";
  beneficiary: {
    beneficiaryImage: string;
    beneficiaryName: string;
    beneficiaryAccount: string;
  };
  openDescriptionModal?: boolean;
}

export type TransactionKeypadParamsType = {
  transactionType: RecurringTransaction | NormalTransaction;
  headerTitle: string;
};

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
  navigateToParams?: Record<string, unknown>;
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

export type BankAccountsParamsType = {
  screenType: "Withdraw" | "Bank Account";
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
