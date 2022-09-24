import React, { FC } from "react";
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Text, View } from "../../components/Themed";

type ButtonPropsType = {
  title: string;
  color?: string;
  onPressButton?: () => void;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
};

export const CancelButtonWithUnderline: FC<ButtonPropsType> = ({
  title,
  color,
  onPressButton,
  style,
  styleText,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: "transparent",
          borderBottomColor: color,
          paddingBottom: 2,
          borderBottomWidth: 1,
          alignSelf: "center",
          marginTop: 3,
        },
        style,
      ]}
    >
      <TouchableOpacity activeOpacity={0.8} onPress={onPressButton}>
        <Text style={[{ fontSize: 14 }, styleText]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CancelButtonWithUnderline;
