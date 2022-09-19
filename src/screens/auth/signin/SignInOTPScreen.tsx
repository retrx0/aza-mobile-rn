/* eslint-disable no-console */
import React, { useState } from "react";
import { SignInScreenProps } from "../../../../types";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { logIn, selectAuthIsLoggedIn } from "../../../redux/slice/authSlice";
import OtpScreen from "../otp/OtpScreen";

const LoginOTPScreen = ({ navigation }: SignInScreenProps<"SignInOTP">) => {
  const [LoginOtp, setLoginUpOtp] = useState("");

  const isLoggedIn = useAppSelector(selectAuthIsLoggedIn);
  const dispatch = useAppDispatch();

  return (
    <SpacerWrapper>
      <OtpScreen
        onBackButtonPressed={() => navigation.goBack()}
        onWrongNumber={() => {
          console.log("wrong otp");
        }}
        otpCode={LoginOtp}
        onOtpChanged={(code) => setLoginUpOtp(code)}
        onVerify={() => {
          dispatch(logIn());
          console.log(isLoggedIn);
          navigation.getParent()?.navigate("Root");
        }}
        onResend={() => {
          console.log("otp resend");
        }}
        phoneNumber={""}
      />
    </SpacerWrapper>
  );
};

export default LoginOTPScreen;
