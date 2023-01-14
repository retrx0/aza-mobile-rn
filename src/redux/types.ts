import { string } from "yup";
import { Beneficiary } from "../common/navigation/types";

export interface Transactions {
  transactions: Transaction[];
  dateOfTransactions: string;
}

export interface Transaction {
  id: number;
  imageUrl: string;
  name: string;
  transactionType: "incoming" | "outgoing";
  transactionTitle: string;
  transactionMessage: string;
  amount: string;
  date: string;
}

export interface UserState {
  loading?: boolean;
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
  bvnVerified: boolean;
  accountStatus: string;
  pushToken?: string;
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
  payments: { loading: boolean; recentPayments: Payment[] };
  recentTransactions: { loading: boolean; data: Transactions[] };
  azaContacts: { loading: boolean; data: Beneficiary[] };
  bankAccounts: { loading: boolean; data: BankAccount[] };
}

export interface BankAccount {
  bankName: string;
  logoUrl?: string;
  accountNumber: string;
  accountName: string;
}

export interface Payment {
  status: "Paid" | "Pending";
  amount: string;
  vendorName: string;
  vendorLogo: string;
  date: string;
}
interface Vault {}
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
