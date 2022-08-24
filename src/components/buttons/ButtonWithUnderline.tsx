import React, { FC } from "react";
import { TouchableOpacity, Text } from "react-native";

type ButtonPropsType = {
  title: string;
  color: string;
  onPressButton?: () => void;
};

export const ButtonWithUnderline: FC<ButtonPropsType> = ({
  title,
  color,
  onPressButton,
}) => {
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

export default ButtonWithUnderline;
