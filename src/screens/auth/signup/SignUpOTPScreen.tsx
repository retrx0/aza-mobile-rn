import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SignUpScreenProps } from "../../../../types";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { useAppDispatch } from "../../../hooks/redux";
import { setIsVerified, verifyOtp } from "../../../redux/slice/newUserSlice";
import OtpScreen from "../otp/OtpScreen";

const SignUpOTPScreen = ({ navigation }: SignUpScreenProps<"SignUpOTP">) => {
  const [signUpOtp, setSignUpOtp] = useState("");

  const dispatch = useAppDispatch();
  const {phone}=useSelector(state=>state.newUser)
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
          dispatch(verifyOtp({
            phone:'',
            email:'mubarakibrahim2015@gmail.com',
            otp:Number(signUpOtp)
          }));
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
