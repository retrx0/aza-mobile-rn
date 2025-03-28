// Separation of Concern

import { STORAGE_KEY_JWT_TOKEN, STORAGE_KEY_USER_CREDS } from "@env";
import { useState } from "react";
import { SignInScreenProps } from "../../../../types/types.navigation";
import { loginUserAPI } from "../../../../api/auth";
import { storeItemSecure } from "../../../../common/util/StorageUtil";
import { toastError } from "../../../../common/util/ToastUtil";
import useCountdownTimer from "../../../../hooks/useCountdownTimer";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import { selectAppPreference } from "../../../../redux/slice/preferenceSlice";
import {
  getUserAccountDetails,
  getUserAccountMetadata,
  getUserInfo,
  getUserTransactions,
  selectUser,
} from "../../../../redux/slice/userSlice";
import NetInfo from "@react-native-community/netinfo";
import {
  setEmail,
  setNewUser,
  setPhone,
  setPushToken,
} from "../../../../redux/slice/newUserSlice";
import useAppBiometricAuthentication from "../../../../hooks/useAppBiometricAuthentication";
import { useNavigation } from "@react-navigation/native";
import { updateUserNotificationToken } from "../../../../api/user";
import { useNotifications } from "../../../../hooks/useNotifications";
import { IUserInfoResponse } from "../../../../libs/response";

// All sign in logic goes here

const useSignIn = () => {
  const userPreferences = useAppSelector(selectAppPreference);
  const user = useAppSelector(selectUser);
  const [loginAttemptCounter, setLoginAttemptCounter] = useState(1);
  const [screenLoading, setScreenLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { authenticateWithBiometrics } = useAppBiometricAuthentication();

  const _nav = useNavigation();

  // const {
  //   minutesToDisplay,
  //   secondsToDisplay,
  //   resetTimer,
  //   toTwoDigits,
  //   timerStatus,
  //   startTimer,
  // } = useCountdownTimer(60 * 5);

  const { registerForPushNotificationsAsync } = useNotifications();

  const verifyPassword = async (
    email: string,
    phoneNumber: string,
    code: string,
    fullName: string,
    { navigation }: SignInScreenProps<"SignInWelcomeBack">
  ) => {
    // TODO refactor below code

    const netInfo = await NetInfo.fetch();

    if (loginAttemptCounter > 5) {
      // if (timerStatus === "Started") {
      //   toastError(
      //     `Your account has been locked, try again after ${minutesToDisplay} minutes`
      //   );
      // } else if (timerStatus === "Stopped") {
      //   setLoginAttemptCounter(1);
      //   resetTimer();
      // } else {
      //   startTimer();
      // }
      toastError(`Too many failed login attempts`);
    } else {
      if (netInfo.isConnected && netInfo.isInternetReachable) {
        setScreenLoading(true);

        const jwt = await loginUserAPI({
          email: email,
          password: code,
          phoneNumber: phoneNumber,
        }).catch((e) => {
          setScreenLoading(false);
        });

        if (jwt) {
          try {
            storeItemSecure(STORAGE_KEY_JWT_TOKEN, jwt);
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

            // Fetch user info
            const info = await dispatch(getUserInfo());
            if (info.meta.requestStatus === "fulfilled") {
              storeItemSecure(
                STORAGE_KEY_USER_CREDS,
                JSON.stringify({
                  email: email,
                  token: jwt,
                  password: code,
                  phoneNumber: phoneNumber,
                  fullName: fullName,
                  pictureUrl: user.pictureUrl,
                })
              );
              const { walletNumber } = info.payload as IUserInfoResponse;
              if (walletNumber !== null) {
                await dispatch(getUserAccountDetails());
                dispatch(getUserTransactions({ accountNumber: walletNumber }));
                dispatch(
                  getUserAccountMetadata({ accountNumber: walletNumber })
                );
              }

              setScreenLoading(false);
              // TODO replace navigate() with replace()
              navigation.getParent()?.navigate("Root");
            } else {
              setScreenLoading(false);
              toastError("There was a problem fetching your data!");
            }
            // navigation.getParent()?.navigate("Root");
          } catch (err) {
            setScreenLoading(false);
            toastError(
              "There is an issue loggin you in, please try again and confirm the app is giving the right permissions"
            );
          }

          // TODO add push notification token to the server to always keep it updated incase it change

          registerForPushNotificationsAsync().then((token) => {
            if (token !== user.pushToken) {
              updateUserNotificationToken(token).catch((e) =>
                console.error("Unable to update push token")
              );
              dispatch(setPushToken(token));
              console.debug("your notification token was updated!");
            }
          });
        } else {
          setScreenLoading(false);
          setLoginAttemptCounter((s) => s + 1);
          toastError(`Invalid passcode, attempt ${loginAttemptCounter} ⚠️`);
        }
      } else {
        toastError("Internet connection is not reacheable!");
      }
    }
  };

  const handleSignBack = async ({
    navigation,
    route,
  }: SignInScreenProps<"SignInWelcomeBack">) => {
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

      await authenticateWithBiometrics(
        userPreferences && userPreferences?.loginWithFaceIDSwitch
      ).then((authenticated) => {
        if (authenticated)
          verifyPassword(
            cachedUser.email,
            cachedUser.phoneNumber,
            cachedUser.password,
            cachedUser.fullName,
            { navigation, route }
          );
      });
    }
  };

  const handleForgotPassword = ({
    navigation,
    route,
  }: SignInScreenProps<"SignInWelcomeBack">) => {
    const cacheduser = route.params.cachedUser;

    // console.log(
    //   navigation.getParent<SignInScreenProps<"SignInWelcomeBack">>().navigation
    // );
    if (cacheduser) {
      dispatch(setEmail(cacheduser.email));
      dispatch(setPhone(cacheduser.phoneNumber));
      navigation.getParent()?.navigate("SignUp", {
        screen: "SignUpOTP",
        params: { otpScreenType: "email" },
      });
    }
  };

  return {
    handleSignBack,
    verifyPassword,
    screenLoading,
    setScreenLoading,
    handleForgotPassword,
    userPreferences,
  };
};

export default useSignIn;
