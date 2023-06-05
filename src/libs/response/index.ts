// Responses Interfaces/Types
export interface IUserInfoResponse {
  accountTier: any;
  bvn: string;
  dateOfBirth: string;
  email: string;
  firstName: string;
  gender: string;
  isBVNComfirmed: boolean;
  isDateOfBirthConfirmed: boolean;
  isEmailConfirmed: boolean;
  isPhoneNumberConfirmed: boolean;
  isTransactionPinSet: boolean;
  lastLogin: string;
  lastName: string;
  phoneNumber: string;
  pictureUrl: string;
  userName: any;
  walletNumber: string;
  pushNotificationToken: string;
}

export interface I9PSBWalletResponse {
  availableBalance: number;
  bankName: string;
  status: string | "Inactive";
  walletName: string;
  walletNumber: number;
}

export interface IAccountMetadataResponse {
  dailyTransactionLimit: number;
  depositAmountLimit: number;
  incomingTransferLimit: number;
  maximumWalletBalance: number;
  numberOfIncomingTransfers: number;
  numberOfPeopleTransactionReceived: number;
}

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

export interface IIdentifyAzaContactResponse {
  data: {
    azaUserFullName: string;
    contactName: string;
    contactPhoneNumber: string;
  };
  message: string;
  requestState: string;
  statusCode: string;
}

export interface IAddUserBVNResponse {
  data: {
    accountTier: string | null;
    bvn: string;
    dateOfBirth: string;
    email: string;
    firstName: string;
    gender: string;
    isBVNComfirmed: boolean;
    isDateOfBirthConfirmed: boolean;
    isEmailConfirmed: boolean;
    isGenesisUser: boolean;
    isPhoneNumberConfirmed: boolean;
    isPushNotificationTokenSet: boolean;
    isTransactionPinSet: boolean;
    lastLogin: string;
    lastName: string;
    phoneNumber: string;
    pictureUrl: string;
    pushNotificationToken: string;
    userName: string | null;
    walletNumber: string | null;
  };
  message: string;
  requestState: "Success" | string;
  statusCode: string | "OK";
}

export interface IUserAzaContactResponse {}
