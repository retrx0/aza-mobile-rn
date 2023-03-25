import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import { SigninStyles as styles } from "../signin/styles";

import Button from "../../../components/buttons/Button";
import { View as View, Text as Text } from "../../../theme/Themed";
import BackButton from "../../../components/buttons/BackButton";
import SegmentedInput from "../../../components/input/SegmentedInput";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";

import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import Colors from "../../../constants/Colors";
import { hp } from "../../../common/util/LayoutUtil";

import useColorScheme from "../../../hooks/useColorScheme";
import useCountdownTimer from "../../../hooks/useCountdownTimer";

type OtpProp = {
  onWrongNumber: () => void;
  otpCode: string;
  onOtpChanged: (code: string) => void;
  onVerify: () => void;
  onResend: () => void;
  phoneNumber: string;
  onBackButtonPressed: () => void;
  otpTitle: string;
  buttonLoading?: boolean;
};

const OtpScreen = (props: OtpProp) => {
  const { otpCode, onOtpChanged, onVerify, onResend } = props;
  const {
    minutesToDisplay,
    secondsToDisplay,
    resetTimer,
    toTwoDigits,
    timerStatus,
  } = useCountdownTimer(60);

  const resendCode = () => {
    onResend();
    resetTimer();
  };

  return (
    <SpacerWrapper>
      <View style={styles.Container}>
        <BackButton onPress={() => props.onBackButtonPressed()} />
        <Text style={styles.otp}>OTP</Text>
      </View>
      <Text style={styles.verification}>{props.otpTitle}</Text>
      <View
        style={{
          marginTop: hp(20),
          paddingHorizontal: hp(20),
          marginBottom: hp(111),
        }}>
        <SegmentedInput
          value={otpCode}
          onValueChanged={(code) => onOtpChanged(code)}
          headerText="OTP"
          secureInput={true}
        />
      </View>
      <View style={[styles.noOtp, CommonStyles.row]}>
        <Text style={styles.otpText}>Didn't get the code? </Text>
        {timerStatus === "Started" ? (
          <Text>
            {toTwoDigits(minutesToDisplay)}:{toTwoDigits(secondsToDisplay)}
          </Text>
        ) : (
          <TouchableOpacity>
            <CancelButtonWithUnderline
              title="Resend code"
              onPressButton={resendCode}
              styleText={CommonStyles.resend}
            />
          </TouchableOpacity>
        )}
      </View>
      <Button
        title="Continue"
        onPressButton={onVerify}
        style={[{ marginBottom: hp(10) }, CommonStyles.otpbutton]}
        disabled={otpCode.length < 6 ? true : false}
        buttonLoading={props.buttonLoading ? props.buttonLoading : false}
      />
    </SpacerWrapper>
  );
};

export default OtpScreen;
