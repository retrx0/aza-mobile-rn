import React from "react";
import { OTPInput } from "../../theme/Themed";
import { View as View, Text as Text } from "../../theme/Themed";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { hp, wp } from "../../common/util/LayoutUtil";
import TransactionKeypadScreen from "../../screens/keypad/TransactionKeypadScreen";
import VirtualKeyboard from "./VirtualKeyboard";
import CommonStyles from "../../common/styles/CommonStyles";

type SegmentedInputProps = {
  value: string;
  onValueChanged: (code: string) => void;
  secureInput: boolean;
  headerText: string;
  style?: StyleProp<ViewStyle>;
  headerstyle?: StyleProp<TextStyle>;
  autoFocusOnLoad?: boolean;
  withKeypad?: boolean;
  pinCount?: number;
  onCodeFilled?: (code: string) => void;
  isLoading?: boolean;
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
    withKeypad,
    pinCount,
    isLoading,
    onCodeFilled,
  } = props;
  return (
    <View style={[styles.otpContainer, style]}>
      <Text style={[styles.otpText, headerstyle]}>{headerText}</Text>
      {/* Transparent overlay to disable editing password input */}
      {withKeypad && (
        <View
          style={{
            position: "absolute",
            right: 0,
            left: 0,
            height: 80,
            zIndex: 100,
            backgroundColor: "transparent",
          }}
        ></View>
      )}
      <OTPInput
        keyboardType="number-pad"
        pinCount={pinCount ? pinCount : 6}
        code={value} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged={(code) => onValueChanged(code)}
        secureTextEntry={secureInput}
        autoFocusOnLoad={false}
        codeInputFieldStyle={styles.underlineStyleBase}
        // codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={onCodeFilled}
        style={{ marginBottom: hp(20), marginTop: hp(10) }}
      />
      <View style={[{ position: "absolute", left: 0, right: 0, top: 180 }]}>
        {withKeypad && (
          <VirtualKeyboard
            value={value}
            setValue={onValueChanged}
            maxLength={pinCount ? pinCount : 6}
            allowZeroAsFirstCharacter
            isLoading={isLoading}
          />
        )}
      </View>
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
