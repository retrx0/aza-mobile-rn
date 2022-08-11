import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import ButtonLg from "../../../components/buttons/ButtonLg";
import { Text, View } from "../../../components/Themed";
import OtpScreen from "../Password/otp/OtpScreen";
import { SignUpStackProps } from "./SignUpNavigator";

const SignUpOTPScreen = ({
  navigation,
}: NativeStackScreenProps<SignUpStackProps>) => {
  const [signUpOtp, setSignUpOtp] = useState("");
  return (
    <SpacerWrapper>
      <OtpScreen
        onBackButtonPressed={() => navigation.goBack()}
        onWrongNumber={function (): void {
          throw new Error("Function not implemented.");
        }}
        otpCode={signUpOtp}
        onOtpChanged={() => setSignUpOtp}
        onVerify={function (): void {
          navigation.navigate("SignUpProfileSetup");
        }}
        onResend={() => {
          console.log("otp resend");
        }}
        phoneNumber={""}
      />
    </SpacerWrapper>
  );
};

export default SignUpOTPScreen;
