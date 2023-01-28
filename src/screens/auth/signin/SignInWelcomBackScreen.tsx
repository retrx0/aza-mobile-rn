import React, { useEffect, useRef, useState } from "react";
import { SigninStyles as styles } from "./styles";
import SegmentedInput from "../../../components/input/SegmentedInput";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../common/util/LayoutUtil";
import { SignInScreenProps } from "../../../../types";
import { View as View, Text as Text } from "../../../theme/Themed";
import api from "../../../api";
import { Alert, AppState, TouchableOpacity } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";
import { STORAGE_KEY_JWT_TOKEN, STORAGE_KEY_USER_CREDS } from "@env";
import { useAppDispatch, useAppSelector } from "../../../redux";
import {
  getUserAccount,
  getUserInfo,
  selectUser,
  setUserEmail,
  setUserFullName,
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
import ActivityModal from "../../../components/modal/ActivityModal";
import useCountdownTimer from "../../../hooks/useCountdownTimer";
import { useAppAsyncStorage } from "../../../hooks/useAsyncStorage";
import useCachedResources from "../../../hooks/useCachedResources";
import { IUserCred } from "../../../redux/types";

const SignInWelcomeBackScreen = ({
  navigation,
  route,
}: SignInScreenProps<"SignInWelcomeBack">) => {
  const insets = useSafeAreaInsets();
  const user = useAppSelector(selectUser);
  const cachedUser = route.params.cachedUser;

  const dispatch = useAppDispatch();

  const [screenLoading, setScreenLoading] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [loginAttemptCounter, setLoginAttemptCounter] = useState(1);
  const [_tmpCreds, setTmpCreds] = useState<IUserCred>();

  const { userPreferences } = useCachedResources();

  const {
    minutesToDisplay,
    secondsToDisplay,
    resetTimer,
    toTwoDigits,
    timerStatus,
    startTimer,
  } = useCountdownTimer(60 * 5);

  const forgetUser = async () => {
    console.debug("forgeting user!");
    await SecureStore.deleteItemAsync(STORAGE_KEY_JWT_TOKEN);
    await SecureStore.deleteItemAsync(STORAGE_KEY_USER_CREDS);

    navigation.getParent()?.navigate("Welcome");
    // clearUserCredentials();
  };

  const verifyPassword = async (
    email: string,
    phoneNumber: string,
    code: string,
    fullName: string
  ) => {
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
      await loginUserAPI({
        email: email,
        password: code,
        phoneNumber: phoneNumber,
      })
        .then((jwt) => {
          if (jwt) {
            storeItemSecure(STORAGE_KEY_JWT_TOKEN, jwt, {
              requireAuthentication: false,
            });
            storeItemSecure(
              STORAGE_KEY_USER_CREDS,
              JSON.stringify({
                email: email,
                token: jwt,
                password: code,
                phoneNumber: phoneNumber,
                fullName: fullName,
              }),
              { authenticationPrompt: "storing" }
            );
            dispatch(getUserInfo());
            dispatch(getUserAccount());
            setScreenLoading(false);
            navigation.getParent()?.navigate("Root");
          } else {
            setScreenLoading(false);
            toastError("There was a problem logging you in, please try again!");
          }
        })
        .catch((err) => {
          setScreenLoading(false);
          setLoginAttemptCounter((s) => s + 1);
          toastError(`Invalid passcode, attempt ${loginAttemptCounter} ⚠️`);
        });
    }
  };

  useEffect(() => {
    setPasscode("");

    const handleSignBack = async () => {
      const hasBiometricHardware = await LocalAuthentication.hasHardwareAsync();
      const biometricEnrolled = await LocalAuthentication.isEnrolledAsync();

      // TODO add check to see if account is closed or locked

      // Check if redux stored user email and phone number for login
      if (!cachedUser) {
        // try to get and set email and phone number
        // return user to main login again
        if (!user.emailAddress && user.phoneNumber === "") {
          toastError("We encountered a problem, please login again");
          navigation.getParent()?.navigate("Welcome");
        }
      } else {
        // Check if biometric is enabled
        if (hasBiometricHardware && biometricEnrolled) {
          console.debug("biometric enroled");
          // Check if user enabled biometrics
          if (userPreferences && userPreferences?.loginWithFaceIDSwitch) {
            const authenticated = await LocalAuthentication.authenticateAsync();
            if (authenticated.success) {
              // biometrics authenticated
              verifyPassword(
                cachedUser.email,
                cachedUser.phoneNumber,
                cachedUser.password,
                cachedUser.fullName
              );
            }
          }
        } else {
          console.debug("biometric not enroled!");
          setTmpCreds(cachedUser);
        }
      }
    };

    handleSignBack();
  }, []);

  useEffect(() => {
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
                if (code.length >= 6)
                  verifyPassword(
                    user.emailAddress,
                    user.phoneNumber,
                    code,
                    user.fullName
                  );
              }}
              headerText="Password"
              secureInput={true}
            />
          </View>
          <View
            style={[{ alignSelf: "center", bottom: insets.bottom || hp(15) }]}
          >
            <TouchableOpacity onPress={forgetUser}>
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
