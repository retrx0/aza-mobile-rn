// SOP

import { useState } from "react";
import { requestMoneyAPI } from "../../../api/money-request";
import { payAzaUserAPI } from "../../../api/payment";
import { TransactionScreenProps } from "../../../common/navigation/types";
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

const useTransactionService = (
  navigation: any,
  { confirmationType }: TransactionScreenProps
) => {
  const { beneficiary, amount, transferType, description } =
    useAppSelector(selectTransaction);
  const { bvnVerified, azaAccountNumber, bvnNumber } =
    useAppSelector(selectUser);
  const userPreferences = useAppSelector(selectAppPreference);

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
        authenticateForTransaction();
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
          .catch(() => {});
        toastError("There was a problem making the request!");
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
    })
      .then((res) => {
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
    const hasBiometricHardware = await LocalAuthentication.hasHardwareAsync();
    const biometricEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (hasBiometricHardware && biometricEnrolled) {
      console.debug("biometric enroled for transaction authentication");
      // Check if user enabled biometrics
      if (
        userPreferences &&
        userPreferences?.confirmTransactionsWithFaceIDSwitch
      ) {
        console.log("face id preference is enabled");
        const authenticated = await LocalAuthentication.authenticateAsync();
        if (authenticated.success) {
          // biometrics authenticated
          // get cached user pin
          const cachedPin = await getItemSecure(STORAGE_KEY_TRANSACTION_PIN);
          if (cachedPin) sendMoneyToAzaUser(cachedPin);
          else navigation.push("TransactionPin", { type: "transaction" });
        }
      } else {
        console.log("face id preference is disabled");
        navigation.push("TransactionPin", { type: "transaction" });
      }
    } else {
      console.debug("biometric not enroled for transaction authentication!");
      // authenticate with pin
      navigation.push("TransactionPin", { type: "transaction" });
    }
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
