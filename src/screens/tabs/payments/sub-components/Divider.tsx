import { StyleSheet, ViewStyle } from "react-native";
import React from "react";
import Colors from "../../../../constants/Colors";
import { View } from "../../../../theme/Themed";

export default function Divider({ style }: { style?: ViewStyle }) {
  return (
    <View
      lightColor={Colors.light.borderColor}
      darkColor={Colors.dark.borderColor}
      style={[styles.divider, style]}
    ></View>
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
