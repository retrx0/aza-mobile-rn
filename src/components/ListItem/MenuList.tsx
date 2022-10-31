import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "../Themed";
import { ArrowFowardIcon } from "../../../assets/svg";

interface MenuItem {
  heading: string;
  subHeading?: string;
  onPress?: () => void;
}
export default function MenuList({ heading, subHeading, onPress }: MenuItem) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.listContainer}>
      <View>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.subHeading}>{subHeading}</Text>
      </View>
      <ArrowFowardIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 15,
    color: "#A6A6A6",
  },
  subHeading: {
    fontSize: 15,
  },
});
