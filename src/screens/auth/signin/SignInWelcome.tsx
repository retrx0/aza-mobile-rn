import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import SignInPasswordScreen from "./SignInPasswordScreen";
import { LogInStackProps } from "./SignInNavigator";

const WelcomeScreen = ({ navigation }: NativeStackScreenProps<LogInStackProps>) => {
  const [WelcomeOtp, setWelcomeUpOtp] = useState("");
  return (
    <SpacerWrapper>
      <SignInPasswordScreen
        otpCode={WelcomeOtp}
        onOtpChanged={() => setWelcomeUpOtp}
        onVerify={function (): void {
          navigation.getParent()?.navigate("Root");
        }}
      />
    </SpacerWrapper>
  );
};

export default WelcomeScreen;
