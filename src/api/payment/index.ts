import apiCourier from "../courier";

type PaymentType = {
  sourceAccount: string;
  destinationAccount: string;
  amount: number;
  destinationBank?: string;
  destinationBankCode: string;
  description: string;
  currency: string;
  transactionPin: string;
  destinationAccountName?: string;
};

export const checkPaymentEndpointHealthAPI = async () => {
  return await apiCourier("get", "/api/v1/payment/health", {}, "jwt");
};

export const payAzaUserAPI = async (data: PaymentType) => {
  return await apiCourier<PaymentType>(
    "post",
    "/api/v1/payment/transfer/intra",
    data,
    "jwt"
  );
};

export const payOtherBankAPI = async (data: PaymentType) => {
  return await apiCourier<PaymentType>(
    "post",
    "/api/v1/payment/transfer/inter",
    data,
    "jwt"
  );
};
