import apiCourier from "../courier";

export const checkMoneyRequestEndpointHealthAPI = async () => {
  return await apiCourier("get", "/api/v1/m-request/health", {}, "jwt");
};

export const createSplitPaymentAPI = async (data: {
  creatorAmount: number;
  name: string;
  accountNumber: string;
  transactionId: string;
  receivers: [
    {
      name: string;
      amount: number;
      phoneNumber: string;
      accountNumber: string;
    }
  ];
}) => {
  return await apiCourier("post", "/api/v1/m-request/split", data, "jwt");
};

export const requestMoneyAPI = async (data: {
  initiatorAccountNumber: string;
  receipientAccountNumber: string;
  recepientPhoneNumber: string;
  amount: number;
  decription: string;
}) => {
  return await apiCourier("post", "/api/v1/m-request", data, "jwt");
};

export const acceptMoneyRequestAPI = async (data: {
  moneyRequestId: string;
  sourceAccountNumber: string;
}) => {
  return await apiCourier("patch", "/api/v1/m-request/accept", data, "jwt");
};

export const rejectMoneyRequestAPI = async (moneyRequestId: string) => {
  return await apiCourier(
    "patch",
    `/api/v1/m-request/reject/${moneyRequestId}`,
    {},
    "jwt"
  );
};

export const fetchIncomingMoneyRequestsAPI = async () => {
  return await apiCourier("get", `/api/v1/m-request/incoming`, {}, "jwt");
};

export const fetchOutgoingMoneyRequestsAPI = async () => {
  return await apiCourier("get", `/api/v1/m-request/outgoing`, {}, "jwt");
};

export const fetchIncomingSplitRequestsAPI = async () => {
  return await apiCourier("get", `/api/v1/m-request/split/incoming`, {}, "jwt");
};

export const fetchOutgoingSplitRequestsAPI = async () => {
  return await apiCourier("get", `/api/v1/m-request/split/outgoing`, {}, "jwt");
};
