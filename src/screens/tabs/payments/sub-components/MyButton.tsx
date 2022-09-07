import { View, Text } from "react-native";
import React from "react";
import ButtonLg from "../../../../components/buttons/ButtonLg";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import useColorScheme from "../../../../hooks/useColorScheme";
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
  const scheme = useColorScheme();
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
      <ButtonLg
        disabled={disabled}
        color={scheme == "light" ? "black" : "#E7E9EA"}
        title={title}
        alt={scheme == "dark" ? true : false}
        onPress={onPress}
      />
    </View>
  );
}
