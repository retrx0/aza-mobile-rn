import React, { useEffect, useRef, useState } from "react";
import { SigninStyles as styles } from "./styles";
import SegmentedInput from "../../../components/input/SegmentedInput";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../common/util/LayoutUtil";
import { SignInScreenProps } from "../../../../types";
import { View2 as View, Text2 as Text } from "../../../theme/Themed";
import api from "../../../api";
import { Alert, AppState, TouchableOpacity } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";
import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { useAppDispatch, useAppSelector } from "../../../redux";
import {
  selectUser,
  setUserEmail,
  setUserPhoneAndFullName,
  setUserPhoneNumber,
} from "../../../redux/slice/userSlice";
import { loginUserAPI } from "../../../api/auth";
import HideKeyboardOnTouch from "../../../common/util/HideKeyboardOnTouch";
import { toastError } from "../../../common/util/ToastUtil";
import {
  clearUserCredentials,
  getUserCredentialsSecure,
  storeItemSecure,
  storeUserCredentialsSecure,
} from "../../../common/util/StorageUtil";
import CommonStyles from "../../../common/styles/CommonStyles";
import ActivityScreen from "../../ActivityScreen";
import ActivityModal from "../../../components/modal/ActivityModal";
import useCountdownTimer from "../../../hooks/useCountdownTimer";
import { EMAILS } from "expo-contacts";
import { useAppAsyncStorage } from "../../../hooks/useAsyncStorage";
import useCachedResources from "../../../hooks/useCachedResources";

const forgetUser = (navigation: any) => {
  console.debug("forgetting user...");
  SecureStore.deleteItemAsync(STORAGE_KEY_JWT_TOKEN, {
    requireAuthentication: true,
  })
    .then(() => {
      navigation.navigate("Welcome");
    })
    .catch((e) => console.debug(e as Error));
  // clearUserCredentials();
};

const SignInWelcomeBackScreen = ({
  navigation,
}: SignInScreenProps<"SignInWelcomeBack">) => {
  const insets = useSafeAreaInsets();
  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  const [screenLoading, setScreenLoading] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [loginAttemptCounter, setLoginAttemptCounter] = useState(1);

  const { userPreferences } = useCachedResources();

  const {
    minutesToDisplay,
    secondsToDisplay,
    resetTimer,
    toTwoDigits,
    timerStatus,
    startTimer,
  } = useCountdownTimer(60 * 5);

  const resendCode = () => {
    resetTimer();
  };

  type UserCreds = {
    email: string;
    token: string;
    password: string;
    phoneNumber: string;
  };

  const verifyPassword = (code: string) => {
    // TODO add push notification token to the server to always keep it updated incase it change

    // TODO refactor below code
    if (loginAttemptCounter > 3) {
      if (timerStatus === "Started") {
        Alert.alert(
          `Your account has been locked, try again after ${minutesToDisplay} minutes`
        );
      } else if (timerStatus === "Stopped") {
        setLoginAttemptCounter(1);
        resetTimer();
      } else {
        startTimer();
      }
    } else {
      setScreenLoading(true);
      loginUserAPI({
        email: user.emailAddress,
        password: code,
        phoneNumber: user.phoneNumber,
      }).then((response) => {
        if (response && response !== "400") {
          storeItemSecure(STORAGE_KEY_JWT_TOKEN, response);
          storeUserCredentialsSecure(
            JSON.stringify({
              email: user.emailAddress,
              token: response,
              password: code,
              phoneNumber: user.phoneNumber,
            })
          );
          setScreenLoading(false);
          navigation.getParent()?.navigate("Root");
        } else {
          setScreenLoading(false);
          setLoginAttemptCounter((s) => s + 1);
          toastError(`Invalid passcode, attempt ${loginAttemptCounter} ⚠️`);
        }
      });
    }
  };

  useEffect(() => {
    if (!user.emailAddress && user.phoneNumber === "") {
      toastError("We encountered a problem, please login again");
      navigation.navigate("SignInRoot");
    }

    if (userPreferences && userPreferences?.loginWithFaceIDSwitch) {
    }

    LocalAuthentication.hasHardwareAsync().then((hasBiometricHardware) => {
      if (hasBiometricHardware) {
        LocalAuthentication.isEnrolledAsync().then((enrolled) => {
          if (enrolled) {
            getUserCredentialsSecure().then((creds) => {
              console.log(user);
              console.log(creds);
              if (creds) {
                const parsedCreds = JSON.parse(creds);
                dispatch(setUserEmail(parsedCreds.email));
                dispatch(setUserPhoneNumber(parsedCreds.phoneNumber));

                // TODO add check to see if account is closed or locked
                verifyPassword(parsedCreds.password);
              } else {
                toastError("Please type in your password to login");
              }
            });
          } else {
            console.debug("phone biometric not enrolled!");
          }
        });
      }
    });

    const appStateListener = AppState.addEventListener("change", (appState) => {
      if (appState === "background") setPasscode("");
    });
    return () => {
      appStateListener.remove();
    };
  }, []);

  return (
    <SpacerWrapper>
      <HideKeyboardOnTouch>
        <View>
          <Text style={styles.welcome}>Welcome back, {user.fullName}</Text>
          <Text style={styles.sentCode}>Enter your Aza password to login</Text>
          <View
            style={{
              marginTop: hp(20),
              paddingHorizontal: hp(20),
              marginBottom: hp(100),
            }}
          >
            <SegmentedInput
              value={passcode}
              onValueChanged={(code) => {
                setPasscode(code);
                if (code.length >= 6) verifyPassword(code);
              }}
              headerText="Password"
              secureInput={true}
            />
          </View>
          <View
            style={[{ alignSelf: "center", bottom: insets.bottom || hp(15) }]}
          >
            <TouchableOpacity onPress={() => forgetUser(navigation)}>
              <Text style={styles.welcomeForgetMeButton}>Forget Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </HideKeyboardOnTouch>
      <ActivityModal loading={screenLoading} />
    </SpacerWrapper>
  );
};

export default SignInWelcomeBackScreen;
