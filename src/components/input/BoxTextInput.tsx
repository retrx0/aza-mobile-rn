import React from "react";
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInputChangeEventData,
  TextStyle,
  ViewStyle,
} from "react-native";
import { hp } from "../../common/util/LayoutUtil";
import {
  View as View,
  Text2 as Text,
  TextInput,
  TextInputProps,
} from "../../theme/Themed";

const BoxTextInput = (props: {
  placeHolder: string;
  required: boolean;
  value: string;
  style?: StyleProp<ViewStyle>;
  labelStyle: StyleProp<TextStyle>;
  inputStyle: StyleProp<TextStyle>;
  containerStyle: any;
  inputProps?: TextInputProps;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}) => {
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
            borderRadius: 5,
            padding: 10,
            marginBottom: 20,
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A",
            height: hp(50),
          },
          props.inputStyle,
        ]}
        value={props.value}
        onChange={props.onChange}
        {...props.inputProps}
      />
    </View>
  );
};

export default BoxTextInput;
