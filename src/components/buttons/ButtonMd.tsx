import React from "react";
import {
  ColorValue,
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { hp, wp } from "../../common/util/LayoutUtil";
import { Text } from "../Themed";

const ButtonMd = (props: {
  title: string;
  color: ColorValue;
  alt: boolean;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: props.color }]}
      onPress={props.onPress}>
      <Text
        style={[styles.buttonText, { color: props.alt ? "black" : "white" }]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: wp(160),
    height: hp(50),
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    margin: 5,
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: hp(18),
  },
});

export default ButtonMd;
