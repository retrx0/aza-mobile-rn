import { STORAGE_KEY_TRANSACTION_PIN } from "@env";
import { useState } from "react";
import { requestOtpApi, verifyOtpApi } from "../../../../api/auth";
import { setUserTransactionPinAPI, updatePinAPI } from "../../../../api/user";
import {
  CommonScreenProps,
  TransactionScreenPinType,
} from "../../../../common/navigation/types";
import { storeItemSecure } from "../../../../common/util/StorageUtil";
import {
  toastError,
  toastInfo,
  toastSuccess,
} from "../../../../common/util/ToastUtil";
import useTransactionService from "../../../transfer-modal/hooks/useTransactionService";

const useSettings = ({
  navigation,
  route,
}: CommonScreenProps<
  "ChangeEmail" | "ChangePhoneNumber" | "ChangeUserDataOTP" | "TransactionPin"
>) => {
  const [loading, setLoading] = useState(false);
  const [transactionPin, setTransactionPin] = useState("");

  const { sendMoneyToAzaUser } = useTransactionService(
    { navigation: navigation, route: route },
    {
      confirmationType: "send",
    }
  );

  const changeEmailAddress = (newEmail: string, emailValidated: boolean) => {
    setLoading(true);
    requestOtpApi({
      email: newEmail,
      phoneNumber: "",
    })
      .then((r) => {
        if (r) {
          navigation.navigate("ChangeUserDataOTP", {
            type: "email",
            value: newEmail,
          });
        }
        setLoading(false);
      })
      .catch(() => {
        toastError("Could not request OTP! try again");
        setLoading(false);
      });
    // dispatch(setReduxStoreEmail(email));
  };

  const changePhoneNumber = (newPhone: string, phoneValidated: boolean) => {
    setLoading(true);
    requestOtpApi({
      email: "",
      phoneNumber: newPhone,
    })
      .then((r) => {
        if (r) {
          navigation.navigate("ChangeUserDataOTP", {
            type: "phone",
            value: newPhone,
          });
        }
        setLoading(false);
      })
      .catch(() => {
        toastError("Could not request OTP! try again");
        setLoading(false);
      });
    // dispatch(setReduxStoreEmail(email));
  };

  const verifyDataChangeOTP = (
    otp: string,
    type: "email" | "phone",
    email: string,
    phoneNumber: string
  ) => {
    setLoading(true);
    verifyOtpApi({ otp: otp, email: email, phoneNumber: phoneNumber }, type)
      .then((token) => {
        if (token) {
          // make data change api call here

          toastInfo(`${type} changed successfully`);
          navigation.getParent()?.goBack();
        } else {
          toastError("Invalid OTP!");
        }
        setLoading(false);
      })
      .catch((e) => {
        toastError("OTP verification failed!");
        setLoading(false);
      });
  };

  const handlePinChange = (
    pinScreenType: TransactionScreenPinType,
    transactionPin: string,
    newTransactionPin?: string
  ) => {
    const confirmPin = () => {
      setTransactionPin("");
      // check previous screen type
      navigation.push("TransactionPin", { type: "confirm" });
    };

    const setPin = () => {
      setLoading(true);
      setUserTransactionPinAPI(transactionPin)
        .then((res) => {
          setLoading(false);
          toastSuccess("Transaction pin set successfully");
          // save pin to keychain for face id
          storeItemSecure(STORAGE_KEY_TRANSACTION_PIN, transactionPin);
          navigation.goBack();
        })
        .catch((e) => {
          console.debug(e);
          toastError("Couldn't set transaction pin!");
          setLoading(false);
        });
    };

    const resetPin = () => {};

    const updatePin = () => {
      setLoading(true);
      if (newTransactionPin)
        updatePinAPI(transactionPin, newTransactionPin)
          .then((res) => {
            setLoading(false);
            toastSuccess("Your pin has been updated!");
            storeItemSecure(STORAGE_KEY_TRANSACTION_PIN, newTransactionPin);
            navigation.goBack();
          })
          .catch(() => {
            toastError("Couldn't update your pin!");
            setLoading(false);
          });
    };

    const handleTransactionPin = () => {
      navigation.goBack();
      setLoading(true);
      sendMoneyToAzaUser(transactionPin);
    };

    switch (pinScreenType) {
      case "set":
        setPin();
        break;
      case "update":
        updatePin();
        break;
      case "reset":
        resetPin();
        break;
      case "confirm":
        confirmPin();
        break;
      case "transaction":
        handleTransactionPin();
        break;
      default:
        break;
    }
  };

  return {
    changeEmailAddress,
    verifyDataChangeOTP,
    changePhoneNumber,
    handlePinChange,
    transactionPin,
    setTransactionPin,
    loading,
  };
};

export default useSettings;
