import React, { useState } from "react";
import { SignUpScreenProps } from "../../../../types";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import OtpScreen from "../otp/OtpScreen";

const SignUpOTPScreen = ({ navigation }: SignUpScreenProps<"SignUpOTP">) => {
  const [signUpOtp, setSignUpOtp] = useState("");
  return (
    <SpacerWrapper>
      <OtpScreen
        onBackButtonPressed={() => navigation.goBack()}
        onWrongNumber={function (): void {
          "wrong number";
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
