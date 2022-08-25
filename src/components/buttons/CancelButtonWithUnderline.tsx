import React, { FC } from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

type ButtonPropsType = {
  title: string;
  onPressButton?: () => void;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
};

export const CancelButtonWithUnderline: FC<ButtonPropsType> = ({
  title,
  onPressButton,
  style,
  styleText,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPressButton}
      style={[
        {
          borderBottomColor: "#FF361A",
          paddingBottom: 1,
          borderBottomWidth: 1,
          alignSelf: "center",
        },
        style,
      ]}>
      <Text style={[{ color: "#FF361A", fontSize: 14 }, styleText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CancelButtonWithUnderline;
