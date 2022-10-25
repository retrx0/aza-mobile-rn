export interface User {
  azaId?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  gender?:string;
  paymentMethods?: PaymentMethod[];
  accountStatus?: UserAccountStatus;
  transactions?: [];
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
