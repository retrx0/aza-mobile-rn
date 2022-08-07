import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { OtpStyles as styles } from "./styles";
import Button from "../../common/Button";
import { BackIcon } from "../../../assets/svg";

type OtpProp = {
  onWrongNumber: () => void;
  otpCode: string;
  onOtpChanged: () => void;
  onVerify: () => void;
  onResend: () => void;
  phoneNumber: string;
};

const Otp = (props: OtpProp) => {
  const { otpCode, onOtpChanged } = props;
  return (
    <>
      <View style={styles.Container}>
        <View style={styles.backContainer}>
          <BackIcon />
          <Text style={styles.back}>Back</Text>
        </View>
        <Text style={styles.otp}>OTP</Text>
      </View>
      <Text style={styles.verification}>
        Please enter the 6-digit code sent to your mobile number
      </Text>
      <View style={styles.otpContainer}>
        <Text style={styles.otpText}>0TP</Text>
        <OTPInputView
          placeholderTextColor='black'
          keyboardType='number-pad'
          pinCount={6}
          code={otpCode} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={onOtpChanged}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          // onCodeFilled={code => {
          //   console.log(`Code is ${code}, you are good to go!`);
          // }}
        />
      </View>
      <Text style={styles.noOtp}>
        Didn't get the code? <Text style={styles.resend}>Resend</Text>
      </Text>
      <Button
        title='Continue'
        style={styles.button}
        styleText={styles.sendOTPButton}
      />
    </>
  );
};

export default Otp;
