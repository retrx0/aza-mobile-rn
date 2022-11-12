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
import { requestOtp } from "../../../redux/slice/newUserSlice";
import { API_BASE_URL } from "@env";
import { useAppDispatch } from "../../../redux";
import {
  signInWithApple,
  signInWithFacebook,
  signInWithGoogole,
} from "../thirdPartyAuth";
import { hp } from "../../../common/util/LayoutUtil";
import InputFormEmail from "../../../components/input/InputFormFieldNormal";

const SignInScreen = ({ navigation }: SignInScreenProps<"SignInRoot">) => {
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const colorScheme = useColorScheme();
  const dispatch = useAppDispatch();

  const { f_promptAsync, f_response } = signInWithFacebook();
  const { g_promptAsync, g_response } = signInWithGoogole();

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
          Enter your email to continue
        </Text>
        <Text
          style={{
            padding: hp(5),
            margin: hp(4),
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            marginTop: hp(35),
            marginLeft: hp(15),
            fontSize: hp(18),
            fontWeight: "500",
          }}
        >
          Email Address <Text style={{ color: "red" }}>*</Text>
        </Text>
      </View>
      <InputFormEmail
        value={email}
        onChangeText={(e) => setEmail(e)}
        placeholderVisible={false}
        type="email"
        formikProps={{ errors: false, touched: false }}
        autoFocus={false}
      />
      {/* <PhoneInput
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
      /> */}

      <Button
        title="Continue"
        onPressButton={() => {
          // dispatch(requestOtp({ phone: "", email: email }));
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
        disabled={email.length < 10}
      />
      <Text style={[CommonStyles.orText]}>OR</Text>
      <ButtonLg
        icon={<AppleIcon />}
        title="Connect Apple Account"
        color={Colors.general.apple}
        onPress={() => signInWithApple().then((r) => console.log(r))}
        alt={false}
      />
      <ButtonLg
        icon={<FacebookIcon />}
        title="Connect with Facebook"
        color={Colors.general.facebook}
        onPress={() => f_promptAsync()}
        alt={false}
      />
      <ButtonLg
        icon={<GoogleIcon />}
        title="Connect Google Account"
        color={Colors.general.google}
        onPress={() => g_promptAsync()}
        alt={false}
      />
    </SpacerWrapper>
  );
};

export default SignInScreen;
