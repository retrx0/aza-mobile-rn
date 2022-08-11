import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import OtpScreen from "../Password/otp/OtpScreen";
import { LogInStackProps } from "./SignInNavigator";

const LoginOTPScreen = ({
  navigation,
}: NativeStackScreenProps<LogInStackProps>) => {
  const [LoginOtp, setLoginUpOtp] = useState("");
  return (
    <SpacerWrapper>
      <OtpScreen
        onBackButtonPressed={() => navigation.goBack()}
        onWrongNumber={function (): void {
          throw new Error("Function not implemented.");
        }}
        otpCode={LoginOtp}
        onOtpChanged={() => setLoginUpOtp}
        onVerify={function (): void {
          navigation.navigate("Welcome");
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
