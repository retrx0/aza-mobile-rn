import api from "..";

import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { toastError } from "../../common/util/ToastUtil";
import { getItemSecure } from "../../common/util/StorageUtil";

export const checkMoneyRequestEndpointHealthAPI = async () => {
  try {
    const result = await api.get("/api/v1/m-request/health");
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
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
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.post("/api/v1/m-request/split", data, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (result.status === 200) return result;
    console.log(result);
    return undefined;
  } catch (e) {
    console.log(e as Error);
  }
};

export const requestMoneyAPI = async (data: {
  initiatorAccountNumber: string;
  receipientAccountNumber: string;
  recepientPhoneNumber: string;
  amount: number;
  decription: string;
}) => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.post("/api/v1/m-request", data, {
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

export const acceptMoneyRequestAPI = async (data: {
  moneyRequestId: string;
  sourceAccountNumber: string;
}) => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.patch("/api/v1/m-request/accept", data, {
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

export const rejectMoneyRequestAPI = async (moneyRequestId: string) => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.patch(
      `/api/v1/m-request/reject/${moneyRequestId}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e: any) {
    throw Error(e.response.data.message);
  }
};

export const fetchIncomingMoneyRequestsAPI = async () => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.get(`/api/v1/m-request/incoming`, {
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

export const fetchOutgoingMoneyRequestsAPI = async () => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.get(`/api/v1/m-request/outgoing`, {
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

export const fetchIncomingSplitRequestsAPI = async () => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.get(`/api/v1/m-request/split/incoming`, {
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

export const fetchOutgoingSplitRequestsAPI = async () => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.get(`/api/v1/m-request/split/outgoing`, {
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
