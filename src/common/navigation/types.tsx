import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Contact } from "expo-contacts";

/* Common screens */

export type CommonStackParamList = {
  // page with virtual keyboard
  TransactionKeypad: TransactionKeypadParamsType;
  VaultWithdrawConfirm: VaultConfirmationParamsType;
  SendMoneyFeature: undefined;
  TransactionCertainty: undefined;
  InviteUsers: undefined;
  RequestMoneyFeature: undefined;
  GameCredit: undefined;
  WithdrawFeature: undefined;
  DepositFeature: undefined;
  GameFeature: undefined;
  CharitySupport: undefined;
  CharityFeature: undefined;
  GiftCardEasy: undefined;
  GiftCardFit: undefined;
  GiftCardChoice: undefined;
  QRFeature: undefined;
  CloseAccountScreen: undefined;
  AccountClosureSurveyScreen: undefined;

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
  ElectricityConfirmation: undefined;
  AirtimeConfirmation: undefined;
  InternetConfirmation: undefined;
  CableConfirmation: undefined;
  WaterConfirmation: undefined;
  GiftCardConfirmation: undefined;
  CharityConfirmation: undefined;
  GiftCard: undefined;
  GiftCardDetails: undefined;
  GameScreen: undefined;
  PaymentRecurring: undefined;
  AirtimeRecurring: undefined;
  InternetRecurring: undefined;
  CableRecurring: undefined;
  ElectricityRecurring: undefined;
  WaterRecurring: undefined;
  CharityRecurring: undefined;
  RecurringPlan: undefined;
  GiftCardEmail: undefined;

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
  NewUserVault: undefined;
  AddCoverImage: undefined;
  AddCoverImageSuccessful: undefined;
  SetVaultGoal: undefined;
  ConfirmGoal: undefined;
  UserVault: undefined;
  ChangeVaultName: undefined;
  ChangeGoalAmount: undefined;
  VaultRecurringTransfer: undefined;
  VaultRecurringAmount: undefined;
  RecurringMoneyConfirmationScreen: undefined;
  Vault: undefined;
  VaultToBankAmount: undefined;
  VaultFeature: undefined;
  VaultLiberty: undefined;

  // Settings
  ChangePassword: undefined;
  NewPassword: { oldPassword: string };
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
  SetNewRecurringTransfer: undefined;

  // CEOMessage screen
  CEOMessage: undefined;

  // Common!!!
  Common: undefined;
};

export type CommonScreenProps<Screen extends keyof CommonStackParamList> =
  NativeStackScreenProps<CommonStackParamList, Screen>;

// Page with virtual keyboard

export interface Beneficiary {
  fullName: string;
  firstName?: string;
  lastName?: string;
  pictureUrl?: string;
  azaAccountNumber: string;
  currency?: string;
  phone?: string;
  email?: string;
}

export interface RecurringTransaction {
  type: "recurring";
  beneficiary: Beneficiary;
  period: string;
  day: string;
}
export interface NormalTransaction {
  type: "normal";
  transaction: "withdraw" | "deposit" | "send" | "request";
  beneficiary: Beneficiary;
  openDescriptionModal?: boolean;
}

export type TransactionKeypadParamsType = {
  transactionType: RecurringTransaction | NormalTransaction;
  headerTitle: string;
};

export type VaultConfirmationParamsType = {
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
  screenType?: "transaction" | "status" | "other";
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
