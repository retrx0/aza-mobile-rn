import React from "react";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import ButtonLg from "../../../components/buttons/ButtonLg";
import BoxTextInput from "../../../components/input/BoxTextInput";
import { Text, View } from "../../../components/Themed";
import { Picker } from "@react-native-picker/picker";
import Colors from "../../../constants/Colors";
import { SignUpScreenProps } from "../../../../types";

const SignUpProfileSetupScreen = ({ navigation }: SignUpScreenProps<"SignUpProfileSetup">) => {
  return (
    <SpacerWrapper>
      <BackButton onPress={() => navigation.goBack()} />
      <View>
        <Text style={[CommonStyles.headerText]}>Profile Setup</Text>
        <Text style={[CommonStyles.bodyText]}>Set up your account</Text>
      </View>
      <BoxTextInput placeHolder="Full Name" required value="John Appleased" onChange={() => {}} />
      <BoxTextInput placeHolder="Email" required value="johnappleased@apple.com" onChange={() => {}} />
      <Picker collapsable>
        <Picker.Item label="male" value={"Male"} />
        <Picker.Item label="female" value={"Female"} />
      </Picker>
      <ButtonLg
        color={Colors.general.black}
        alt={false}
        onPress={() => {
          navigation.navigate("SignUpPassword", { passwordScreenType: "Create" });
        }}
        title="Continue"
      />
    </SpacerWrapper>
  );
};

export default SignUpProfileSetupScreen;
