import React from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import CommonStyles from "../../common/styles/CommonStyles";
import { Text, TextInput, View } from "../Themed";

const BoxTextInput = (props: {
  placeHolder: string;
  required: boolean;
  value: string;
  onChange: () => void;
}) => {
  return (
    <View>
      <Text
        style={[
          CommonStyles.bodyText,
          { marginHorizontal: 15, marginTop: 20 },
        ]}>
        {props.placeHolder}
        <Text style={{ color: "red" }}>{props.required ? "*" : ""}</Text>
      </Text>
      <TextInput
        style={[
          {
            backgroundColor: "#F2F2F2",
            width: "90%",
            alignSelf: "center",
            borderWidth: 0.5,
            borderColor: "#121212",
            borderRadius: 5,
            padding: 15,
            marginBottom: 20,
          },
        ]}
        value={props.value}
        onChange={props.onChange}
      />
    </View>
  );
};

export default BoxTextInput;
