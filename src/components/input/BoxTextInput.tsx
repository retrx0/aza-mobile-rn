import React from "react";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp } from "../../common/util/LayoutUtil";
import Colors from "../../constants/Colors";
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
          CommonStyles.setUpText,
          { marginHorizontal: 15, marginTop: 20 },
        ]}>
        {props.placeHolder}
        <Text style={{ color: "red" }}>{props.required ? "*" : ""}</Text>
      </Text>
      <TextInput
        style={[
          {
            width: "90%",
            alignSelf: "center",
            borderWidth: 1,
            borderColor: "#121212",
            borderRadius: 5,
            padding: 15,
            marginBottom: 20,
            fontSize: 16,
            fontFamily: "Euclid-Circular-A",
            height: hp(50),
          },
        ]}
        value={props.value}
        onChange={props.onChange}
      />
    </View>
  );
};

export default BoxTextInput;
