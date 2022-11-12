import React, { useState } from "react";
import CommonStyles from "../../../common/styles/CommonStyles";
import { PhoneInput, Text, View } from "../../../components/Themed";
import ButtonLg from "../../../components/buttons/ButtonLg";
import Colors from "../../../constants/Colors";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";
import { SignUpScreenProps } from "../../../../types";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import useColorScheme from "../../../hooks/useColorScheme";
import { useAppDispatch } from "../../../redux";
import {
  requestOtp,
  setEmail as setReduxStoreEmail,
} from "../../../redux/slice/newUserSlice";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../../../../assets/svg";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { Platform } from "react-native";
import {
  ENV,
  STORAGE_KEY_FACEBOOK_REFRESH_TOKEN,
  STORAGE_KEY_GOOGLE_REFRESH_TOKEN,
  STORAGE_KEY_GOOGLE_TOKEN,
  STORAGE_KEY_FACEBOOK_TOKEN,
  STORAGE_KEY_APPLE_TOKEN,
} from "@env";
import {
  fetchThirdPartyUserInfo,
  signInWithApple,
  signInWithFacebook,
  signInWithGoogole,
} from "../thirdPartyAuth";
import * as SecureStore from "expo-secure-store";
import InputFormFieldNormal from "../../../components/input/InputFormFieldNormal";
import { requestOtpApi } from "../../../api/auth";

WebBrowser.maybeCompleteAuthSession();

const SignUpScreen = ({ navigation }: SignUpScreenProps<"SignUpRoot">) => {
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const colorScheme = useColorScheme();

  const [thirdPartyUserData, setThirdPartyUserData] = useState({});

  const dispatch = useAppDispatch();

  const { f_promptAsync, f_response } = signInWithFacebook();
  const { g_promptAsync, g_response, g_request } = signInWithGoogole();

  const storeAuthSessionTokens = (
    response: AuthSession.AuthSessionResult | null,
    tokenKey: string,
    refreshTokenKey: string
  ) => {
    if (response?.type === "success") {
      // Store Tokens
      if (response.authentication?.refreshToken) {
        SecureStore.setItemAsync(tokenKey, response.authentication?.accessToken)
          .then(() => console.log("token stored"))
          .catch((e) => console.error(e));
        SecureStore.setItemAsync(
          refreshTokenKey,
          response.authentication?.refreshToken
        )
          .then(() => console.log("Refresh token stored"))
          .catch((e) => console.error(e));
      }
    }
  };

  React.useEffect(() => {
    console.log(AuthSession.getDefaultReturnUrl());

    if (g_response?.type === "success") {
      // Store Tokens
      storeAuthSessionTokens(
        g_response,
        STORAGE_KEY_GOOGLE_TOKEN,
        STORAGE_KEY_GOOGLE_REFRESH_TOKEN
      );
      fetchThirdPartyUserInfo(g_response.authentication?.accessToken, "Google")
        .then((r) => {
          if (r?.data) {
            setThirdPartyUserData(r.data);
          }
        })
        .catch((e) => console.error(e));
    }
    // TODO make calls to googleapis/facebook using the response to get the email and profile
    if (f_response?.type === "success") {
      storeAuthSessionTokens(
        g_response,
        STORAGE_KEY_GOOGLE_TOKEN,
        STORAGE_KEY_GOOGLE_REFRESH_TOKEN
      );
      fetchThirdPartyUserInfo(
        f_response.authentication?.accessToken,
        "Facebook"
      )
        .then((r) => {
          if (r?.data) {
            setThirdPartyUserData(r.data);
          }
        })
        .catch((e) => console.error(e));
    }
  }, [g_response, f_response]);

  return (
    <SpacerWrapper>
      <View style={{ marginLeft: 20 }}>
        <BackButton
          onPress={() => {
            navigation.getParent()?.navigate("Welcome");
          }}
        />
      </View>
      <View style={[CommonStyles.phoneContainer]}>
        <Text style={[CommonStyles.headerText]}>Sign Up for Aza</Text>
        <Text style={[CommonStyles.bodyText]}>
          Enter your email address to continue
        </Text>
        <Text style={[CommonStyles.phoneText]}>
          Email Address <Text style={[CommonStyles.phoneNumber]}>*</Text>
        </Text>
      </View>

      <InputFormFieldNormal
        value={email}
        onChangeText={(e) => setEmail(e)}
        placeholderVisible={false}
        type="email"
        formikProps={{ errors: false, touched: false }}
        autoFocus={false}
      />
      {/*
      <PhoneInput
        initialValue={phone}
        onChangePhoneNumber={(p) => setPhone(p)}
        initialCountry="ng"
        autoFormat
        textStyle={[CommonStyles.textStyle]}
        textProps={{
          placeholder: "Enter a phone number...",
        }}
        style={[CommonStyles.phoneStyle]}
      /> */}
      <Button
        title="Continue"
        onPressButton={() => {
          dispatch(setReduxStoreEmail(email));
          // TDOD replace the below email with the one coming from google, apple or facebook!
          // dispatch(
          //   requestOtp({
          //     phone: "",
          //     email: "mubarakibrahim2015@gmail.com",
          //     thirdPartyEmailSignUp: false,
          //   })
          // );
          requestOtpApi({ email: email, phoneNumber: "" });
          navigation.navigate("SignUpOTP", { otpScreenType: "email" });
        }}
        styleText={{
          color: Colors[colorScheme].buttonText,
        }}
        style={[
          {
            backgroundColor: Colors[colorScheme].button,
          },

          CommonStyles.otpbutton,
        ]}
        disabled={email.length < 10}
      />
      <View style={[CommonStyles.row, CommonStyles.user]}>
        <Text style={[CommonStyles.account]}>Already have an account? </Text>
        <CancelButtonWithUnderline
          title="Login"
          onPressButton={() => navigation.getParent()?.navigate("SignIn")}
          color={Colors[colorScheme].text}
        />
      </View>

      <Text style={[CommonStyles.orText]}>OR</Text>
      {Platform.OS === "ios" ? (
        <ButtonLg
          icon={<AppleIcon />}
          title="Connect Apple Account"
          color={Colors.general.apple}
          onPress={() => {
            signInWithApple().then((a_response) => {
              if (a_response?.identityToken) {
                SecureStore.setItemAsync(
                  STORAGE_KEY_APPLE_TOKEN,
                  a_response.identityToken
                );
              }
            });
            // pass the response to create account
          }}
          alt={false}
        />
      ) : (
        <></>
      )}

      <ButtonLg
        icon={<FacebookIcon />}
        title="Connect with Facebook"
        color={Colors.general.facebook}
        onPress={() => {
          f_promptAsync();
        }}
        alt={false}
      />
      <ButtonLg
        icon={<GoogleIcon />}
        title="Connect Google Account"
        color={Colors.general.google}
        onPress={() => {
          g_promptAsync();
        }}
        alt={false}
      />
    </SpacerWrapper>
  );
};

export default SignUpScreen;
