import React from "react";
import { OTPInput, Text, View } from "../../components/Themed";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { hp, wp } from "../../common/util/LayoutUtil";

type SegmentedInputProps = {
  value: string;
  onValueChanged: (code: string) => void;
  secureInput: boolean;
  headerText: string;
  style?: StyleProp<ViewStyle>;
};

const SegmentedInput = (props: SegmentedInputProps) => {
  const { value, onValueChanged, secureInput, headerText, style } = props;
  return (
    <View style={[styles.otpContainer, style]}>
      <Text style={styles.otpText}>{headerText}</Text>
      <OTPInput
        keyboardType="phone-pad"
        pinCount={6}
        code={value} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged={(code) => onValueChanged(code)}
        secureTextEntry={secureInput}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        // codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    marginTop: hp(20),
    paddingHorizontal: hp(20),
    height: hp(40),
    marginBottom: hp(100),
  },
  otpText: {
    marginBottom: 10,
    fontWeight: "500",
    fontSize: hp(18),
    fontFamily: "Euclid-Circular-A-Bold",
    lineHeight: hp(20),
  },
  otp: {
    marginLeft: hp(90),
    fontSize: hp(18),
    fontWeight: "600",
    lineHeight: 20.29,
  },
  underlineStyleBase: {
    width: wp(40),
    height: hp(40),
    fontSize: hp(20),
    borderRadius: hp(5),
    marginVertical: 50,
  },
});

export default SegmentedInput;
