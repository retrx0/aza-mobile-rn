import React, { FC } from "react";
import { TouchableOpacity, StyleProp, ViewStyle, TextStyle } from "react-native";
import { Text, View } from "../../components/Themed";

type ButtonPropsType = {
  title: string;
  color?: string;
  onPressButton?: () => void;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
};

export const CancelButtonWithUnderline: FC<ButtonPropsType> = ({ title, color, onPressButton, style, styleText }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPressButton}
      style={{
        borderBottomColor: color,
        paddingBottom: 1,
        borderBottomWidth: 1,
        alignSelf: "center",
      }}
    >
      <Text style={{ color: color, fontSize: 14 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CancelButtonWithUnderline;
