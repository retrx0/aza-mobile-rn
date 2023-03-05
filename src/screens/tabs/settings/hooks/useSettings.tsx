import { useState } from "react";
import { requestOtpApi, verifyOtpApi } from "../../../../api/auth";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { toastError, toastInfo } from "../../../../common/util/ToastUtil";

const useSettings = ({
  navigation,
  route,
}: CommonScreenProps<
  "ChangeEmail" | "ChangePhoneNumber" | "ChangeUserDataOTP"
>) => {
  const [loading, setLoading] = useState(false);

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

  return {
    changeEmailAddress,
    verifyDataChangeOTP,
    changePhoneNumber,
    loading,
  };
};

export default useSettings;
