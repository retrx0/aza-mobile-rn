// SOP

import { useState } from "react";
import { requestMoneyAPI } from "../../../api/money-request";
import { payAzaUserAPI } from "../../../api/payment";
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
  selectUser,
} from "../../../redux/slice/userSlice";
import * as LocalAuthentication from "expo-local-authentication";
import { selectAppPreference } from "../../../redux/slice/preferenceSlice";
import {
  getItemSecure,
  storeItemSecure,
} from "../../../common/util/StorageUtil";
import { STORAGE_KEY_TRANSACTION_PIN } from "@env";
import useAppBiometricAuthentication from "../../../hooks/useAppBiometricAuthentication";

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
  const { bvnVerified, azaAccountNumber, isTransactionPinSet } =
    useAppSelector(selectUser);
  const userPreferences = useAppSelector(selectAppPreference);
  const { authenticateWithBiometrics } = useAppBiometricAuthentication();

  const dispatch = useAppDispatch();

  const [transDescription, setTransDescription] = useState(description);
  const [screenLoading, setScreenLoading] = useState(false);

  const makeTransaction = async () => {
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
        if (isTransactionPinSet) authenticateForTransaction();
        else navigation.navigate("TransactionPin", { type: "set" });
      } else {
        requestMoneyAPI({
          amount: amount,
          decription: transDescription ? transDescription : "",
          initiatorAccountNumber: "" + azaAccountNumber,
          receipientAccountNumber: beneficiary.azaAccountNumber,
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

  const sendMoneyToAzaUser = (transactionPin: string) => {
    setScreenLoading(true);

    payAzaUserAPI({
      sourceAccount: azaAccountNumber,
      destinationAccount: beneficiary.azaAccountNumber,
      amount,
      transactionPin: transactionPin,
      description: transDescription ? transDescription : "Aza transaction",
      currency: NAIRA_CCY_CODE,
      destinationBankCode: PSB_BANK_CODE,
      destinationAccountName: beneficiary.fullName,
    })
      .then((res) => {
        console.log(res);
        setScreenLoading(false);
        navigateToNextScreen();
        dispatch(getUserAccountDetails());
      })
      .catch(() => {
        setScreenLoading(false);
        toastError("There was a problem completing transaction!");
      });
  };

  const authenticateForTransaction = async () => {
    authenticateWithBiometrics(
      userPreferences && userPreferences?.confirmTransactionsWithFaceIDSwitch
    ).then((authenticated) => {
      if (authenticated) {
        getItemSecure(STORAGE_KEY_TRANSACTION_PIN).then((cachedPin) => {
          if (cachedPin) sendMoneyToAzaUser(cachedPin);
          else navigation.push("TransactionPin", { type: "transaction" });
        });
      } else {
        navigation.push("TransactionPin", { type: "transaction" });
      }
    });
  };

  const navigateToNextScreen = () => {
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
          ? "You can perform this transaction automatically by giving a Recurring Transfer order"
          : "",
      receiptDetails:
        confirmationType === "send"
          ? {
              amount: String(amount),
              beneficiaryName: beneficiary.fullName,
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
    sendMoneyToAzaUser,
  };
};

export default useTransactionService;
