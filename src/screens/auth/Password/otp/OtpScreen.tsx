import React from "react";
import { TouchableOpacity } from "react-native";
import Button from "../../../../components/buttons/Button";
import { Text, View } from "../../../../components/Themed";
import CommonStyles from "../../../../common/styles/CommonStyles";
import BackButton from "../../../../components/buttons/BackButton";
import SegmentedInput from "../../../../components/input/SegmentedInput";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";

type OtpProp = {
  onWrongNumber: () => void;
  otpCode: string;
  onOtpChanged: () => void;
  onVerify: () => void;
  onResend: () => void;
  phoneNumber: string;
  onBackButtonPressed: () => void;
};

const OtpScreen = (props: OtpProp) => {
  const { otpCode, onOtpChanged, onVerify } = props;
  return (
    <SpacerWrapper>
      <View style={[CommonStyles.otpcontainer]}>
        <BackButton onPress={() => props.onBackButtonPressed()} />
        <Text style={[CommonStyles.otp]}>OTP</Text>
      </View>
      <Text style={[CommonStyles.verification]}>
        Please enter the 6-digit code sent to your mobile number
      </Text>
      <SegmentedInput
        value={otpCode}
        onValueChanged={onOtpChanged}
        headerText='OTP'
        secureInput={false}
      />
      <View style={[CommonStyles.row, CommonStyles.noOtp]}>
        <Text style={[CommonStyles.otpText]}>Didn't get the code? </Text>
        <TouchableOpacity>
          <Text
            style={[CommonStyles.resend, { textDecorationLine: "underline" }]}>
            Resend
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        title='Continue'
        style={[CommonStyles.otpbutton]}
        styleText={[CommonStyles.OTPButton]}
        onPressButton={onVerify}
      />
    </SpacerWrapper>
  );
};

export default OtpScreen;
