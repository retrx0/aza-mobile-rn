import React from "react";
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInputChangeEventData,
  TextStyle,
  ViewStyle,
} from "react-native";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp } from "../../common/util/LayoutUtil";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Text, TextInput, View } from "../Themed";

const BoxTextInput = (props: {
  placeHolder: string;
  required: boolean;
  value: string;
  style?: StyleProp<ViewStyle>;
  labelStyle: StyleProp<TextStyle>;
  inputStyle: StyleProp<TextStyle>;
  containerStyle: any;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}) => {
  const colorScheme = useColorScheme();
  return (
    <View>
      <Text style={[{ paddingBottom: 5, marginTop: 20 }, props.labelStyle]}>
        {props.placeHolder}
        <Text style={{ color: "red" }}>{props.required ? "*" : ""}</Text>
      </Text>
      <TextInput
        style={[
          {
            width: "100%",
            alignSelf: "center",
            borderWidth: 0.5,
            borderColor: Colors[colorScheme].border,
            borderRadius: 5,
            padding: 15,
            marginBottom: 20,
            fontSize: hp(18),
            fontFamily: "Euclid-Circular-A",
            height: hp(50),
          },
          props.inputStyle,
        ]}
        value={props.value}
        onChange={props.onChange}
      />
    </View>
  );
};

export default BoxTextInput;
