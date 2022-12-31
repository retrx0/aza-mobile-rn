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
import { View } from "../../theme/components/View";
import { Text } from "../../theme/components/Text";

const ButtonLg = (props: {
  title: string;
  color: ColorValue;
  alt: boolean;
  icon: any;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  disabled?: boolean;
  titleStyle?: StyleProp<TextStyle>;
}) => {
  return (
    <View
      {...props}
      style={[styles.button, { backgroundColor: props.color }, props.style]}
    >
      <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.row, { backgroundColor: "transparent" }]}>
          <View
            style={{
              backgroundColor: "transparent",
              marginLeft: hp(28),
              marginRight: hp(63),
            }}
          >
            {props.icon}
          </View>
          <Text
            style={[
              {
                color: props.alt ? "black" : "white",
                fontWeight: "500",
                fontSize: hp(14),
                fontFamily: "Euclid-Circular-A-Semi-Bold",
              },
              props.titleStyle,
            ]}
          >
            {props.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginVertical: 15,
  },
  button: {
    width: "90%",
    height: hp(50),
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
});

export default ButtonLg;
