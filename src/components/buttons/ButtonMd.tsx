import React from "react";
import {
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { hp, wp } from "../../common/util/LayoutUtil";
import { Text } from "../../theme/Themed";

const ButtonMd = (props: {
  title: string;
  color: ColorValue;
  alt: boolean;
  style?: StyleProp<TextStyle>;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: props.color }]}
      onPress={props.onPress}
    >
      <Text
        style={[
          styles.buttonText,
          { color: props.alt ? "black" : "white" },
          props.style,
        ]}
      >
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
    borderRadius: hp(10),
    borderColor: "black",
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    margin: 5,
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(18),
    fontWeight: "500",
    lineHeight: hp(18),
  },
});

export default ButtonMd;
