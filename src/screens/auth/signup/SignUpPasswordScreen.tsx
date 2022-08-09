import React from "react";
import { Switch, TouchableOpacity } from "react-native";
import { Text, View } from "../../../components/Themed";
import CommonStyles from "../../../common/styles/CommonStyles";
import Button from "../../../components/buttons/Button";
import BackButton from "../../../components/buttons/BackButton";
import SegmentedInput from "../../../components/input/SegmentedInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SignUpStackProps } from "./SignUpNavigator";

const SignUpPasswordScreen = ({ navigation }: NativeStackScreenProps<SignUpStackProps>) => {
  return (
    <View style={[{ flex: 1 }]}>
      <View>
        <BackButton />
      </View>
      <Text style={[CommonStyles.headerText]}>Create AZA Passcode</Text>
      <Text style={[CommonStyles.bodyText]}>The passcode will be used to access your account</Text>
      <SegmentedInput
        value={"1221221"}
        secureInput
        headerText=""
        onValueChanged={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <View style={[CommonStyles.row]}>
        <Text style={{}}>Use as transaction pin?</Text>
        <Switch />
      </View>
      <Button
        title="Continue"
        style={{}}
        styleText={{}}
        onPressButton={() => navigation.navigate("SignUpConfirmPassword")}
      />
    </View>
  );
};

export default SignUpPasswordScreen;
