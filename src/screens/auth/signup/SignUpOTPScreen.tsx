import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import OtpScreen from "../Password/otp/OtpScreen";
import { SignUpStackProps } from "./SignUpNavigator";

const SignUpOTPScreen = ({
  navigation,
}: NativeStackScreenProps<SignUpStackProps>) => {
  const [signUpOtp, setSignUpOtp] = useState("123456");
  return (
    <SpacerWrapper>
      <OtpScreen
        onBackButtonPressed={() => navigation.goBack()}
        onWrongNumber={function (): void {}}
        otpCode={signUpOtp}
        onOtpChanged={() => setSignUpOtp}
        onVerify={function (): void {
          navigation.navigate("SignUpProfileSetup");
        }}
        onResend={() => {
          console.log("otp resend");
        }}
        phoneNumber={""}></OtpScreen>
    </SpacerWrapper>
  );
};

export default SignUpOTPScreen;
