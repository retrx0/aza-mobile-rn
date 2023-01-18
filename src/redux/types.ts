export interface ITransactions {
  transactions: ITransaction[];
  dateOfTransactions: string;
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

export interface IBeneficiary {
  fullName: string;
  firstName?: string;
  lastName?: string;
  pictureUrl?: string;
  azaAccountNumber: string;
  currency?: string;
  phone?: string;
  email?: string;
}

export interface UserState {
  loading?: boolean;
  azaId?: string;
  gender?: string;
  paymentMethods?: IPaymentMethod[];
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
  payments: { loading: boolean; recentPayments: IPayment[] };
  paymentRequests: { loading: boolean; data: IRequest[] };
  recentTransactions: { loading: boolean; data: ITransactions[] };
  azaContacts: { loading: boolean; data: IBeneficiary[] };
  bankAccounts: { loading: boolean; data: IBankAccount[] };
}

export interface IBankAccount {
  bankName: string;
  logoUrl?: string;
  accountNumber: string;
  accountName: string;
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
interface IVault {}
export type Gender = "Male" | "Female" | "Unknown";

type PaymentMethodCardType = "Master Card" | "Visa";

export type Currency = "NGN" | "USD";

export type Country = "Nigeria";

export type PaymentMethodType = "card" | "cash";

export type UserAccountStatus = "active" | "suspended";

export interface IPaymentMethod {
  dateAdded: Date;
  dateModified: Date;
  processedBy: string;
  type: PaymentMethodType;
  cardType: PaymentMethodCardType;
}
