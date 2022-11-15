import React, { useEffect, useRef } from "react";
import { SigninStyles as styles } from "./styles";
import Button from "../../../components/buttons/Button";
import SegmentedInput from "../../../components/input/SegmentedInput";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../common/util/LayoutUtil";
import { SignInScreenProps } from "../../../../types";
import { View, Text } from "../../../components/Themed";
import { UserData } from "../../../constants/userData";
import api from "../../../api";
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";
import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { useAppSelector } from "../../../redux";
import { selectUser } from "../../../redux/slice/userSlice";
import { loginUserAPI } from "../../../api/auth";
import Toast from "react-native-toast-message";
import HideKeyboardOnTouch from "../../../common/util/HideKeyboardOnTouch";

type WelcomeOTProp = {
  otpCode: string;
};

const verifyPasscode = (code: string, navigation: any, user: any) => {
  //todo add push notification token to the server to always keep it updated incase it changes

  let loginAttemptCounter = 0;

  if (code.length === 6) {
    console.log("verifying passcode...");
    if (loginAttemptCounter > 3) {
    } else {
      loginUserAPI({
        email: user.email,
        password: code,
        phoneNumber: user.phoneNumber,
      }).then((jwt) => {
        if (jwt) {
          navigation.navigate("Root");
          SecureStore.setItemAsync(STORAGE_KEY_JWT_TOKEN, jwt);
        } else {
          Toast.show({
            type: "error",
            text1: `Invalid passcode, attempt ${++loginAttemptCounter}`,
          });
        }
      });
    }
  }
};

const forgetUser = (navigation: any) => {
  console.log("forgetting user...");
  SecureStore.deleteItemAsync(STORAGE_KEY_JWT_TOKEN, {
    requireAuthentication: true,
  })
    .then(() => {
      navigation.navigate("Welcome");
    })
    .catch((e) => console.log(e));
};

const SignInWelcomeBackScreen = ({
  otpCode,
  navigation,
}: WelcomeOTProp & SignInScreenProps<"SignInWelcomeBack">) => {
  const insets = useSafeAreaInsets();

  const user = useAppSelector(selectUser);

  useEffect(() => {
    LocalAuthentication.hasHardwareAsync().then((hasBiometricHardware) => {
      if (hasBiometricHardware) {
        LocalAuthentication.isEnrolledAsync().then((enrolled) => {
          if (enrolled) {
            LocalAuthentication.authenticateAsync({
              promptMessage: "Authenticate to open AZA",
            }).then((result) => {
              if (result.success) {
                navigation.getParent()?.navigate("Root");
              } else {
              }
            });
          }
        });
      }
    });
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
              value={otpCode}
              onValueChanged={(code) => verifyPasscode(code, navigation, user)}
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
    </SpacerWrapper>
  );
};

export default SignInWelcomeBackScreen;
