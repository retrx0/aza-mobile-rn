import React, { FC } from "react";
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { hp } from "../../common/util/LayoutUtil";

import { Text2 as Text } from "../../theme/Themed";

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
    <TouchableOpacity
      onPress={onPressButton}
      style={[
        {
          borderBottomColor: color,
          paddingBottom: 2,
          borderBottomWidth: 1,
          alignSelf: "center",
          marginTop: 3,
        },
        style,
      ]}
    >
      <Text
        style={[
          {
            fontSize: hp(14),
            fontWeight: "500",
            fontFamily: "Euclid-Circular-A",
          },
          styleText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CancelButtonWithUnderline;
