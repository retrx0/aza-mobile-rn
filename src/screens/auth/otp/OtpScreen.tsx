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
import Colors from "../../../constants/Colors";
import { hp } from "../../../common/util/LayoutUtil";
import useColorScheme from "../../../hooks/useColorScheme";

type OtpProp = {
  onWrongNumber: () => void;
  otpCode: string;
  onOtpChanged: (code: string) => void;
  onVerify: () => void;
  onResend: () => void;
  phoneNumber: string;
  onBackButtonPressed: () => void;
};

const OtpScreen = (props: OtpProp) => {
  const { otpCode, onOtpChanged, onVerify } = props;
  const colorScheme = useColorScheme();

  return (
    <SpacerWrapper>
      <View style={styles.Container}>
        <BackButton onPress={() => props.onBackButtonPressed()} />
        <Text style={styles.otp}>OTP</Text>
      </View>
      <Text style={styles.verification}>
        Please enter the 6-digit code sent to your mobile number
      </Text>
      <View
        style={{
          marginTop: hp(20),
          paddingHorizontal: hp(20),
          marginBottom: hp(100),
        }}
      >
        <SegmentedInput
          value={otpCode}
          onValueChanged={(code) => onOtpChanged(code)}
          headerText="OTP"
          secureInput={false}
        />
      </View>
      <View style={[styles.noOtp, CommonStyles.row]}>
        <Text style={styles.otpText}>Didn't get the code? </Text>
        <TouchableOpacity>
          <CancelButtonWithUnderline
            title="Resend code"
            styleText={CommonStyles.resend}
            color={Colors[colorScheme].text}
          />
        </TouchableOpacity>
      </View>
      <Button
        title="Continue"
        onPressButton={onVerify}
        styleText={{
          color: Colors[colorScheme].buttonText,
        }}
        style={[
          {
            backgroundColor: Colors[colorScheme].button,
            marginBottom: hp(10),
          },
          CommonStyles.otpbutton,
        ]}
        disabled={otpCode.length < 6 ? true : false}
      />
    </SpacerWrapper>
  );
};

export default OtpScreen;
