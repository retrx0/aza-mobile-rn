import React, { useState } from "react";
import { SignInScreenProps } from "../../../../types";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import OtpScreen from "../otp/OtpScreen";

const LoginOTPScreen = ({ navigation }: SignInScreenProps<"SignInOTP">) => {
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
