import React, { useState } from "react";
import { SignUpScreenProps } from "../../../../types";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import OtpScreen from "../otp/OtpScreen";

const SignUpOTPScreen = ({ navigation }: SignUpScreenProps<"SignUpOTP">) => {
  const [signUpOtp, setSignUpOtp] = useState("123456");
  return (
    <SpacerWrapper>
      <OtpScreen
        onBackButtonPressed={() => navigation.goBack()}
        onWrongNumber={function (): void {
          "wrong number";
        }}
        otpCode={signUpOtp}
        onOtpChanged={(code) => setSignUpOtp(code)}
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
