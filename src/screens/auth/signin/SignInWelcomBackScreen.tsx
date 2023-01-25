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
import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { useAppDispatch, useAppSelector } from "../../../redux";
import {
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

const SignInWelcomeBackScreen = ({
  navigation,
}: SignInScreenProps<"SignInWelcomeBack">) => {
  const insets = useSafeAreaInsets();
  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  const [screenLoading, setScreenLoading] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [loginAttemptCounter, setLoginAttemptCounter] = useState(1);
  const [_tmpCreds, setTmpCreds] = useState<{
    email: string;
    phoneNumber: string;
    fullName: string;
  }>({
    email: user.emailAddress,
    fullName: user.fullName,
    phoneNumber: user.phoneNumber,
  });

  const { userPreferences } = useCachedResources();

  const {
    minutesToDisplay,
    secondsToDisplay,
    resetTimer,
    toTwoDigits,
    timerStatus,
    startTimer,
  } = useCountdownTimer(60 * 5);

  interface IUserCreds {
    email: string;
    token: string;
    password: string;
    phoneNumber: string;
    fullName: string;
  }

  const forgetUser = () => {
    console.debug("forgeting user!");
    SecureStore.deleteItemAsync(STORAGE_KEY_JWT_TOKEN, {
      requireAuthentication: true,
    })
      .then(() => {
        navigation.getParent()?.navigate("Welcome");
      })
      .catch((e) => console.debug(e as Error));
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
            storeUserCredentialsSecure(
              JSON.stringify({
                email: email,
                token: jwt,
                password: code,
                phoneNumber: phoneNumber,
                fullName: fullName,
              })
            );
            dispatch(getUserInfo());
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

      // if (_creds) {
      //   const parsedCreds = JSON.parse(_creds);
      //   dispatch(setUserEmail(parsedCreds.email));
      //   dispatch(setUserPhoneNumber(parsedCreds.phoneNumber));
      //   dispatch(setUserFullName(parsedCreds.fullName));
      // }

      // TODO add check to see if account is closed or locked

      // Check if biometric is enabled
      if (hasBiometricHardware && biometricEnrolled) {
        console.debug("biometric enroled");
        // Check if user enabled biometrics
        if (userPreferences && userPreferences?.loginWithFaceIDSwitch) {
          const _creds = await getUserCredentialsSecure({
            requireAuthentication: true,
          });

          if (_creds) {
            const parsedCreds = JSON.parse(_creds);
            // login
            verifyPassword(
              parsedCreds.email,
              parsedCreds.phoneNumber,
              parsedCreds.password,
              parsedCreds.fullName
            );
          }
        }
      } else {
        console.debug("biometric not enroled!");
        // Check if redux stored user email and phone number for login
        if (!user.emailAddress && user.phoneNumber === "") {
          // try to get and set email and phone number
          // return user to main login again
          toastError("We encountered a problem, please login again");
          navigation.navigate("SignInRoot");
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
