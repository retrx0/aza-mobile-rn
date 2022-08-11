import React, { useState } from "react";
import { Text } from "react-native";
import { Header } from "../../../components/text/header";
import { SigninStyles as styles } from "./styles";
import ButtonLg from "../../../components/buttons/ButtonLg";
import Colors from "../../../constants/Colors";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import PhoneInput from "react-native-phone-input";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LogInStackProps } from "./SignInNavigator";

const SignInScreen = ({
  navigation,
}: NativeStackScreenProps<LogInStackProps>) => {
  const [phone, setPhone] = useState<string>("");
  return (
    <SpacerWrapper>
      <Header
        heading='Phone Number'
        headerStyle={styles.header}
        descriptionStyle={undefined}
        description={""}
      />
      <PhoneInput
        initialValue={phone}
        onChangePhoneNumber={(p) => setPhone(p)}
        initialCountry='ng'
        autoFormat
        textStyle={styles.textStyle}
        textProps={{
          placeholder: "Enter a phone number...",
        }}
        style={styles.phoneStyle}
      />
      <ButtonLg
        title='Continue'
        color={"#000"}
        onPress={() => navigation.navigate("LogiOTP")}
        alt={false}
      />
      <Text
        style={[
          CommonStyles.bodyText,
          CommonStyles.centerText,
          { fontSize: 18 },
        ]}>
        OR
      </Text>
      <ButtonLg
        iconName='apple'
        title='Connect with Apple'
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
        title='Connect with Google'
        color={Colors.general.google}
        onPress={() => console.log("connecting with google...")}
        alt={false}
      />
    </SpacerWrapper>
  );
};

export default SignInScreen;
