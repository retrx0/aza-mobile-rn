import React from "react";
import {
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp } from "../../common/util/LayoutUtil";
import { Text, View } from "../Themed";

const ButtonLg = (props: {
  title: string;
  color: ColorValue;
  alt: boolean;
  icon: any;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  disabled?: boolean;
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
          <View
            style={[
              CommonStyles.iconStyle,
              {
                flex: 1,
                alignItems: "center",
                height: 0,
                width: 0,
              },
            ]}>
            {props.icon}
          </View>
          <Text
            adjustsFontSizeToFit
            style={[
              CommonStyles.centerText,
              {
                color: props.alt ? "black" : "white",
                fontWeight: "500",
                fontSize: hp(14),
                lineHeight: hp(18),
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                flex: 6,
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
