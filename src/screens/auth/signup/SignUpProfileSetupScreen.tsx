import React from "react";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import { Text, View } from "../../../components/Themed";
import { SignUpScreenProps } from "../../../../types";
import SignUpProfile from "./components/SignUpInput";

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
      <SignUpProfile navigation={navigation} route={route} />
    </SpacerWrapper>
  );
};

export default SignUpProfileSetupScreen;
