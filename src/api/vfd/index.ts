import { AxiosError } from "axios";
import api from "..";

type VfdTransfer = {
  fromClientId: string;
  fromClient: string;
  fromSavingsId: string;
  fromBvn: string;
  toClient: string;
  toBvn: string;
  fromAccount: string;
  toAccount: string;
  toBank: string;
  signature: string;
  amount: string;
  remark: string;
  transferType: "inter" | "intra";
  reference: string;
  toSession: string;
  toKyc: string;
};

export const createVFDAccountAPI = async (data: {
  dateOfBirth: string;
  bvn: string;
}) => {
  try {
    const response = await api.post(`/api/Vfd/account-creation`, data);
    if (response.status === 200) return response.data.data;
    return undefined;
  } catch (e) {
    console.debug("Error creating vfd account: ", e as AxiosError);
    throw Error("Error creating vfd account");
  }
};

export const transferToBankAPI = async (data: VfdTransfer) => {
  try {
    const response = await api.post(`/api/Vfd/inter-transfer`, data);
    if (response.status === 200) return response.data.data;
    return undefined;
  } catch (e) {
    console.debug("Error: ", e as AxiosError);
    throw Error("Error");
  }
};

export const transferToAzaUserAPI = async (data: VfdTransfer) => {
  try {
    const response = await api.post(`/api/Vfd/intra-transfer`, data);
    if (response.status === 200) return response.data.data;
    return undefined;
  } catch (e) {
    console.debug("Error: ", e as AxiosError);
    throw Error("Error");
  }
};

export const vfdAccountEnquiryAPI = async (accountNumber: string) => {
  try {
    const response = await api.get(
      `/api/Vfd/account-enquiry?accountNumber=${accountNumber}`
    );
    if (response.status === 200) return response.data.data;
    return undefined;
  } catch (e) {
    console.debug("Error: ", e as AxiosError);
    throw Error();
  }
};

export const getBvnDetailsAPI = async (bvn: string) => {
  try {
    const response = await api.get(`/api/Vfd/bvn-details?bvn=${bvn}`);
    if (response.status === 200) return response.data.data;
    return undefined;
  } catch (e) {
    console.debug("Error: ", e as AxiosError);
    throw Error();
  }
};

export const vfdBeneficiaryEnquiryAPI = async (
  accountNumber: string,
  bankCode: string
) => {
  try {
    const response = await api.get(
      `/api/Vfd/beneficiary-enquiry?accountNumber=${accountNumber}&bankCode=${bankCode}`
    );
    if (response.status === 200) return response.data.data;
    return undefined;
  } catch (e) {
    console.debug("Error: ", e as AxiosError);
    throw Error();
  }
};

export const vfdGetBanksAPI = async () => {
  try {
    const response = await api.get(`/api/Vfd/banks`);
    if (response.status === 200) return response.data.data;
    return undefined;
  } catch (e) {
    console.debug("Error: ", e as AxiosError);
    throw Error();
  }
};
