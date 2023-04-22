import React, { useState } from "react";
import { SignUpScreenProps } from "../../../types/types.navigation";
import { requestOtpApi, verifyOtpApi } from "../../../api/auth";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { useAppDispatch, useAppSelector } from "../../../redux";
import { selectNewUser } from "../../../redux/slice/newUserSlice";
import OtpScreen from "../otp/OtpScreen";
import * as SecureStore from "expo-secure-store";
import {
  STORAGE_KEY_EMAIL_OTP_ACCESS_TOKEN,
  STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN,
} from "@env";
import { toastError, toastInfo } from "../../../common/util/ToastUtil";

const SignUpOTPScreen = ({
  navigation,
  route,
}: SignUpScreenProps<"SignUpOTP">) => {
  const [signUpOtp, setSignUpOtp] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);

  const dispatch = useAppDispatch();
  const { phoneNumber, emailAddress } = useAppSelector(selectNewUser);

  const otpScrenType = route.params.otpScreenType;

  const otpTitle =
    otpScrenType === "email"
      ? emailAddress
        ? `Please enter the 6-digit code sent to **${emailAddress?.substring(
            emailAddress.indexOf("@") - 2,
            emailAddress.length
          )}`
        : "Please enter the 6-digit code sent to your email"
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
          setButtonLoading(true);
          verifyOtpApi(
            {
              email: otpScrenType === "email" ? emailAddress! : "",
              phoneNumber: otpScrenType === "phone" ? phoneNumber! : "",
              otp: signUpOtp,
            },
            "email"
          )
            .then((token) => {
              if (token) {
                SecureStore.setItemAsync(
                  otpScrenType === "email"
                    ? STORAGE_KEY_EMAIL_OTP_ACCESS_TOKEN
                    : STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN,
                  token
                );
                if (otpScrenType === "email") {
                  navigation.navigate("SignUpPhoneNumber");
                } else if (otpScrenType === "phone") {
                  navigation.navigate("SignUpProfileSetup");
                } else {
                  // navigation.navigate("")
                }
                setButtonLoading(false);
              } else {
                toastError("Invalid OTP ⚠️");
                setButtonLoading(false);
              }
            })
            .catch(() => {
              setButtonLoading(false);
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
        buttonLoading={buttonLoading}
      />
    </SpacerWrapper>
  );
};

export default SignUpOTPScreen;
