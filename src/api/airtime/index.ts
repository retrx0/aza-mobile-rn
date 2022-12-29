import api from "..";

import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { getItemSecure } from "../../common/util/StorageUtil";

type NetworkOperator = 345 | 645 | 646 | 647;

export const checkAirtimeEndpointHealthAPI = async () => {
  try {
    const result = await api.get("/api/top-up/health");
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};

export const topUpAirtimeAPI = async (
  networkOperator: NetworkOperator,
  airtimeAmount: number,
  phoneNumberToTopup: string,
  sourceAccount: string
) => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.post(
      "/api/top-up/airtime",
      {
        networkOperator,
        airtimeAmount,
        phoneNumberToTopup,
        sourceAccount,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e: any) {
    throw new Error(e.response.data.message);
  }
};

export const topUpDataAPI = async (
  networkOperator: NetworkOperator,
  airtimeAmount: number,
  phoneNumberToTopup: string,
  sourceAccount: string
) => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.post(
      "/api/top-up/data",
      {
        networkOperator,
        airtimeAmount,
        phoneNumberToTopup,
        sourceAccount,
      },
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

export const fetchAirtimeOperatorsAPI = async () => {
  return await api.get("/api/top-up/operators");
};

export const detectNetworkOperatorAPI = async (phoneNumber: string) => {
  try {
    const result = await api.get(`/api/top-up/operators/auto/${phoneNumber}`);
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};

export const fetchNetworkOperatorDataPlansAPI = async (
  networkOperator: NetworkOperator
) => {
  try {
    const result = await api.get(
      `/api/top-up/operators/data/${networkOperator}`
    );
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};
