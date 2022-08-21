import React from "react";
import { SigninStyles as styles } from "./styles";
import Button from "../../../components/buttons/Button";
import SegmentedInput from "../../../components/input/SegmentedInput";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../common/util/LayoutUtil";
import { SignInScreenProps } from "../../../../types";
import { View, Text } from "../../../components/Themed";

type WelcomeOTProp = {
  otpCode: string;
  onOtpChanged: () => void;
  onVerify: () => void;
};

const SignInWelcomeBackScreen = ({
  otpCode,
  onOtpChanged,
  onVerify,
}: WelcomeOTProp & SignInScreenProps<"SignInWelcomeBack">) => {
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <Text style={styles.welcome}>Welcome back, $firstname</Text>
      <Text style={styles.sentCode}>Enter your Aza password to login</Text>
      <SegmentedInput value={otpCode} onValueChanged={onOtpChanged} headerText="Password" secureInput={true} />
      <View style={[CommonStyles.container, { bottom: insets.bottom || hp(15) }]}>
        <Button title="Forget Me" style={{}} styleText={styles.welcomeOTPButton} onPressButton={onVerify} />
      </View>
    </SpacerWrapper>
  );
};

export default SignInWelcomeBackScreen;
