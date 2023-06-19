//
export interface IRegisterUserResponse {}

export interface IPayOtherBankResponse {
  data: ITransferResponse;
  message: string;
  requestState: string;
  statusCode: string;
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
