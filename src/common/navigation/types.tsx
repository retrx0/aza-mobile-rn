import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Contact } from "expo-contacts";
import {
  IBank,
  IBankAccount,
  IBeneficiary,
  ICharity,
  IGiftCard,
  IRequest,
} from "../../types/types.redux";

/* Common screens */
interface IXCharity extends ICharity {
  tabKey: string;
  recurringTransaction: boolean;
}

interface IXGiftCard extends IGiftCard {
  selectedPrice: string;
}

export type TransactionScreenPinType =
  | "set"
  | "update"
  | "reset"
  | "transaction"
  | "confirm";

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
  WithdrawKeyPad: undefined;
  CloseAccount: undefined;
  AlternativeSurvey: undefined;
  AirtimeIndexScreen: undefined;
  SplitFeature: undefined;

  //bvn
  BvnVerification: BvnScreenParamsType;

  // Status
  StatusScreen: StatusScreenParamsType;

  Receipt: {
    amount: string;
    beneficiaryName: string;
    transactionDate: string;
    transactionFee: string;
    referenceId: string;
    description: string;
    receivingBank: string;
    transactionType: string;
  };

  Notifications: undefined;

  //Payments
  AirtimeData: undefined;
  Confirm: undefined;
  CompleteTransaction: undefined;
  InternetPlans: undefined;
  InternetPlanDetail: { name: string };
  Electricity: undefined;
  CableTV: undefined;
  Pie: undefined;
  Water: undefined;
  Charity: { recurringTransaction?: boolean };
  CharityDetailsScreen: IXCharity;
  ElectricityConfirmation: undefined;

  PaymentConfirmation: IPaymentConfirmation;
  GiftCardConfirmation: { giftCard: IXGiftCard };
  CharityConfirmation: undefined;
  GiftCard: undefined;
  GiftCardDetails: IGiftCard;
  GameScreen: undefined;
  PaymentRecurring: { recurringTransaction?: boolean };
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
  CurrentPassword: { onVerifyNavigateTo: keyof CommonStackParamList };
  NewPassword: { oldPassword: string };
  ChangePhoneNumber: undefined;
  ChangeUserDataOTP: { type: "phone" | "email"; value: string };
  ChangeEmail: undefined;
  PrivacySettings: undefined;
  AccountBalanceVisibility: undefined;
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
  TransactionPin: {
    type: TransactionScreenPinType;
    confirmPinString?: string;
  };
  TransactionPinOptions: undefined;

  // Profile
  AccountDetails: undefined;
  TransactionHistory: undefined;
  BankAccounts: BankAccountsParamsType;
  SelectBank: BankAccountsParamsType;
  AddBankAccount: IBank & BankAccountsParamsType;
  AddBankAccountConfirmation: IBank &
    BankAccountsParamsType & { accountNumber: string; accountName: string };
  EditBankAccountDetails: IBankAccount;
  DebitCreditCards: undefined;
  ManageCard: undefined;
  AddNewCard: { navigateBackTo: string };
  ScanCard: undefined;
  TermsOfUse: undefined;

  // Home Menu
  Split: undefined;
  ChooseSplit: undefined;
  SplitSelectContacts: SplitSelectContactsParamsType;
  SplitEditContacts: SplitEditContactsParamsType;
  SplitEditContact: SplitEditContactParamsType;
  SplitConfirmation: SplitConfirmationParamsType;
  IncomingSplitRequests: undefined;
  IncomingSplitRequestAcceptance: { requestItem: IRequest };
  CompletedSplitRequestDetails: { requestItem: IRequest };
  OutgoingSplitRequests: undefined;
  MonthlySummary: undefined;
  FeesAndLimits: undefined;
  ContactUs: undefined;
  SpliFeature: undefined;

  //withdraw and deposit
  WithdrawDepositTabs: { tabToView: "withdraw" | "deposit" };
  Deposit: undefined;
  Withdraw: undefined;

  // Transfer modal screens
  SendMoney: { recurringTransaction?: boolean };
  RequestMoney: undefined;
  RequestMoneyConfirmation: undefined;
  SendMoneyConfirmation: undefined;
  SetupRecurringTransfer: IBeneficiary;
  RecurringTransfer: undefined;
  SelectNewRecurringTransfer: undefined;
  RecurringTransferConfirmation: {
    amount: string;
    beneficiary: IBeneficiary;
    period: string;
    day: string;
  };

  // CEOMessage screen
  CEOMessage: undefined;

  // Common!!!
  Common: undefined;
};

export type CommonScreenProps<Screen extends keyof CommonStackParamList> =
  NativeStackScreenProps<CommonStackParamList, Screen>;

// Page with virtual keyboard

export interface RecurringTransaction {
  type: "recurring";
  beneficiary: IBeneficiary;
  period: string;
  day: string;
}
export interface NormalTransaction {
  type: "normal";
  transaction: "withdraw" | "deposit" | "send" | "request" | "debit";
  beneficiary: IBeneficiary;
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

export type TransactionScreenProps = {
  confirmationType: "send" | "request";
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
  recurringTransferBeneficiary?: IBeneficiary;
  receiptDetails?: { amount: string; beneficiaryName: string };
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

export interface IPaymentConfirmation {
  beneficiaryLogo: string;
  beneficiaryName: string;
  phoneNumber?: string;
  amount: string;
  paymentMethod?: string;
  purchaseName: string;
  meterNumber?: string;
  accountOrUserId?: string;
  smartCardNumber?: string;
  customerAccountNumber?: string;
  recurringTransaction?: boolean;
}

export type PaymentsTabScreenProps<
  Screen extends keyof PaymentsStackParamList
> = NativeStackScreenProps<PaymentsStackParamList, Screen>;

/* Profile */

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
