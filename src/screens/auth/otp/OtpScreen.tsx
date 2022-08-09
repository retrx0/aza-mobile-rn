import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { OtpStyles as styles } from "./styles";
import Button from "../../../components/buttons/Button";
import { BackIcon } from "../../../../assets/svg";
import { Text, View } from "../../../components/Themed";
import CommonStyles from "../../../common/styles/CommonStyles";
import BackButton from "../../../components/buttons/BackButton";
import SegmentedInput from "../../../components/input/SegmentedInput";

type OtpProp = {
  onWrongNumber: () => void;
  otpCode: string;
  onOtpChanged: () => void;
  onVerify: () => void;
  onResend: () => void;
  phoneNumber: string;
};

const OtpScreen = (props: OtpProp) => {
  const { otpCode, onOtpChanged, onVerify } = props;
  return (
    <>
      <View style={styles.Container}>
        <BackButton />
        <Text style={styles.otp}>OTP</Text>
      </View>
      <Text style={styles.verification}>Please enter the 6-digit code sent to your mobile number</Text>
      <SegmentedInput value={otpCode} onValueChanged={onOtpChanged} headerText="OTP" secureInput={false} />
      <View style={[styles.noOtp, CommonStyles.row]}>
        <Text style={{}}>Didn't get the code? </Text>
        <TouchableOpacity>
          <Text style={[styles.resend, { textDecorationLine: "underline" }]}>Resend</Text>
        </TouchableOpacity>
      </View>
      <Button title="Continue" style={styles.button} styleText={styles.sendOTPButton} onPressButton={onVerify} />
    </>
  );
};

export default OtpScreen;
