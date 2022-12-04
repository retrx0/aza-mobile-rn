import React from "react";
import { StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";
import { hp } from "../../common/util/LayoutUtil";
import { Text, View } from "../Themed";

export type HeaderProps = {
  heading: string;
  description?: string;
  style?: StyleProp<ViewStyle>;
  headerStyle: StyleProp<TextStyle>;
  descriptionStyle: StyleProp<TextStyle>;
};

export const Header = ({
  heading,
  description,
  style,
  headerStyle,
  descriptionStyle,
}: HeaderProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.heading, headerStyle]}>{heading}</Text>
      <Text style={[styles.description, descriptionStyle]}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: hp(20),
  },

  heading: {
    fontSize: hp(18),
    fontWeight: "500",
    lineHeight: hp(20.29),
  },
  description: {
    fontWeight: "400",
    lineHeight: hp(22),
  },
});
