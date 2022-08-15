import React, { FC } from "react";
import { TouchableOpacity, Text } from "react-native";

type ButtonPropsType = {
  title: string;
  onPressButton?: () => void;
};

export const CancelButtonWithUnderline: FC<ButtonPropsType> = ({
  title,
  onPressButton,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPressButton}
      style={{
        borderBottomColor: "#FF361A",
        paddingBottom: 1,
        borderBottomWidth: 1,
        alignSelf: "center",
      }}
    >
      <Text style={{ color: "#FF361A", fontSize: 14 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CancelButtonWithUnderline;
