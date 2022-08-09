import React from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { Text, View } from "../Themed";
import { StyleSheet } from "react-native";
import { hp, wp } from "../../common/util/utils";
import Colors from "../../constants/Colors";

type SegmentedInputProps = {
  value: string;
  onValueChanged: () => void;
  secureInput: boolean;
  headerText: string;
};

const SegmentedInput = (props: SegmentedInputProps) => {
  const { value, onValueChanged, secureInput, headerText } = props;
  return (
    <View style={styles.otpContainer}>
      <Text style={styles.otpText}>{headerText}</Text>
      <OTPInputView
        keyboardType="number-pad"
        pinCount={6}
        code={value} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged={onValueChanged}
        secureTextEntry={secureInput}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
    </View>
  );
};

const darkGrey = Colors.general.darkGrey;

const styles = StyleSheet.create({
  otpContainer: {
    marginTop: hp(20),
    paddingHorizontal: hp(30),
    height: hp(40),
    marginBottom: hp(61),
  },
  noOtp: {
    alignSelf: "center",
    marginTop: hp(61),
    color: darkGrey,
    fontSize: hp(14),
  },
  otpText: {
    marginBottom: 10,
    fontWeight: "500",
    fontSize: hp(16),
    color: darkGrey,
  },
  otp: {
    marginLeft: hp(90),
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20.29,
    color: darkGrey,
  },
  underlineStyleBase: {
    width: wp(40),
    height: hp(40),
    color: "black",
    fontSize: hp(18),
    borderRadius: hp(8),
    borderColor: Colors.general.primary,
  },
  underlineStyleHighLighted: {
    borderColor: "blue",
  },
});

export default SegmentedInput;
