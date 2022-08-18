import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import ButtonLg from "../../../components/buttons/ButtonLg";
import BoxTextInput from "../../../components/input/BoxTextInput";
import { Text, View } from "../../../components/Themed";
import { SignUpStackProps } from "./SignUpNavigator";
import { Picker } from "@react-native-picker/picker";
import Colors from "../../../constants/Colors";
import Button from "../../../components/buttons/Button";
import { hp } from "../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUpEmailScreen = ({
  navigation,
}: NativeStackScreenProps<SignUpStackProps>) => {
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={[CommonStyles.phoneContainer]}>
        <Text style={[CommonStyles.headerText]}>Profile Setup</Text>
        <Text style={[CommonStyles.bodyText]}>Set up your account</Text>
      </View>
      <BoxTextInput
        placeHolder='Full Name'
        required
        value='John Appleased'
        onChange={() => {}}
      />
      <BoxTextInput
        placeHolder='Email'
        required
        value='johnappleased@apple.com'
        onChange={() => {}}
      />

      <Picker collapsable>
        <Picker.Item label='male' value={"Male"} />
        <Picker.Item label='female' value={"Female"} />
      </Picker>

      <Button
        title='Continue'
        onPressButton={() => navigation.navigate("SignUpPassword")}
        style={[CommonStyles.container, { bottom: insets.bottom || hp(45) }]}
      />
    </SpacerWrapper>
  );
};

export default SignUpEmailScreen;
