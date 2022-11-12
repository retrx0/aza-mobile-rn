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
import { STORAGE_KEY_EMAIL_OTP_ACCESS_TOKEN } from "@env";
import { Alert } from "react-native";
import Toast from "react-native-toast-message";

const SignUpOTPScreen = ({
  navigation,
  route,
}: SignUpScreenProps<"SignUpOTP">) => {
  const [signUpOtp, setSignUpOtp] = useState("");

  const dispatch = useAppDispatch();
  const { phone, email } = useAppSelector(selectNewUser);

  const otpScrenType = route.params.otpScreenType;

  const otpTitle =
    otpScrenType === "email"
      ? `Please enter the 6-digit code sent to **${email?.substring(
          email.indexOf("@") - 2,
          email.length
        )}`
      : `Please enter the 6-digit code sent to **${phone?.substring(
          phone.length - 4,
          phone.length
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
          // dispatch(
          //   verifyOtp({
          //     phone: "",
          //     email: "mubarakibrahim2015@gmail.com",
          //     otp: Number(signUpOtp),
          //   })
          // );

          verifyOtpApi(
            { email: email!, phoneNumber: "", otp: Number(signUpOtp) },
            "email"
          ).then((token) => {
            if (token) {
              console.log(STORAGE_KEY_EMAIL_OTP_ACCESS_TOKEN);
              SecureStore.setItemAsync(
                STORAGE_KEY_EMAIL_OTP_ACCESS_TOKEN,
                token
              );
              if (otpScrenType == "email") {
                navigation.navigate("SignUpPhoneNumber");
              } else {
                navigation.navigate("SignUpProfileSetup");
              }
            } else {
              Toast.show({
                autoHide: true,
                type: "error",
                text1: "Otp Invalid",
              });
            }
          });
        }}
        onResend={() => {
          requestOtpApi({ email: email!, phoneNumber: "" });
        }}
        phoneNumber={""}
      />
    </SpacerWrapper>
  );
};

export default SignUpOTPScreen;
