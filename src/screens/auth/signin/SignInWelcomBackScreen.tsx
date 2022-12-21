import React, { useEffect, useRef, useState } from "react";
import { SigninStyles as styles } from "./styles";
import SegmentedInput from "../../../components/input/SegmentedInput";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../common/util/LayoutUtil";
import { SignInScreenProps } from "../../../../types";
import { View, Text } from "../../../components/Themed";
import api from "../../../api";
import { Alert, AppState, TouchableOpacity } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";
import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { useAppSelector } from "../../../redux";
import { selectUser } from "../../../redux/slice/userSlice";
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

const forgetUser = (navigation: any) => {
  console.debug("forgetting user...");
  SecureStore.deleteItemAsync(STORAGE_KEY_JWT_TOKEN, {
    requireAuthentication: true,
  })
    .then(() => {
      navigation.navigate("Welcome");
    })
    .catch((e) => console.log(e));
  clearUserCredentials();
};

const SignInWelcomeBackScreen = ({
  navigation,
}: SignInScreenProps<"SignInWelcomeBack">) => {
  const insets = useSafeAreaInsets();
  const user = useAppSelector(selectUser);

  const [screenLoading, setScreenLoading] = useState(false);

  const [passcode, setPasscode] = useState("");

  const [loginAttemptCounter, setLoginAttemptCounter] = useState(1);

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

  const verifyPasscode = (code: string, navigation: any, user: any) => {
    // TODO add push notification token to the server to always keep it updated incase it change

    // TODO refactor below code

    if (loginAttemptCounter > 3) {
      if (timerStatus === "Started") {
        Alert.alert(
          `Your account has been locked, try again after ${minutesToDisplay} minutes`
        );
      } else {
        startTimer();
      }
    } else {
      setScreenLoading(true);
      loginUserAPI({
        email: user.email,
        password: code,
        phoneNumber: user.phoneNumber,
      }).then((jwt) => {
        if (jwt) {
          storeItemSecure(STORAGE_KEY_JWT_TOKEN, jwt);
          setScreenLoading(false);
          navigation.navigate("Root");
        } else {
          setScreenLoading(false);
          setLoginAttemptCounter((s) => s + 1);
          toastError(`Invalid passcode, attempt ${loginAttemptCounter} ⚠️`);
        }
      });
    }
  };

  useEffect(() => {
    // storeUserCredentialsSecure("email", "passcode");

    // getUserCredentialsSecure().then((creds) => {
    //   console.log(creds);
    // });

    LocalAuthentication.hasHardwareAsync().then((hasBiometricHardware) => {
      if (hasBiometricHardware) {
        LocalAuthentication.isEnrolledAsync().then((enrolled) => {
          if (enrolled) {
            LocalAuthentication.authenticateAsync({
              promptMessage: "Authenticate to open AZA",
            }).then((result) => {
              if (result.success) {
                // getUserCredentialsSecure().then((r) => console.log(r));
                //get user credentials from keychain
                getUserCredentialsSecure().then((creds) => {
                  console.log(creds);
                  if (creds) {
                    verifyPasscode(creds.password, navigation, user);
                  }
                });
              } else {
              }
            });
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
                if (code.length >= 6) verifyPasscode(code, navigation, user);
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
