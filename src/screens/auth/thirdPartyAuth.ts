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
import * as SecureStore from "expo-secure-store";

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
    console.error(e as Error);
  }

  console.log(credential);

  return credential;
};

const signOutAllAccount = () => {
  // AppleAuthentication.signOutAsync()
  //   .then((r) => console.debug("Apple account signed out"))
  //   .catch((e) => console.error(e));
};

export const fetchThirdPartyUserInfo = async (
  access_token: string | undefined,
  thirdParty: "Google" | "Facebook"
) => {
  try {
    const result = await axios.get(
      thirdParty === "Google"
        ? `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
        : `https://graph.facebook.com/me?fields=id,name,first_name,last_name,email,picture&access_token=${access_token}`
    );
    return result;
  } catch (e) {
    console.error("Error fetching thrid party info: ", e as Error);
  }

  return null;
};

export const storeAuthSessionTokens = (
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
