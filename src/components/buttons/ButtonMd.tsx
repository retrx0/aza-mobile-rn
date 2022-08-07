import React from "react";
import { ColorValue, GestureResponderEvent, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../Themed";

const ButtonMd = (props: {
  title: string;
  color: ColorValue;
  alt: boolean;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: props.color,
          width: 160,
          padding: 10,
          borderRadius: 10,
          borderColor: "black",
          borderWidth: 1,
        },
      ]}
      onPress={props.onPress}
    >
      <Text style={[styles.buttonText, { color: props.alt ? "black" : "white" }]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    textAlign: "center",
    margin: 5,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "column",
  },
});

export default ButtonMd;
