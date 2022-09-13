import { View, Text, Switch, StyleSheet } from "react-native";
import React from "react";

export default function CustomSwitch({
  onValueChange,
  isEnabled,
  title,
}: {
  onValueChange: any;
  isEnabled: boolean;
  title: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#2A9E17" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#f4f3f4"
        onValueChange={onValueChange}
        value={isEnabled}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 40,
    padding: 10,
  },
  text: {
    color: "#A6A6A6",
  },
});
