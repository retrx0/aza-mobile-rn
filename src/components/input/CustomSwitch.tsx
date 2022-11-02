import {
  View,
  Text,
  Switch,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { hp } from "../../common/util/LayoutUtil";

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
      <Text style={[styles.text]}>{title}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#2A9E17" }}
        thumbColor={"#f4f3f4"}
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
    marginRight: 20,
    fontSize: hp(12),
    fontWeight: "600",
    fontFamily: "Euclid-Circular-A",
  },
});
