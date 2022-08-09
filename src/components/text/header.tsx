import React from "react";
import { StyleSheet, View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { hp } from "../../common/util/utils";

export type HeaderProps = {
  heading: string;
  description: string;
  style?: StyleProp<ViewStyle>;
  headerStyle: StyleProp<TextStyle>;
  descriptionStyle: StyleProp<TextStyle>;
};

export const Header = ({ heading, description, style, headerStyle, descriptionStyle }: HeaderProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.heading, headerStyle]}>{heading}</Text>
      <Text style={[styles.description, descriptionStyle]}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp(10),
    paddingHorizontal: hp(20),
  },

  heading: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4D4D4D",
    lineHeight: hp(20.29),
  },
  description: {
    fontWeight: "400",
    lineHeight: hp(22),
  },
});
