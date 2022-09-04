import React from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import CommonStyles from "../../common/styles/CommonStyles";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Text, TextInput, View } from "../Themed";

const BoxTextInput = (props: { placeHolder: string; required: boolean; value: string; onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void }) => {
  const colorScheme = useColorScheme()
  return (
    <View>
      <Text style={{padding: 5, marginTop: 20 }}>
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
          },
        ]}
        value={props.value}
        onChange={props.onChange}
      />
    </View>
  );
};

export default BoxTextInput;
