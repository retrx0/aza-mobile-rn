/* eslint-disable no-console */
import React, { useState } from "react";
import { SignInScreenProps } from "../../../../types";
import { requestOtpApi, verifyOtpApi } from "../../../api/auth";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { useAppSelector, useAppDispatch } from "../../../redux";
import { selectUser } from "../../../redux/slice/userSlice";
import OtpScreen from "../otp/OtpScreen";
import Toast from "react-native-toast-message";
import { STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN } from "@env";
import { toastInfo } from "../../../common/util/ToastUtil";

const LoginOTPScreen = ({ navigation }: SignInScreenProps<"SignInOTP">) => {
  const [loginOtp, setLoginUpOtp] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);

  return (
    <SpacerWrapper>
      <OtpScreen
        onBackButtonPressed={() => navigation.goBack()}
        onWrongNumber={() => {
          console.log("wrong otp");
        }}
        otpCode={loginOtp}
        onOtpChanged={(code) => setLoginUpOtp(code)}
        onVerify={() => {
          setButtonLoading(true);
          verifyOtpApi(
            {
              email: user.emailAddress,
              phoneNumber: user.phoneNumber,
              otp: loginOtp,
            },
            "phone"
          )
            .then((token) => {
              if (token) {
                // SecureStore.setItemAsync(
                //   String(STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN),
                //   token
                // );
                navigation.getParent()?.navigate("SignInWelcomeBack");
              } else {
                Toast.show({ type: "error", text1: "Invalid OTP" });
              }
              setButtonLoading(false);
            })
            .catch((e) => {
              console.error("Error verifying otp" + e);
              setButtonLoading(false);
            });
        }}
        onResend={() => {
          if (user.phoneNumber) {
            requestOtpApi({
              email: "",
              phoneNumber: user.phoneNumber,
            });
            toastInfo("OTP resent!");
          }
        }}
        phoneNumber={""}
        otpTitle={`Please enter the 6-digit code sent to ***${user.phoneNumber?.substring(
          user.phoneNumber.length - 2,
          user.phoneNumber.length
        )}`}
        buttonLoading={buttonLoading}
      />
    </SpacerWrapper>
  );
};

export default LoginOTPScreen;
