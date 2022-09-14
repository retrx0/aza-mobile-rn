import { View, StyleSheet, ViewStyle } from "react-native";
import React from "react";

export default function Divider({ style }: { style?: ViewStyle }) {
  return <View style={[styles.divider, style]}></View>;
}
const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#EAEAEC",
    marginTop: 20,
  },
});
