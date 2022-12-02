import { View, Text, Switch, StyleSheet, StyleProp } from "react-native";
import React from "react";
import { hp } from "../../common/util/LayoutUtil";
import useColorScheme from "../../hooks/useColorScheme";
import { TextStyle } from "react-native-phone-input";

export type SwitchProps = {
  Style?: StyleProp<TextStyle>;
  onValueChange: any;
  isEnabled: boolean;
  title: string;
};
export default function CustomSwitch({
  onValueChange,
  isEnabled,
  title,
  Style,
}: SwitchProps & TextStyle) {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          {
            color: colorScheme === "dark" ? "#A6A6A6" : "#A6A6A6",
          },
        ]}>
        {title}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#2A9E17" }}
        thumbColor={"#f4f3f4"}
        ios_backgroundColor="#f4f3f4"
        onValueChange={onValueChange}
        value={isEnabled}
        style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.8 }] }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    color: "#A6A6A6",
    marginRight: hp(10),
    fontSize: hp(14),
    fontWeight: "600",
    fontFamily: "Euclid-Circular-A",
  },
});
