// SOC

import { STORAGE_KEY_JWT_TOKEN, STORAGE_KEY_USER_CREDS } from "@env";
import { useEffect, useState } from "react";
import { SignUpScreenProps } from "../../../../../types";
import { loginUserAPI } from "../../../../api/auth";
import { createPinAPI, registerUserAPI } from "../../../../api/user";
import {
  storeItemSecure,
  storeItem,
  getItem,
} from "../../../../common/util/StorageUtil";
import { toastError } from "../../../../common/util/ToastUtil";
import { CEO_MESSAGE_STORAGE_KEY } from "../../../../constants/AppConstants";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import {
  selectNewUser,
  setNewUser,
} from "../../../../redux/slice/newUserSlice";
import { getUserInfo } from "../../../../redux/slice/userSlice";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [ceoMessageShown, setCeoMessageShown] = useState(undefined);
  const [isConfirmScreen, setIsConfirmScreen] = useState(false);
  const dispatch = useAppDispatch();
  const newUser = useAppSelector(selectNewUser);

  useEffect(() => {
    getItem(CEO_MESSAGE_STORAGE_KEY).then((shown) => {
      if (shown) setCeoMessageShown(shown);
    });
  }, []);

  const handleSignUp = async (
    passcode: string,
    {
      navigation,
      route,
    }: SignUpScreenProps<"SignUpPassword" | "SignUpConfirmPassword">
  ) => {
    const { passwordScreenType } = route.params;

    if (passwordScreenType !== "Create") {
      setIsConfirmScreen(true);
    }
    // dispatch changes
    // TODO replace with expo-secure-store or react-native-encrypted-storage
    setLoading(true);
    dispatch(
      setNewUser({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        emailAddress: newUser.emailAddress,
        phoneNumber: newUser.phoneNumber,
        gender: newUser.gender,
        isUsePasscodeAsPin: false,
        createdPasscode: passcode,
        thirdPartyEmailSignUp: false,
        pushToken: newUser.pushToken,
      })
    );

    if (passwordScreenType === "Create") {
      navigation.navigate("SignUpConfirmPassword", {
        passwordScreenType: "Confirm",
      });
    } else {
      if (passcode === newUser.createdPasscode) {
        // if (isUsePasscodeAsPin) {
        //   createPinAPI(passcode)
        //     .then((res) => console.log(res))
        //     .catch((err: Error) => console.log(err.message));
        // }
        await registerUserAPI({
          email: newUser.emailAddress!,
          firstName: newUser.firstName!,
          lastName: newUser.lastName!,
          gender: newUser.gender,
          newPassword: passcode,
          pushNotificationToken: newUser.pushToken,
        }).then((regitration) => {
          // Store user credentials for face id
          // storeUserCredentialsSecure(newUser.emailAddress, passcode);
          if (regitration) {
            loginUserAPI({
              email: newUser.emailAddress,
              phoneNumber: newUser.phoneNumber,
              password: passcode,
            })
              .then((jwt) => {
                if (jwt) {
                  try {
                    storeItemSecure(STORAGE_KEY_JWT_TOKEN, jwt);
                    storeItemSecure(
                      STORAGE_KEY_USER_CREDS,
                      JSON.stringify({
                        email: newUser.emailAddress,
                        token: jwt,
                        password: passcode,
                        phoneNumber: newUser.phoneNumber,
                        fullName: newUser.firstName + " " + newUser.lastName,
                      })
                    );
                    dispatch(getUserInfo());
                    navigation.getParent()?.navigate("Root");
                    if (!ceoMessageShown || ceoMessageShown === "null") {
                      //show CEO Message
                      navigation.getParent()?.navigate("CEOMessage");
                      storeItem(CEO_MESSAGE_STORAGE_KEY, "true");
                    }
                  } catch (e) {
                    console.debug(
                      "There was a problem logging user in after signup",
                      e
                    );
                  }
                }
                setLoading(false);
              })
              .catch((error) => {
                setLoading(false);
                toastError(
                  "There was a problem logging you in, please try again!"
                );
              });
          } else {
            toastError("User already registered!");
            setLoading(false);
          }
        });
      } else {
        toastError("Password does not match ⚠️");
        setLoading(false);
      }
    }
  };

  return { loading, isConfirmScreen, setLoading, handleSignUp };
};

export default useSignUp;
