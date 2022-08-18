import React, { useState } from "react";
import ButtonLg from "../../../components/buttons/ButtonLg";
import Colors from "../../../constants/Colors";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LogInStackProps } from "./SignInNavigator";
import { PhoneInput, Text, View } from "../../../components/Themed";
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";
import styles from "../../onboarding/OnboardingStyles";

const SignInScreen = ({
  navigation,
}: NativeStackScreenProps<LogInStackProps>) => {
  const [phone, setPhone] = useState<string>("");
  return (
    <SpacerWrapper>
      <BackButton
        onPress={() => {
          navigation.getParent()?.navigate("Welcome");
        }}
      />
      <View style={[CommonStyles.phoneContainer]}>
        <Text style={[CommonStyles.bodyText]}>
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
        onPressButton={() => navigation.navigate("SignInOTP")}
      />
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

export default SignInScreen;
