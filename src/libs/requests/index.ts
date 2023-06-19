// Request Interfaces/Types

export interface ISaveBankAccountRequest {
  accountName: string;
  accountNumber: string;
  bankCode: string;
  isBeneficiary: boolean;
}

export interface IAddBVNRequest {
  bvn: string;
  dateOfBirth: string;
}

export interface IIdentifyAzaContactRequest {
  contactPhoneNumber: string;
  contactName: string;
}

export interface IRegisterUserRequest {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  newPassword: string;
  pushNotificationToken: string;
  isGenesisUser?: true;
}
