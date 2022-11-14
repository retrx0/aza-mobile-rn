import { Beneficiary } from "../common/navigation/types";

export interface Transaction {
  id: number;
  image: string;
  name: string;
  transactionType: string;
  transactionTitle: string;
  transactionMessage: string;
  amount: string;
  date: string;
}

export interface UserState {
  azaId?: string;
  gender?: string;
  paymentMethods?: PaymentMethod[];
  accountCurency: string;
  phoneNumber: string;
  fullName: string;
  firstName: string;
  lastName: string;
  pictureUrl: string | undefined;
  azaAccountNumber: number;
  azaBalance: number;
  emailAddress: string;
  accountVerified: boolean;
  accountStatus: string;
  transfers: {
    incommingTransferLimit: number;
    depositAmountLimit: number;
    totalMonthlySenders: number;
    totalMonthlyReceivers: number;
    totalMonthlyIncomingTransfers: number;
    totalMonthlyIncomingTransferAmount: number;
    totalMonthlyOutgoingTransfers: number;
    totalMonthlyOutgoingTransferAmount: number;
  };
  recentTransactions: { loading: boolean; data: Transaction[] };
  azaContacts: Beneficiary[];
}

export type Gender = "Male" | "Female" | "Unknown";

type PaymentMethodCardType = "Master Card" | "Visa";

export type Currency = "NGN" | "USD";

export type Country = "Nigeria";

export type PaymentMethodType = "card" | "cash";

export type UserAccountStatus = "active" | "suspended";

export interface PaymentMethod {
  dateAdded: Date;
  dateModified: Date;
  processedBy: string;
  type: PaymentMethodType;
  cardType: PaymentMethodCardType;
}
