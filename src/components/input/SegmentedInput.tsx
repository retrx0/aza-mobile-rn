import React from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { OTPInput, Text, View } from "../Themed";
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
      <OTPInput
        keyboardType='number-pad'
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
    paddingHorizontal: hp(20),
    height: hp(40),
    marginBottom: hp(50),
  },
  otpText: {
    marginBottom: 10,
    fontWeight: "500",
    fontSize: hp(16),
  },
  otp: {
    marginLeft: hp(90),
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20.29,
  },
  underlineStyleBase: {
    width: wp(40),
    height: hp(40),
    fontSize: hp(18),
    borderRadius: hp(5),
  },
  underlineStyleHighLighted: {
    borderColor: Colors.general.grey,
  },
});

export default SegmentedInput;
