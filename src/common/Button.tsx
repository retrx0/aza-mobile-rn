import React, { FC } from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

type ButtonPropsType = {
  title: string;
  onPressButton?: () => void;
  isNext?: boolean;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
};

export const Button: FC<ButtonPropsType> = ({
  title,
  onPressButton,
  isNext,
  style,
  styleText,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPressButton}
      style={[styles.doneButton, isNext && styles.nextButton, style]}>
      <Text style={[styles.doneText, isNext && styles.nextText, styleText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  doneText: {
    color: "white",
    fontWeight: "500",
    letterSpacing: 0.5,
    fontSize: 14,
    lineHeight: 17.75,
  },
  nextText: {
    color: "white",
  },
  doneButton: {
    backgroundColor: "black",
    width: 335,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    // marginTop: 100,
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: "black",
  },
};

export default Button;
