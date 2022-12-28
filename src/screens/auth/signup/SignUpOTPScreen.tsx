import React, { useState } from "react";
import { SignUpScreenProps } from "../../../../types";
import { requestOtpApi, verifyOtpApi } from "../../../api/auth";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { useAppDispatch, useAppSelector } from "../../../redux";
import {
  selectNewUser,
  setIsVerified,
  verifyOtp,
} from "../../../redux/slice/newUserSlice";
import OtpScreen from "../otp/OtpScreen";
import * as SecureStore from "expo-secure-store";
import {
  STORAGE_KEY_EMAIL_OTP_ACCESS_TOKEN,
  STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN,
} from "@env";
import { Alert } from "react-native";
import Toast from "react-native-toast-message";
import { toastError, toastInfo } from "../../../common/util/ToastUtil";

const SignUpOTPScreen = ({
  navigation,
  route,
}: SignUpScreenProps<"SignUpOTP">) => {
  const [signUpOtp, setSignUpOtp] = useState("");

  const dispatch = useAppDispatch();
  const { phoneNumber, emailAddress } = useAppSelector(selectNewUser);

  const otpScrenType = route.params.otpScreenType;

  const otpTitle =
    otpScrenType === "email"
      ? `Please enter the 6-digit code sent to **${emailAddress?.substring(
          emailAddress.indexOf("@") - 2,
          emailAddress.length
        )}`
      : `Please enter the 6-digit code sent to **${phoneNumber?.substring(
          phoneNumber.length - 2,
          phoneNumber.length
        )}`;
  return (
    <SpacerWrapper>
      <OtpScreen
        otpTitle={otpTitle}
        onBackButtonPressed={() => navigation.goBack()}
        onWrongNumber={() => {}}
        otpCode={signUpOtp}
        onOtpChanged={(code) => setSignUpOtp(code)}
        onVerify={() => {
          verifyOtpApi(
            {
              email: otpScrenType === "email" ? emailAddress! : "",
              phoneNumber: otpScrenType === "phone" ? phoneNumber! : "",
              otp: Number(signUpOtp),
            },
            "email"
          ).then((token) => {
            if (token) {
              SecureStore.setItemAsync(
                otpScrenType === "email"
                  ? STORAGE_KEY_EMAIL_OTP_ACCESS_TOKEN
                  : STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN,
                token
              );
              if (otpScrenType == "email") {
                navigation.navigate("SignUpPhoneNumber");
              } else {
                navigation.navigate("SignUpProfileSetup");
              }
            } else {
              toastError("Invalid OTP ⚠️");
            }
          });
        }}
        onResend={() => {
          requestOtpApi({
            email: otpScrenType === "email" ? emailAddress! : "",
            phoneNumber: otpScrenType === "phone" ? phoneNumber! : "",
          })
            .then(() => toastInfo("OTP resent!"))
            .catch((e) => toastInfo("Could not send otp!, please try again"));
        }}
        phoneNumber={""}
      />
    </SpacerWrapper>
  );
};

export default SignUpOTPScreen;
