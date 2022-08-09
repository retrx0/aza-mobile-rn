import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, View } from "../../../components/Themed";
import OtpScreen from "../otp/OtpScreen";
import { SignUpStackProps } from "./SignUpNavigator";

const SignUpOTPScreen = ({ navigation }: NativeStackScreenProps<SignUpStackProps>) => {
  const [signUpOtp, setSignUpOtp] = useState("");
  return (
    <View style={[{ flex: 1 }]}>
      <OtpScreen
        onWrongNumber={function (): void {
          throw new Error("Function not implemented.");
        }}
        otpCode={signUpOtp}
        onOtpChanged={function (): void {
          setSignUpOtp;
        }}
        onVerify={function (): void {
          navigation.navigate("SignUpProfileSetup");
        }}
        onResend={function (): void {}}
        phoneNumber={""}
      />
    </View>
  );
};

export default SignUpOTPScreen;
