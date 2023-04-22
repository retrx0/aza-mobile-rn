import { IVerifyBankResponse } from "../../types/types.api";
import apiCourier from "../courier";

export const checkAccountEndpointHealthAPI = async () => {
  return await apiCourier("get", "/api/v1/account/health", undefined, "none");
};

export const getUserAccountInfoAPI = async () => {
  return await apiCourier("get", "/api/v1/account", undefined, "jwt");
};

export const getAccountInfoAPI = async (accountNumber: string) => {
  return await apiCourier(
    "get",
    `/api/v1/account/${accountNumber}`,
    undefined,
    "jwt"
  );
};

export const getUserTransactionsAPI = async (accountNumber: string) => {
  return await apiCourier(
    "get",
    `/api/v1/account/${accountNumber}/trnasactions`,
    undefined,
    "jwt"
  );
};

export const verifyBankAccountAPI = async (
  bankCode: string,
  accountNumber: string,
  walletNumber: string
) => {
  return await apiCourier<
    { bankCode; accountNumber; walletNumber },
    IVerifyBankResponse
  >(
    "post",
    "/api/v1/account/verify",
    {
      bankCode,
      accountNumber,
      walletNumber,
    },
    "jwt"
  );
};

export const create9PSBWallet = async ({
  bvn,
  dateOfBirth,
}: {
  bvn: string;
  dateOfBirth: string;
}) => {
  return await apiCourier(
    "put",
    "/api/v1/account/create",
    { bvn, dateOfBirth },
    "jwt"
  );
};

const close9PSBAccount = async () => {};
