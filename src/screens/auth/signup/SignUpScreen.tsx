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
import { useAppDispatch } from "../../../hooks/redux";
import {
  requestOtp,
  setPhone as setReduxStorePhone,
} from "../../../redux/slice/newUserSlice";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../../../../assets/svg";
// import { API_BASE_URL } from "@env";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as AuthSession from "expo-auth-session";
import * as AppleAuthentication from "expo-apple-authentication";
import * as WebBrowser from "expo-web-browser";
import { Platform } from "react-native";
import { ENV } from "@env";

WebBrowser.maybeCompleteAuthSession();

const SignUpScreen = ({ navigation }: SignUpScreenProps<"SignUpRoot">) => {
  const [phone, setPhone] = useState<string>("");
  const colorScheme = useColorScheme();

  const dispatch = useAppDispatch();

  const useProxy: boolean = ENV === "developement" ? true : false;

  const [request, response, promptAsync] = Google.useAuthRequest(
    {
      expoClientId:
        "323832028739-lv5fi56u3oh3rl78itctljbackutb9d2.apps.googleusercontent.com",
      iosClientId:
        "323832028739-24c0ke20u7pvufco57fcd6u6slnvi1ep.apps.googleusercontent.com",
      androidClientId:
        "323832028739-9c78ldonqnd1d0altnabgcf0h8lnbb1a.apps.googleusercontent.com",
    },
    { useProxy: useProxy }
  );

  const [f_request, f_response, f_promptAsync] = Facebook.useAuthRequest(
    {
      expoClientId: "423467809816897",
      // redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    },
    { useProxy: useProxy }
  );

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
    }
  }, [response]);

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
          Enter your phone number to continue
        </Text>
        <Text style={[CommonStyles.phoneText]}>
          Phone Number <Text style={[CommonStyles.phoneNumber]}>*</Text>
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
        style={[CommonStyles.phoneStyle]}
      />
      <Button
        title="Continue"
        onPressButton={() => {
          dispatch(setReduxStorePhone(phone));
          dispatch(
            requestOtp({ phone: "", email: "mubarakibrahim2015@gmail.com" })
          );
          navigation.navigate("SignUpOTP");
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
        disabled={phone.length < 10 ? true : false}
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
            console.log("connecting with apple...");
            const credential = AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            })
              .then((response) => {
                // signed in
                console.log(response);
              })
              .catch((e) => {
                if (e.code === "ERR_CANCELED") {
                  // handle that the user canceled the sign-in flow
                } else {
                  // handle other errors
                }
              });
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
          console.log("connecting with facebook...");
          f_promptAsync({ useProxy: useProxy });
        }}
        alt={false}
      />
      <ButtonLg
        icon={<GoogleIcon />}
        title="Connect Google Account"
        color={Colors.general.google}
        onPress={() => {
          console.log("connecting with google...");
          promptAsync({ useProxy: useProxy });
        }}
        alt={false}
      />
    </SpacerWrapper>
  );
};

export default SignUpScreen;
