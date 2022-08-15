import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { ColorValue, GestureResponderEvent, StyleSheet, TouchableOpacity } from "react-native";
import CommonStyles from "../../common/styles/CommonStyles";
import { Text, ThemedFAIcon, View } from "../Themed";

const ButtonLg = (props: {
  title: string;
  color: ColorValue;
  alt: boolean;
  style?:{};
  disabled?:boolean;
  iconName?: typeof FontAwesome["defaultProps"];
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, { backgroundColor: props.color },props.style]} onPress={props.onPress}>
      <View style={[{ flex: 1, justifyContent: "center", backgroundColor: "transparent" }]}>
        <View style={[styles.row, { backgroundColor: "transparent" }]}>
          {props.iconName ? (
            <FontAwesome
              name={props.iconName}
              style={[CommonStyles.centerText, { color: "#FFFFFF", fontSize: 18, flex: 1, textAlign: "center" }]}
            />
          ) : (
            <></>
          )}
          <Text
            adjustsFontSizeToFit
            style={[
              CommonStyles.centerText,
              { color: props.alt ? "black" : "white", fontFamily: "Euclid-Circular-A", fontSize: 14, flex: 6 },
            ]}
          >
            {props.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: "90%",
    height: 50,
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
});

export default ButtonLg;
