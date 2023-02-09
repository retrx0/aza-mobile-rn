import apiCourier from "../courier";

type PaymentType = {
  sourceAccount: string;
  destinationAccount: string;
  amount: number;
  destinationChannel: string;
  destinationBankCode: string;
  description: string;
  currency: string;
  transactionPin: string;
  destinationAccountName: string;
};

export const checkPaymentEndpointHealthAPI = async () => {
  return await apiCourier("get", "/api/v1/payment/health", {}, "jwt");
};

export const payAzaUserAPI = async (data: PaymentType) => {
  return await apiCourier<PaymentType>(
    "post",
    "/api/v1/payment/transfer/aza",
    data,
    "jwt"
  );
};

export const payOtherBankAPI = async (data: PaymentType) => {
  return await apiCourier<PaymentType>(
    "post",
    "/api/v1/payment/transfer/other",
    data,
    "jwt"
  );
};
