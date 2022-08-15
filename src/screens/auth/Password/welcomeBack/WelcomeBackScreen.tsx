import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../../../../components/buttons/Button";
import SegmentedInput from "../../../../components/input/SegmentedInput";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../../common/util/utils";

type WelcomeOTProp = {
  otpCode: string;
  onOtpChanged: () => void;
  onVerify: () => void;
};

const WelcomeBackScreen = (props: WelcomeOTProp) => {
  const { otpCode, onOtpChanged, onVerify } = props;
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <Text style={[CommonStyles.welcome]}>Welcome back,Chiazo</Text>
      <Text style={[CommonStyles.sentCode]}>
        Enter your Aza password to login
      </Text>
      <SegmentedInput
        value={otpCode}
        onValueChanged={onOtpChanged}
        headerText='Password'
        secureInput={false}
      />
      <View
        style={[CommonStyles.container, { bottom: insets.bottom || hp(15) }]}>
        <Button
          title='Login'
          style={{}}
          styleText={[CommonStyles.welcomeOTPButton]}
          onPressButton={onVerify}
        />
        <TouchableOpacity>
          <Text style={[CommonStyles.forgetOTP]}>Forget Me</Text>
        </TouchableOpacity>
      </View>
    </SpacerWrapper>
  );
};

export default WelcomeBackScreen;
