import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { darkGrey } from "../../common/colors";
import { hp } from "../../common/utils";

export type HeaderProps = {
  heading: string;
  description: string;
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
    marginTop: hp(10),
    paddingHorizontal: hp(20),
  },

  heading: {
    fontSize: hp(16),
    fontWeight: "500",
    color: darkGrey,
    lineHeight: hp(20.29),
  },
  description: {
    fontWeight: "400",
    lineHeight: hp(22),
  },
});
