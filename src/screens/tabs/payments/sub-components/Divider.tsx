import { View, StyleSheet, ViewStyle } from "react-native";
import React from "react";
import useColorScheme from "../../../../hooks/useColorScheme";
import Colors from "../../../../constants/Colors";

export default function Divider({ style }: { style?: ViewStyle }) {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.divider,
        style,
        {
          backgroundColor: Colors[colorScheme].disabledButton,
        },
      ]}></View>
  );
}
const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 0.5,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
