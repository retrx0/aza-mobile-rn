import React, { useEffect } from "react";
import { OTPInput } from "../../theme/Themed";
import { View as View, Text as Text } from "../../theme/Themed";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { hp, wp } from "../../common/util/LayoutUtil";
import TransactionKeypadScreen from "../../screens/keypad/TransactionKeypadScreen";
import VirtualKeyboard from "./VirtualKeyboard";
import CommonStyles from "../../common/styles/CommonStyles";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
  cond,
  block,
  cancelAnimation,
} from "react-native-reanimated";
import Colors from "../../constants/Colors";

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
  forgetPasswordOption?: boolean;
  onForgotPassword?: () => void;
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
    forgetPasswordOption,
    onForgotPassword,
  } = props;

  const opacity = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    if (isLoading) {
      opacity.value = withRepeat(
        withSequence(
          withTiming(0.2, { duration: 500, easing: Easing.linear }),
          withTiming(1, { duration: 400 }),
          withTiming(0.2, { duration: 500, easing: Easing.linear }),
          withTiming(1, { duration: 400 }),
          withTiming(0.2, { duration: 500, easing: Easing.linear }),
          withTiming(1, { duration: 400 }),
          withTiming(0.2, { duration: 500, easing: Easing.linear }),
          withTiming(1, { duration: 400 }),
          withTiming(0.2, { duration: 500, easing: Easing.linear }),
          withTiming(1, { duration: 400 })
        ),
        10,
        undefined
      );
    } else {
      cancelAnimation(opacity);
      opacity.value = 1;
    }
  }, [isLoading]);

  return (
    <View>
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
        <Animated.View style={[animatedStyles]}>
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
        </Animated.View>
      </View>
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
      {forgetPasswordOption && (
        <TouchableOpacity
          style={{
            margin: 0,
            paddingHorizontal: 10,
            paddingVertical: 5,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -480,
          }}
          onPress={onForgotPassword}
        >
          <Text
            style={{
              color: Colors.general.blueHighlight,
              textAlign: "center",
              fontSize: 15,
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
      )}
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
