/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import ButtonLg from "../../../components/buttons/ButtonLg";
import Colors from "../../../constants/Colors";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { PhoneInput, Text, View } from "../../../components/Themed";
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";
import { SignInScreenProps } from "../../../../types";
import useColorScheme from "../../../hooks/useColorScheme";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../../../../assets/svg";
import { useDispatch } from "react-redux";
import { requestOtp } from "../../../redux/slice/newUserSlice";
import { API_BASE_URL } from "@env";


const SignInScreen = ({ navigation }: SignInScreenProps<"SignInRoot">) => {
  const [phone, setPhone] = useState<string>("");
  const colorScheme = useColorScheme();
  const dispatch=useDispatch()
  return (
    <SpacerWrapper>
      <View style={{ marginLeft: 20 }}>
        <BackButton
          onPress={() => {
            navigation.getParent()?.navigate("Welcome");
          }}
        />
      </View>
      <View style={CommonStyles.phoneContainer}>
        <Text style={[CommonStyles.headerText]}>Login</Text>
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
        initialCountry="ng"
        autoFormat
        textStyle={[CommonStyles.textStyle]}
        textProps={{
          placeholder: "Enter a phone number...",
        }}
        pickerBackgroundColor={Colors[colorScheme].backgroundSecondary}
        style={[CommonStyles.phoneStyle]}
      />

      <Button
        title="Continue"
        onPressButton={() => {
          dispatch(requestOtp({phone,email:'mubarakibrahim2015@gmail.com'}))
          navigation.navigate("SignInOTP");
          
        }}
        styleText={{
          color: Colors[colorScheme].buttonText,
        }}
        style={[
          {
            backgroundColor: Colors[colorScheme].button,
          },
          CommonStyles.button,
        ]}
        disabled={phone.length < 10 ? true : false}
      />
      <Text style={[CommonStyles.orText]}>OR</Text>
      <ButtonLg
        icon={<AppleIcon />}
        title="Connect Apple Account"
        color={Colors.general.apple}
        onPress={() => console.log("connecting with apple...")}
        alt={false}
      />
      <ButtonLg
        icon={<FacebookIcon />}
        title="Connect with Facebook"
        color={Colors.general.facebook}
        onPress={() => console.log("connecting with facebook...")}
        alt={false}
      />
      <ButtonLg
        icon={<GoogleIcon />}
        title="Connect Google Account"
        color={Colors.general.google}
        onPress={() => console.log("connecting with google...")}
        alt={false}
      />
    </SpacerWrapper>
  );
};

export default SignInScreen;
