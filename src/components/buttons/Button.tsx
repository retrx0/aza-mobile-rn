import React, { FC } from "react";
import { TouchableOpacity, Text, StyleProp, TextStyle, ViewStyle } from "react-native";
import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";

type ButtonPropsType = {
  title: string;
  onPressButton?: () => void;
  isNext?: boolean;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  disabled?:boolean
};

export const Button: FC<ButtonPropsType> = ({ title, onPressButton, isNext, style, styleText,disabled }) => {
  return (
    <TouchableOpacity
     disabled={disabled}
      activeOpacity={0.8}
      onPress={onPressButton}
      style={[styles.doneButton, isNext && styles.nextButton, style]}
    >
      <Text style={[styles.doneText, isNext && styles.nextText, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  doneText: {
    color: Colors.general.secondary,
    fontWeight: "500",
    letterSpacing: hp(0.5),
    fontSize: hp(14),
    lineHeight: hp(18),
    fontFamily: "Euclid-Circular-A-Medium",
  },
  nextText: {
    color: Colors.general.secondary,
  },
  doneButton: {
    backgroundColor: Colors.general.black,
    width: "90%",
    height: hp(50),
    borderRadius: hp(10),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    // marginTop: 100,
  },
  nextButton: {
    backgroundColor: Colors.general.primary,
    width: "90%",
  },
};

export default Button;
