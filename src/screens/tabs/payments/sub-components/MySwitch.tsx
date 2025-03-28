import { View, Text, Switch, StyleSheet } from "react-native";
import React from "react";
import RegularText from "../../../../components/text/RegularText";

export default function MySwitch({
  onValueChange,
  isEnabled,
  title,
  onSwitchToggle,
}: {
  onValueChange: any;
  isEnabled: boolean;
  title: string;
  onSwitchToggle: () => void;
}) {
  return (
    <View style={styles.container}>
      <RegularText style={styles.text} text={title} />
      <Switch
        trackColor={{ false: "#767577", true: "#2A9E17" }}
        thumbColor={isEnabled ? "#2A9E17" : "#f4f3f4"}
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
