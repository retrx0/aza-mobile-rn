import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import CommonStyles from "../../../common/styles/CommonStyles";
import { PhoneInput, Text, View } from "../../../components/Themed";
import ButtonLg from "../../../components/buttons/ButtonLg";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SignUpStackProps } from "./SignUpNavigator";
import Colors from "../../../constants/Colors";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";

const SignUpScreen = ({
  navigation,
}: NativeStackScreenProps<SignUpStackProps>) => {
  const [phone, setPhone] = useState<string>("");

  return (
    <SpacerWrapper>
      <BackButton
        onPress={() => {
          navigation.getParent()?.navigate("Welcome");
        }}
      />
      <View style={[CommonStyles.phoneContainer]}>
        <Text style={[CommonStyles.headerText]}>Sign Up for Aza</Text>
        <Text style={[CommonStyles.bodyText]}>
          Enter your phone number to continue
        </Text>
        <Text style={[CommonStyles.phoneText]}>
          Phone Number <Text style={[CommonStyles.phoneNumber]}>*</Text>
        </Text>
      </View>
      <PhoneInput
        initialValue={phone}
        onChangePhoneNumber={(p) => setPhone(p)}
        initialCountry='ng'
        autoFormat
        textStyle={[CommonStyles.textStyle]}
        textProps={{
          placeholder: "Enter a phone number...",
        }}
        style={[CommonStyles.phoneStyle]}
      />
      <Button
        title='Continue'
        onPressButton={() => navigation.navigate("SignUpOTP")}
      />
      <View style={[CommonStyles.row, CommonStyles.user]}>
        <Text style={[CommonStyles.account]}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.getParent()?.navigate("SignIn");
          }}>
          <Text style={[CommonStyles.login]}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={[CommonStyles.orText]}>OR</Text>
      <ButtonLg
        iconName='apple'
        title='Connect Apple Account'
        color={Colors.general.apple}
        onPress={() => console.log("connecting with apple...")}
        alt={false}
      />
      <ButtonLg
        iconName={"facebook"}
        title='Connect with Facebook'
        color={Colors.general.facebook}
        onPress={() => console.log("connecting with facebook...")}
        alt={false}
      />
      <ButtonLg
        iconName={"google"}
        title='Connect Google Account'
        color={Colors.general.google}
        onPress={() => console.log("connecting with google...")}
        alt={false}
      />
    </SpacerWrapper>
  );
};

export default SignUpScreen;
