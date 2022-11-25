import React, { useState } from "react";
import { Platform } from "react-native";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../../../../assets/svg";
import ButtonLg from "../../../components/buttons/ButtonLg";
import { View } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import {
  fetchThirdPartyUserInfo,
  signInWithApple,
  signInWithFacebook,
  signInWithGoogole,
  storeAuthSessionTokens,
} from "../thirdPartyAuth";
import * as SecureStore from "expo-secure-store";
import {
  STORAGE_KEY_APPLE_TOKEN,
  STORAGE_KEY_GOOGLE_REFRESH_TOKEN,
  STORAGE_KEY_GOOGLE_TOKEN,
} from "@env";
import ActivityModal from "../../../components/modal/ActivityModal";
import useColorScheme from "../../../hooks/useColorScheme";

const ThirdPartyAuthButtons = ({
  onValidated,
  authType,
}: {
  onValidated: (email: string) => void;
  authType: "signup" | "signin";
}) => {
  const { f_promptAsync, f_response } = signInWithFacebook();
  const { g_promptAsync, g_response } = signInWithGoogole();

  const [thirdPartyUserData, setThirdPartyUserData] = useState({});

  const [loading, setLoading] = useState(false);
  const colorScheme = useColorScheme();

  React.useEffect(() => {
    if (g_response?.type === "success") {
      // Store Tokens
      storeAuthSessionTokens(
        g_response,
        STORAGE_KEY_GOOGLE_TOKEN,
        STORAGE_KEY_GOOGLE_REFRESH_TOKEN
      );
      fetchThirdPartyUserInfo(
        g_response.authentication?.accessToken,
        "Google"
      ).then((r) => {
        if (r?.data) {
          setThirdPartyUserData(r.data);
          onValidated(r.data.email);
        }
      });
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
      ).then((r) => {
        if (r?.data) {
          setThirdPartyUserData(r.data);
          onValidated(r.data.email);
        }
      });
    }
  }, [g_response, f_response]);

  return (
    <View>
      {Platform.OS === "ios" ? (
        <ButtonLg
          icon={
            <AppleIcon color={colorScheme === "dark" ? "#000000" : "#ffff"} />
          }
          title="Connect Apple Account"
          titleStyle={{ color: colorScheme === "dark" ? "#000000" : "#ffff" }}
          color={colorScheme === "dark" ? "#ffff" : "#000000"}
          onPress={() => {
            signInWithApple().then((a_response) => {
              if (a_response?.identityToken) {
                SecureStore.setItemAsync(
                  STORAGE_KEY_APPLE_TOKEN,
                  a_response.identityToken
                );
                onValidated(a_response.email!);
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
      {/* <ActivityModal loading={true} /> */}
    </View>
  );
};

export default ThirdPartyAuthButtons;
