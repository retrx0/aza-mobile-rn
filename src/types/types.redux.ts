export interface ICommonTypedListResult<T> {
  loading: boolean;
  loaded: boolean;
  data: T[];
}

export interface IUserCred {
  email: string;
  token: string;
  password: string;
  phoneNumber: string;
  fullName: string;
  pictureUrl?: string;
}

export interface ITransactions {
  transactions: ITransaction[];
  dateOfTransactions: string;
}
export interface ICountry {
  isoName: string;
  name: string;
  flagUrl: string;
  currencyCode: string;
  currencyName: string;
}

export interface IGiftCard {
  productId: number;
  productName: string;
  global: boolean;
  senderFee: string;
  recipientCurrencyCode: string;
  minRecipientDenomination: string;
  maxRecipientDenomination: string;
  fixedRecipientDenominations: string[];
  fixedSenderDenominations: string[];
  fixedRecipientToSenderDenominationsMap: {
    "1.00": "740.00";
  };
  logoUrls: string[];
  brand: {
    brandId: number;
    brandName: string;
  };
  country: {
    isoName: string;
    name: string;
    flagUrl: string;
    currencyCode: string;
    currencyName: string;
  };
  redeemInstruction: {
    concise: string;
    verbose: string;
  };
}

export interface ITransaction {
  id: number;
  imageUrl: string;
  name: string;
  transactionType: "incoming" | "outgoing";
  transactionTitle: string;
  transactionMessage: string;
  amount: string;
  date: string;
}

export interface I9PSBRecentTransactions {
  key: string;
  transactions: I9PSBTransaction[];
}

export interface I9PSBTransaction {
  amount: number;
  createdAt: string;
  currency: string;
  description: string;
  destinationCreditAccount: string;
  destinationCreditChannel: string | null;
  modeOfTransaction: string | null;
  name: string | null;
  sourceAccount: string;
  sourceChannel: string | null;
  transactionId: string;
  transactionReference: string | null;
  transactionType: "IntraBank" | "InterBank";
  type: "DEBIT" | "CREDIT";
}

interface IVault {}

export interface IPaymentMethod {
  dateAdded: Date;
  dateModified: Date;
  processedBy: string;
  type: PaymentMethodType;
  cardType: PaymentMethodCardType;
}

export interface IBankAccount {
  id: string;
  bankName: string;
  bankLogo?: string;
  bankCode: string;
  userId?: string;
  accountNumber: string;
  accountName: string;
  isBeneficiary: boolean;
}

export interface IPayment {
  status: "Paid" | "Pending";
  amount: string;
  vendorName: string;
  vendorLogo: string;
  date: string;
  category: PaymentCategory;
}

export interface IRequest extends IPayment {
  type: "incoming" | "outgoing";
  requestor: IBeneficiary;
  requestees: IBeneficiary[];
}

export interface IBeneficiary {
  fullName: string;
  firstName?: string;
  lastName?: string;
  pictureUrl?: string;
  accountNumber: string;
  bankCode: string;
  currency?: string;
  phone?: string;
  email?: string;
  beneficiaryName?: string;
}

export interface ICharity {
  id?: number;
  charityName: string;
  primaryAccountNo: string;
  primaryAccBankName: string;
  secondaryAccountNo: string;
  secondaryAccBankName: string;
  description: string;
  pictureUrl: string;
  city: string;
}

export interface IElectricityBiller {
  countryName: string;
  id: number;
  maxLocalTransactionAmount: number;
  minLocalTransactionAmount: number;
  name: string;
  serviceType: string;
  type: string;
  logoUrl: string;
}

export interface IAirtimeOperator {
  name: string;
  logoUrls: string[];
  operatorId: number;
}

export interface IBank {
  id?: number;
  bankCode: string;
  bankName: string;
  logoUrl: string;
}

export interface IQRScanTransactionData {
  walletNumber: string;
  fullName: string;
  amount: string | undefined;
}

/* REDUX STATES */

export interface IPaymentState {
  detailHeader: string;
  detailValue: string;
  amount: string;
  paymentMethod: "Aza Account" | "Bank Account";
  to: string;
  logo: string;
  paymentType: string;
  charities: ICommonTypedListResult<ICharity>;
  airtimeOperators: ICommonTypedListResult<IAirtimeOperator>;
  giftCards: ICommonTypedListResult<IGiftCard>;
  electricityBillers: ICommonTypedListResult<IElectricityBiller>;
}

export interface IUserState {
  loading?: boolean;
  loaded?: boolean;
  azaId?: string;
  gender?: string;
  paymentMethods?: IPaymentMethod[];
  accountCurency: string;
  phoneNumber: string;
  dateOfBirth: string;
  lastLogin: string;
  fullName: string;
  firstName: string;
  lastName: string;
  pictureUrl: string | undefined;
  walletNumber: string | null;
  azaBalance: number;
  emailAddress: string;
  accountVerified: boolean;
  bvnVerified: boolean;
  bvnNumber: string;
  accountStatus: string;
  pushToken?: string;
  accountTier: string;
  bvn: string;
  isEmailConfirmed: boolean;
  isPhoneNumberConfirmed: boolean;
  isTransactionPinSet: boolean;
  userName: string;
  transfers: {
    loading: boolean;
    incommingTransferLimit: number;
    depositAmountLimit: number;
    totalMonthlySenders: number;
    totalMonthlyReceivers: number;
    totalMonthlyIncomingTransfers: number;
    totalMonthlyIncomingTransferAmount: number;
    totalMonthlyOutgoingTransfers: number;
    totalMonthlyOutgoingTransferAmount: number;
  };
  vault: { loading: boolean; recentTransaction: [] };
  payments: ICommonTypedListResult<IPayment>;
  paymentRequests: ICommonTypedListResult<IRequest>;
  recentTransactions: ICommonTypedListResult<I9PSBRecentTransactions>;
  azaContacts: ICommonTypedListResult<IBeneficiary>;
  bankAccounts: ICommonTypedListResult<IBankAccount>;
}

export interface IBankState {
  banks: ICommonTypedListResult<IBank>;
}

/* RESPONSE STATES */

export interface ITransferResponse {
  amount: number;
  createdAt: string;
  currency: string;
  dateCreated: string;
  description: string;
  destBankCode: string;
  destBankName: string | null;
  destinationCreditAccount: string;
  id: string;
  name: string;
  sourceAccount: string;
  sourceBankCode: string | null;
  sourceBankName: string | null;
  transactionReference: string | null;
  transactionType: string;
  type: string | null;
}

export type PaymentCategory =
  | "Internet"
  | "Cable Tv"
  | "Airtime & Data"
  | "Electricity"
  | "Water"
  | "Gift Cards"
  | "Charity"
  | "Game Credits";

export type Gender = "Male" | "Female" | "Unknown";

type PaymentMethodCardType = "Master Card" | "Visa";

export type Currency = "NGN" | "USD";

export type Country = "Nigeria";

export type PaymentMethodType = "card" | "cash";

export type UserAccountStatus = "active" | "suspended";
