import api from "..";

import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { toastError } from "../../common/util/ToastUtil";
import { getItemSecure } from "../../common/util/StorageUtil";

export const checkUtilitiesEndpointHealthAPI = async () => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.get("/api/v1/utilities/health", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};

export const fetchElectricityBillersAPI = async () => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.get(`/api/v1/utilities/billers/electricity`, {
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

export const payElectricityBillAPI = async (data: {
  billerId: string;
  amount: number;
  sourceAccountNumber: string;
  subcriberNo: string;
}) => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.post("/api/v1/utilities/electricity/pay", data, {
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
