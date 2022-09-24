import React, { useState } from "react";
import { SignUpScreenProps } from "../../../../types";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { useAppDispatch } from "../../../hooks/redux";
import { setIsVerified } from "../../../redux/slice/newUserSlice";
import OtpScreen from "../otp/OtpScreen";

const SignUpOTPScreen = ({ navigation }: SignUpScreenProps<"SignUpOTP">) => {
  const [signUpOtp, setSignUpOtp] = useState("");

  const dispatch = useAppDispatch();

  return (
    <SpacerWrapper>
      <OtpScreen
        onBackButtonPressed={() => navigation.goBack()}
        onWrongNumber={function (): void {
          "wrong number";
        }}
        otpCode={signUpOtp}
        onOtpChanged={(code) => setSignUpOtp(code)}
        onVerify={() => {
          dispatch(setIsVerified(true));
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
