import React, { FC } from "react";
import { Text, StyleProp, TextStyle, ViewStyle, Pressable } from "react-native";
import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import useColorScheme from "../../hooks/useColorScheme";

type ButtonPropsType = {
  title: string;
  onPressButton?: () => void;
  isNext?: boolean;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  disabled?: boolean;
};

export const Button: FC<ButtonPropsType> = ({
  title,
  onPressButton,
  isNext,
  style,
  styleText,
  disabled,
}) => {
  const colorScheme = useColorScheme();

  return (
    <Pressable
      disabled={disabled}
      onPress={onPressButton}
      style={[
        styles.doneButton,
        isNext && styles.nextButton,
        style,
        disabled && {
          backgroundColor: Colors[colorScheme].secondaryText,
        },
        {
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}>
      <Text style={[styles.doneText, isNext && styles.nextText, styleText]}>
        {title}
      </Text>
    </Pressable>
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
