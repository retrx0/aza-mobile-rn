import React from "react";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import { Text, View } from "../../../components/Themed";
import { SignUpScreenProps } from "../../../../types";
import SignUpProfile from "./components/SignUpInput";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

const SignUpProfileSetupScreen = ({
  navigation,
  route,
}: SignUpScreenProps<"SignUpProfileSetup">) => {
  return (
    <SpacerWrapper>
      <View style={{ marginLeft: 20 }}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={[CommonStyles.phoneContainer]}>
        <Text style={[CommonStyles.headerText]}>Profile setup</Text>
        <Text style={[CommonStyles.bodyText]}>Set up your account</Text>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SignUpProfile navigation={navigation} route={route} />
      </TouchableWithoutFeedback>
    </SpacerWrapper>
  );
};

export default SignUpProfileSetupScreen;
