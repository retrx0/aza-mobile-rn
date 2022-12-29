import api from "..";

import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { getItemSecure } from "../../common/util/StorageUtil";
import { AxiosError } from "axios";
import { toastError } from "../../common/util/ToastUtil";

export const checkAccountEndpointHealthAPI = async () => {
  try {
    const result = await api.get("/api/v1/account/health");
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};

export const getUserAccountInfoAPI = async () => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.get("/api/v1/account", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    throw new Error("Error getting user account info: ", e as Error);
  }
};

export const getAccountInfoAPI = async (accountNumber: string) => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.get(`/api/v1/account/${accountNumber}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e: any) {
    throw new Error(e.response.data.message);
  }
};

export const getUserTransactionsAPI = async (accountNumber: string) => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.get(
      `/api/v1/account/${accountNumber}/trnasactions`,
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

const createVFDAccount = async (data: { bvn: string }) => {
  try {
    const response = await api.post(`/api/v1/account/create`, data);
    if (response.status === 200) return response.data.data;
    return undefined;
  } catch (e) {
    if ((e as AxiosError).response) {
      if ((e as AxiosError).response?.status === 404)
        toastError("Email address not valid!");
      else toastError("We encountered an error, please try again!");
    }
    console.debug("Error get user login details: ", e as Error);
  }
};

const fetchVFDAccountData = async () => {};

const closeVFDAccount = async () => {};
