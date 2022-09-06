import React from "react";
import { TouchableOpacity } from "react-native";
import { SigninStyles as styles } from "../signin/styles";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import CommonStyles from "../../../common/styles/CommonStyles";
import BackButton from "../../../components/buttons/BackButton";
import SegmentedInput from "../../../components/input/SegmentedInput";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";

type OtpProp = {
  onWrongNumber: () => void;
  otpCode: string;
  onOtpChanged: () => void;
  onVerify: () => void;
  onResend: () => void;
  phoneNumber: string;
  onBackButtonPressed: () => void;
};

const OtpScreen = (props: OtpProp, { navigation }: { navigation: any }) => {
  const { otpCode, onOtpChanged, onVerify } = props;
  return (
    <SpacerWrapper>
      <View style={styles.Container}>
        <BackButton onPress={() => props.onBackButtonPressed()} />
        <Text style={styles.otp}>OTP</Text>
      </View>
      <Text style={styles.verification}>Please enter the 6-digit code sent to your mobile number</Text>
      <SegmentedInput value={otpCode} onValueChanged={onOtpChanged} headerText="OTP" secureInput={false} />
      <View style={[styles.noOtp, CommonStyles.row]}>
        <Text style={styles.otpText}>Didn't get the code? </Text>
        <TouchableOpacity>
          <CancelButtonWithUnderline
            title="Resend code"
            style={CommonStyles.resendBox}
            styleText={CommonStyles.resend}
          />
        </TouchableOpacity>
      </View>
      <Button title="Continue" onPressButton={onVerify} style={styles.otpbutton} />
    </SpacerWrapper>
  );
};

export default OtpScreen;
