import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import WelcomeBackScreen from "../Password/welcomeBack/WelcomeBackScreen";
import { LogInStackProps } from "./SignInNavigator";

const WelcomeScreen = ({ navigation }: NativeStackScreenProps<LogInStackProps>) => {
  const [WelcomeOtp, setWelcomeUpOtp] = useState("");
  return (
    <SpacerWrapper>
      <WelcomeBackScreen
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
