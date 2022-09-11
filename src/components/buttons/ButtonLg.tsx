import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  ColorValue,
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp } from "../../common/util/LayoutUtil";
import { Text, View } from "../Themed";

const ButtonLg = (props: {
  title: string;
  color: ColorValue;
  alt: boolean;
  style?: {};
  disabled?: boolean;
  iconName?: typeof FontAwesome["defaultProps"];
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, { backgroundColor: props.color }, props.style]}
      onPress={props.onPress}>
      <View
        style={[
          {
            flex: 1,
            justifyContent: "center",
            backgroundColor: "transparent",
            alignItems: "center",
          },
        ]}>
        <View style={[styles.row, { backgroundColor: "transparent" }]}>
          {props.iconName ? (
            <FontAwesome
              name={props.iconName}
              style={[
                CommonStyles.iconStyle,
                {
                  color: "#FFFFFF",
                  fontSize: 18,
                  flex: 1,
                },
              ]}
            />
          ) : (
            <></>
          )}
          <Text
            adjustsFontSizeToFit
            style={[
              CommonStyles.centerText,
              {
                color: props.alt ? "black" : "white",
                fontSize: 16,
                flex: 6,
                fontFamily: "Euclid-Circular-A-Semi-Bold",
              },
            ]}>
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
