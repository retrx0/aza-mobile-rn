import { View, StyleSheet } from "react-native";
import React from "react";

export default function Divider() {
  return <View style={styles.divider}></View>;
}
const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#EAEAEC",
    marginTop: 10,
    marginBottom:20
  },
});
