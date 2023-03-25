// Separation of Concern

import { STORAGE_KEY_JWT_TOKEN, STORAGE_KEY_USER_CREDS } from "@env";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AxiosError } from "axios";
import * as LocalAuthentication from "expo-local-authentication";
import { useState } from "react";
import { SignInScreenProps, SignInStackParamList } from "../../../../../types";
import { loginUserAPI } from "../../../../api/auth";
import { storeItemSecure } from "../../../../common/util/StorageUtil";
import { toastError } from "../../../../common/util/ToastUtil";
import useCountdownTimer from "../../../../hooks/useCountdownTimer";
import navigation from "../../../../navigation";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import { selectAppPreference } from "../../../../redux/slice/preferenceSlice";
import { getUserInfo, selectUser } from "../../../../redux/slice/userSlice";

// All sign in logic goes here

const useSignIn = () => {
  const userPreferences = useAppSelector(selectAppPreference);
  const user = useAppSelector(selectUser);
  const [loginAttemptCounter, setLoginAttemptCounter] = useState(1);
  const [screenLoading, setScreenLoading] = useState(false);
  const dispatch = useAppDispatch();

  const {
    minutesToDisplay,
    secondsToDisplay,
    resetTimer,
    toTwoDigits,
    timerStatus,
    startTimer,
  } = useCountdownTimer(60 * 5);

  const verifyPassword = async (
    email: string,
    phoneNumber: string,
    code: string,
    fullName: string,
    { navigation }: SignInScreenProps<"SignInWelcomeBack">
  ) => {
    // TODO add push notification token to the server to always keep it updated incase it change
    // TODO refactor below code
    if (loginAttemptCounter > 3) {
      if (timerStatus === "Started") {
        toastError(
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
            try {
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
                })
              );
              dispatch(getUserInfo());
              // dispatch(
              //   getUserAccount({ accountNumber: user.azaAccountNumber })
              // );
              setScreenLoading(false);
              navigation.getParent()?.navigate("Root");
            } catch (error) {
              toastError(
                "There is an issue loggin you in, please try again and confirm the app is giving the right permissions!"
              );
            }
          } else {
            setScreenLoading(false);
            toastError("Invalid passcode!");
          }
        })
        .catch((err: AxiosError) => {
          setScreenLoading(false);
          setLoginAttemptCounter((s) => s + 1);
          toastError(`Invalid passcode, attempt ${loginAttemptCounter} ⚠️`);
          // if (err.response?.status === 400) {
          // } else {
          //   toastError(
          //     "There was a problem logging you in, please try again if problem persist contact customer support"
          //   );
          // }
        });
    }
  };

  const handleSignBack = async ({
    navigation,
    route,
  }: SignInScreenProps<"SignInWelcomeBack">) => {
    const hasBiometricHardware = await LocalAuthentication.hasHardwareAsync();
    const biometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    const cachedUser = route.params.cachedUser;

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
      if (hasBiometricHardware) {
        console.debug("biometric enroled");
        // Check if user enabled biometrics
        if (userPreferences && userPreferences?.loginWithFaceIDSwitch) {
          console.log("face id preference is enabled");
          const authenticated = await LocalAuthentication.authenticateAsync();
          if (authenticated.success) {
            // biometrics authenticated
            verifyPassword(
              cachedUser.email,
              cachedUser.phoneNumber,
              cachedUser.password,
              cachedUser.fullName,
              { navigation, route }
            );
          }
        }
      } else {
        console.debug("biometric not enroled!");
      }
    }
  };

  return { handleSignBack, verifyPassword, screenLoading, setScreenLoading };
};

export default useSignIn;
