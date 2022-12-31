import React from "react";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import { View2 as View, Text2 as Text } from "../../../theme/Themed";
import { SignUpScreenProps } from "../../../../types";
import SignUpProfile from "./components/SignUpProfile";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import HideKeyboardOnTouch from "../../../common/util/HideKeyboardOnTouch";

const SignUpProfileSetupScreen = ({
  navigation,
  route,
}: SignUpScreenProps<"SignUpProfileSetup">) => {
  return (
    <SpacerWrapper>
      <View style={{ marginLeft: 20 }}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <HideKeyboardOnTouch>
        <View style={{ flex: 1 }}>
          <View style={[CommonStyles.phoneContainer]}>
            <Text style={[CommonStyles.headerText]}>Profile setup</Text>
            <Text style={[CommonStyles.bodyText]}>Set up your account</Text>
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SignUpProfile navigation={navigation} route={route} />
          </TouchableWithoutFeedback>
        </View>
      </HideKeyboardOnTouch>
    </SpacerWrapper>
  );
};

export default SignUpProfileSetupScreen;
