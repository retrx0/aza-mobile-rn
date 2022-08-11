import React from "react";
import { Text, View } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { WelcomeStyles as styles } from "./styles";
import Button from "../../../common/Button";

type OtpProp = {
  onWrongNumber: () => void;
  otpCode: string;
  onOtpChanged: () => void;
  onVerify: () => void;
  onResend: () => void;
  phoneNumber: string;
};

const Welcome = (props: OtpProp) => {
  const { otpCode, onOtpChanged, onResend } = props;
  return (
    <>
      <Text style={styles.welcome}>Welcome back, Chiazo</Text>
      <Text style={styles.sentCode}>Enter your Aza password to login</Text>
      <View style={styles.otpContainer}>
        <Text style={styles.passwordText}>Password</Text>
        <OTPInputView
          placeholderTextColor='black'
          keyboardType='number-pad'
          pinCount={6}
          code={otpCode} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={onOtpChanged}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          //   codeInputHighlightStyle={styles.underlineStyleHighLighted}
          // onCodeFilled={code => {
          //   console.log(`Code is ${code}, you are good to go!`);
          // }}
        />
      </View>
      <Button
        title='Login'
        style={styles.button}
        styleText={styles.sendOTPButton}
      />
      <Text style={styles.noOtp} onPress={onResend}>
        Forget Me
      </Text>
    </>
  );
};

export default Welcome;
