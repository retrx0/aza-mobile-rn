import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import CommonStyles from "../../../common/styles/CommonStyles";
import { Text, View } from "../../../components/Themed";
import PhoneInput from "react-native-phone-input";
import ButtonMd from "../../../components/buttons/ButtonMd";
import ButtonLg from "../../../components/buttons/ButtonLg";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SignUpStackProps } from "./SignUpNavigator";
import Colors from "../../../constants/Colors";
import SpacerWrapper from "../../../common/util/SpacerWrapper";

const SignUpScreen = ({
  navigation,
}: NativeStackScreenProps<SignUpStackProps>) => {
  const [phone, setPhone] = useState<string>("");

  return (
    <SpacerWrapper>
      <View>
        <Text style={[CommonStyles.headerText]}>Sign up for AZA</Text>
        <Text style={[CommonStyles.bodyText]}>
          Enter your phone number to continue
        </Text>
        <Text style={[CommonStyles.bodyText]}>
          Phone Number <Text style={{ color: "red" }}>*</Text>
        </Text>
      </View>
      <PhoneInput
        initialValue={phone}
        onChangePhoneNumber={(p) => setPhone(p)}
        initialCountry='ng'
        autoFormat
        textStyle={{ fontSize: 16, padding: 3 }}
        textProps={{
          placeholder: "Enter a phone number...",
        }}
        style={[
          {
            alignSelf: "center",
            height: 50,
            width: "90%",
            backgroundColor: "#f2f2f2",
            padding: 10,
            borderColor: "#121212",
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: 5,
          },
        ]}
      />
      <View
        style={[
          CommonStyles.row,
          { justifyContent: "center", marginVertical: 20 },
        ]}>
        <Text style={{}}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.getParent()?.navigate("SignIn");
          }}>
          <Text
            style={[{ fontWeight: "bold", textDecorationLine: "underline" }]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <ButtonLg
        title='Continue'
        color={"#000"}
        onPress={() => navigation.navigate("SignUpOTP")}
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

export default SignUpScreen;
