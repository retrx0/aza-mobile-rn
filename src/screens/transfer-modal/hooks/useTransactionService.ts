// SOP

import { useState } from "react";
import { requestMoneyAPI } from "../../../api/money-request";
import { payAzaUserAPI, payOtherBankAPI } from "../../../api/payment";
import {
  CommonScreenProps,
  TransactionScreenProps,
} from "../../../common/navigation/types";
import { toastError } from "../../../common/util/ToastUtil";
import {
  NAIRA_CCY_CODE,
  NAIRA_UNICODE,
  PSB_BANK_CODE,
} from "../../../constants/AppConstants";
import { useAppDispatch, useAppSelector } from "../../../redux";
import {
  selectTransaction,
  setTransactionDescription,
} from "../../../redux/slice/transactionSlice";
import {
  getUserAccountDetails,
  getUserTransactions,
  selectUser,
} from "../../../redux/slice/userSlice";
import { selectAppPreference } from "../../../redux/slice/preferenceSlice";
import {
  getItemSecure,
  storeItemSecure,
} from "../../../common/util/StorageUtil";
import { STORAGE_KEY_TRANSACTION_PIN } from "@env";
import useAppBiometricAuthentication from "../../../hooks/useAppBiometricAuthentication";
import { AxiosError } from "axios";
import { ITransferResponse } from "../../../types/types.redux";

const useTransactionService = (
  {
    navigation,
    route,
  }: CommonScreenProps<
    | "TransactionPin"
    | "SendMoneyConfirmation"
    | "RequestMoneyConfirmation"
    | "ChangeEmail"
    | "ChangePhoneNumber"
    | "ChangeUserDataOTP"
  >,
  { confirmationType }: TransactionScreenProps
) => {
  const { beneficiary, amount, transferType, description } =
    useAppSelector(selectTransaction);
  const { bvnVerified, isTransactionPinSet, walletNumber } =
    useAppSelector(selectUser);
  const userPreferences = useAppSelector(selectAppPreference);
  const { authenticateWithBiometrics } = useAppBiometricAuthentication();

  const dispatch = useAppDispatch();

  const [transDescription, setTransDescription] = useState(description);
  const [screenLoading, setScreenLoading] = useState(false);

  const makeTransaction = async (transactionType: "INTRA" | "INTER") => {
    // do some validation
    if (!bvnVerified) {
      navigation.navigate("BvnVerification", {
        onVerifyNavigateBackTo:
          confirmationType === "send"
            ? "SendMoneyConfirmation"
            : "RequestMoneyConfirmation",
      });
    } else {
      dispatch(setTransactionDescription("" + transDescription));
      //make transaction
      if (confirmationType === "send") {
        // setScreenLoading(true);
        if (isTransactionPinSet) authenticateForTransaction(transactionType);
        else navigation.navigate("TransactionPin", { type: "set" });
      } else {
        if (!walletNumber) toastError("Request not allowed!");
        else
          requestMoneyAPI({
            amount: amount,
            decription:
              transDescription && transDescription !== ""
                ? transDescription
                : "With love from Aza",
            initiatorAccountNumber: walletNumber,
            receipientAccountNumber: beneficiary.accountNumber,
            recepientPhoneNumber: beneficiary.phone ? beneficiary.phone : "",
          })
            .then(() => {
              navigateToNextScreen();
            })
            .catch(() => {
              toastError("There was a problem making the request!");
            });
      }
    }
  };

  const sendMoney = (
    transactionPin: string,
    transactionType: "INTRA" | "INTER"
  ) => {
    if (!walletNumber) toastError("Transaction not allowed!");
    else {
      setScreenLoading(true);
      if (transactionType === "INTRA") {
        payAzaUserAPI({
          sourceAccount: walletNumber,
          destinationAccount: beneficiary.accountNumber,
          amount,
          transactionPin: transactionPin,
          description:
            transDescription && transDescription !== ""
              ? transDescription
              : "With love from Aza",
          currency: NAIRA_CCY_CODE,
          destinationBankCode: PSB_BANK_CODE,
          destinationAccountName: beneficiary.fullName,
        })
          .then((res) => {
            setScreenLoading(false);
            navigateToNextScreen(res);
            dispatch(getUserAccountDetails());
            dispatch(getUserTransactions({ accountNumber: walletNumber }));
          })
          .catch((err) => {
            setScreenLoading(false);
            toastError("There was a problem completing transaction!");
          });
      } else {
        setScreenLoading(true);
        payOtherBankAPI({
          amount,
          currency: NAIRA_CCY_CODE,
          description:
            transDescription && transDescription !== ""
              ? transDescription
              : "With love from Aza",
          destinationAccount: beneficiary.accountNumber,
          destinationBankCode: beneficiary.bankCode,
          destinationAccountName: beneficiary.fullName,
          sourceAccount: walletNumber,
          transactionPin: transactionPin,
        })
          .then((res) => {
            console.debug(res);
            setScreenLoading(false);
            dispatch(getUserAccountDetails());
            dispatch(getUserTransactions({ accountNumber: walletNumber }));
            navigateToNextScreen(res);
          })
          .catch((err) => {
            console.error("There was a problem completing transaction to", err);
            setScreenLoading(false);
            toastError(
              `There was a problem completing transaction to ${beneficiary.accountNumber}!`
            );
          });
      }
    }
  };

  const authenticateForTransaction = async (
    transactionType: "INTRA" | "INTER"
  ) => {
    authenticateWithBiometrics(
      userPreferences && userPreferences?.confirmTransactionsWithFaceIDSwitch
    ).then((authenticated) => {
      if (authenticated) {
        getItemSecure(STORAGE_KEY_TRANSACTION_PIN).then((cachedPin) => {
          if (cachedPin) sendMoney(cachedPin, transactionType);
          else navigation.push("TransactionPin", { type: "transaction" });
        });
      } else {
        navigation.push("TransactionPin", { type: "transaction" });
      }
    });
  };

  const navigateToNextScreen = (response?: ITransferResponse) => {
    navigation.navigate("StatusScreen", {
      status:
        confirmationType === "request"
          ? "Successful"
          : "Your transaction was \n successful",
      statusIcon: "Success",
      statusMessage: `You have successfully ${
        confirmationType === "request" ? "requested" : "sent"
      } ${NAIRA_UNICODE} ${amount} ${
        confirmationType === "request" ? "from" : "to"
      } ${beneficiary.fullName}`,
      statusMessage2:
        confirmationType === "send"
          ? "" // "You can perform this transaction automatically by giving a Recurring Transfer order"
          : "",
      receiptDetails:
        confirmationType === "send" && response
          ? {
              amount: String(amount),
              beneficiaryName: beneficiary.fullName,
              description: response.description,
              receivingBank: response.destBankName,
              referenceId: response.transactionReference,
              transactionDate: response.dateCreated,
              transactionFee: "",
              transactionType: response.transactionType,
            }
          : undefined,
      recurringTransferBeneficiary:
        confirmationType === "send" ? beneficiary : undefined,
      navigateTo: "Home",
      // to disallow swoosh sound in request screen
      screenType: confirmationType === "send" ? "transaction" : undefined,
    });
  };

  return {
    makeTransaction,
    screenLoading,
    transDescription,
    setTransDescription,
    sendMoneyToAzaUser: sendMoney,
  };
};

export default useTransactionService;
