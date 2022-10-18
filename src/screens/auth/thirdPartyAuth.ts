import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as AuthSession from "expo-auth-session";
import * as AppleAuthentication from "expo-apple-authentication";
import {
  ENV,
  GOOGLE_EXPO_CLINET_ID,
  GOOGLE_IOS_CLINET_ID,
  GOOGLE_ANDROID_CLINET_ID,
  FACEBOOK_EXPO_CLINET_ID,
} from "@env";
import { isEnvDevelopent } from "../../common/util/AppUtil";
import axios from "axios";

const useProxy: boolean = isEnvDevelopent;

export const signInWithGoogole = () => {
  //TODO replace id's with env var
  const [request, response, promptAsync] = Google.useAuthRequest(
    {
      expoClientId:
        "323832028739-lv5fi56u3oh3rl78itctljbackutb9d2.apps.googleusercontent.com",
      iosClientId:
        "323832028739-24c0ke20u7pvufco57fcd6u6slnvi1ep.apps.googleusercontent.com",
      androidClientId:
        "323832028739-9c78ldonqnd1d0altnabgcf0h8lnbb1a.apps.googleusercontent.com",
      redirectUri: AuthSession.makeRedirectUri({
        useProxy: true,
        isTripleSlashed: true,
      }),
      // prompt: AuthSession.Prompt.SelectAccount,
    },
    { useProxy: useProxy, isTripleSlashed: true }
  );

  return {
    g_request: request,
    g_response: response,
    g_promptAsync: promptAsync,
  };
};

export const signInWithFacebook = () => {
  const [f_request, f_response, f_promptAsync] = Facebook.useAuthRequest(
    {
      expoClientId: "423467809816897",
      redirectUri: AuthSession.makeRedirectUri({
        useProxy: true,
        isTripleSlashed: true,
      }),
    },
    { useProxy: useProxy, isTripleSlashed: true }
  );

  return {
    f_request: f_request,
    f_response: f_response,
    f_promptAsync: f_promptAsync,
  };
};

export const signInWithApple = async () => {
  let credential;

  try {
    credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
    });
  } catch (e: any) {
    if (e.code === "ERR_CANCELED") {
      // handle that the user canceled the sign-in flow
    } else {
      // handle other errors
    }
  }

  console.log(credential);

  return credential;
};

export const fetchGoogleUserInfo = async (access_token: string | undefined) => {
  const result = await axios.get(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
  );
  return result;
};

export const fetchFacebookUserInfo = async (
  access_token: string | undefined
) => {
  const result = await axios.get(
    `https://graph.facebook.com/me?fields=id,name,email&access_token=${access_token}`
  );
  return result;
};
