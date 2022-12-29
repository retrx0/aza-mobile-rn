import api from "..";

import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { getItemSecure } from "../../common/util/StorageUtil";

export const checkPaymentEndpointHealthAPI = async () => {
  try {
    const result = await api.get("/api/v1/payment/health");
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};

export const transferMoneyAPI = async (data: {
  sourceAccount: string;
  destinationAccount: string;
  amount: number;
  sourceChannel: number;
  destinationChannel: number;
  description: string;
  currency: string;
  transactionPin: string;
}) => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.post("/api/v1/payment/transfer", data, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e: any) {
    throw Error(e.response.data.message);
  }
};

export const recurringTransferAPI = async (data: {
  sourceAccount: string;
  receivingAccount: string;
  amount: number;
  currency: string;
  recevingChannel: number;
  duration: number;
  specificDay: number;
  frequency: number;
  startDate: Date;
}) => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.put("/api/v1/payment/recurring", data, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (result.status === 204) return result.data;
    return undefined;
  } catch (e: any) {
    throw Error(e.response.data.message);
  }
};
