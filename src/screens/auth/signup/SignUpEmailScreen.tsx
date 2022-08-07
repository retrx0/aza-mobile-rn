import React from "react";
import CommonStyles from "../../../common/styles/CommonStyles";
import ButtonLg from "../../../components/buttons/ButtonLg";
import BoxTextInput from "../../../components/input/BoxTextInput";
import { Text, View } from "../../../components/Themed";

const SignUpEmailScreen = () => {
  return (
    <View style={[{ flex: 1 }]}>
      <View>
        <Text style={[CommonStyles.headerText]}>Profile Setup</Text>
        <Text style={[CommonStyles.bodyText]}>Set up your account</Text>
      </View>
      <BoxTextInput placeHolder="Full Name" required value="John Appleased" onChange={() => {}} />
      <BoxTextInput placeHolder="Email" required value="johnappleased@apple.com" onChange={() => {}} />
      <ButtonLg color={"#000"} alt={false} onPress={() => {}} title="Continue" />
    </View>
  );
};

export default SignUpEmailScreen;
