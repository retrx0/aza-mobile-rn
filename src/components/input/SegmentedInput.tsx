import React from "react";
import { OTPInput, Text, View } from "../../components/Themed";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { hp, wp } from "../../common/util/LayoutUtil";

type SegmentedInputProps = {
  value: string;
  onValueChanged: (code: string) => void;
  secureInput: boolean;
  headerText: string;
  style?: StyleProp<ViewStyle>;
  headerstyle?: StyleProp<TextStyle>;
  autoFocusOnLoad?: boolean;
};

const SegmentedInput = (props: SegmentedInputProps) => {
  const {
    value,
    onValueChanged,
    secureInput,
    headerText,
    style,
    headerstyle,
    autoFocusOnLoad = true,
  } = props;
  return (
    <View style={[styles.otpContainer, style]}>
      <Text style={[styles.otpText, headerstyle]}>{headerText}</Text>
      <OTPInput
        keyboardType="number-pad"
        pinCount={6}
        code={value} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged={(code) => onValueChanged(code)}
        secureTextEntry={secureInput}
        autoFocusOnLoad={autoFocusOnLoad}
        codeInputFieldStyle={styles.underlineStyleBase}
        // codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={() => null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    height: hp(40),
    width: "100%",
  },
  otpText: {
    marginBottom: hp(10),
    fontWeight: "500",
    fontSize: hp(16),
    fontFamily: "Euclid-Circular-A-Medium",
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
