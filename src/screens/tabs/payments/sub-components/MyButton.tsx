import { View, Text } from "react-native";
import React from "react";
import ButtonLg from "../../../../components/buttons/ButtonLg";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import useColorScheme from "../../../../hooks/useColorScheme";
import Button from "../../../../components/buttons/Button";
export default function MyButton({
  disabled,
  title,
  onPress,
  style,
}: {
  disabled: boolean;
  title: string;
  onPress: any;
  style?: {};
}) {
  return (
    <View
      style={[
        styles.button,
        {
          width: "100%",
          opacity: disabled ? 0.3 : 1,
        },
        style,
      ]}
    >
      <Button
        disabled={disabled}
        title={title}
        onPressButton={onPress}
      />
    </View>
  );
}
