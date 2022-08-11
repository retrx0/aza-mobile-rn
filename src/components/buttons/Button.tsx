import React, { FC } from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Primary, secondary } from "../../common/colors";
import { hp, wp } from "../../common/util/utils";

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
    color: secondary,
    fontWeight: "500",
    letterSpacing: hp(0.5),
    fontSize: hp(14),
    lineHeight: hp(17.75),
  },
  nextText: {
    color: secondary,
  },
  doneButton: {
    backgroundColor: Primary,
    width: wp(335),
    height: hp(50),
    borderRadius: hp(10),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    // marginTop: 100,
    marginBottom: hp(20),
  },
  // nextButton: {
  //   backgroundColor: Primary,
  // },
};

export default Button;
