import React, { FC } from "react";
import {
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Colors from "../../constants/Colors";
import { hp, wp } from "../../common/util/LayoutUtil";
import useColorScheme from "../../hooks/useColorScheme";

type ButtonPropsType = {
  title: string;
  onPressButton?: () => void;
  isNext?: boolean;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  disabled?: boolean;
  willCallAsync?: boolean;
};

export const Button: FC<ButtonPropsType> = ({
  title,
  onPressButton,
  isNext,
  style,
  styleText,
  disabled,
  willCallAsync,
}) => {
  const colorScheme = useColorScheme();

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
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
        {willCallAsync ? (
          <ActivityIndicator animating={willCallAsync} />
        ) : (
          title
        )}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  doneText: {
    color: Colors.general.secondary,
    fontWeight: "500",
    fontSize: hp(14),
    lineHeight: hp(18),
    fontFamily: "Euclid-Circular-A",
  },
  nextText: {
    color: Colors.general.secondary,
  },
  doneButton: {
    backgroundColor: Colors.general.black,
    height: hp(50),
    borderRadius: hp(10),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: wp(350),
    // marginTop: 100,
  },
  nextButton: {
    backgroundColor: Colors.general.primary,
  },
};

export default Button;
