import React, { useEffect, useState } from "react";
import { Platform, Switch } from "react-native";
import { View as View, Text as Text } from "../../../theme/Themed";
import CommonStyles from "../../../common/styles/CommonStyles";
import Button from "../../../components/buttons/Button";
import BackButton from "../../../components/buttons/BackButton";
import SegmentedInput from "../../../components/input/SegmentedInput";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import Colors from "../../../constants/Colors";
import { hp } from "../../../common/util/LayoutUtil";
import useColorScheme from "../../../hooks/useColorScheme";
import { SignUpScreenProps } from "../../../../types";
import { useAppDispatch, useAppSelector } from "../../../redux";
import {
  registerUser,
  selectNewUser,
  setNewUser,
  setPassword,
} from "../../../redux/slice/newUserSlice";
import { createPinAPI, registerUserAPI } from "../../../api/user";
import { useNotifications } from "../../../hooks/useNotifications";
import * as Crypto from "expo-crypto";
import { loginUserAPI } from "../../../api/auth";
import { STORAGE_KEY_JWT_TOKEN, STORAGE_KEY_USER_CREDS } from "@env";
import { toastError } from "../../../common/util/ToastUtil";
import {
  storeItemSecure,
  storeUserCredentialsSecure,
  getItem,
  storeItem,
} from "../../../common/util/StorageUtil";
import { CEO_MESSAGE_STORAGE_KEY } from "../../../constants/AppConstants";
import { Separator } from "../../../components/divider/Separator";
import { getUserInfo } from "../../../redux/slice/userSlice";

const SignUpPasswordScreen = ({
  navigation,
  route,
}: SignUpScreenProps<"SignUpPassword">) => {
  const { passwordScreenType } = route.params;
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isUsePasscodeAsPin, setIsEnabled] = useState<boolean | undefined>(
    false
  );
  const [isConfirmScreen, setIsConfirmScreen] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [pushToken, setPushToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [ceoMessageShown, setCeoMessageShown] = useState(undefined);

  const notification = useNotifications();

  const dispatch = useAppDispatch();
  const newUser = useAppSelector(selectNewUser);

  useEffect(() => {
    if (passwordScreenType !== "Create") {
      setIsConfirmScreen(true);
      setIsEnabled(newUser.isUsePasscodeAsPin);
    }

    notification
      .registerForPushNotificationsAsync()
      .then((tok) => {
        if (tok) setPushToken(tok);
      })
      .catch((e) => {
        throw new Error(e);
      });

    getItem(CEO_MESSAGE_STORAGE_KEY).then((shown) => {
      if (shown) setCeoMessageShown(shown);
    });
  }, []);

  const handleSubmit = async () => {
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
        isUsePasscodeAsPin: isUsePasscodeAsPin,
        createdPasscode: passcode,
        thirdPartyEmailSignUp: false,
        pushToken: newUser.pushToken,
      })
    );

    if (!isConfirmScreen) {
      navigation.navigate("SignUpConfirmPassword", {
        passwordScreenType: "Confirm",
      });
    } else {
      if (passcode === newUser.createdPasscode) {
        if (isUsePasscodeAsPin) {
          createPinAPI(passcode)
            .then((res) => console.log(res))
            .catch((err: Error) => console.log(err.message));
        }
        const regitration = await registerUserAPI({
          email: newUser.emailAddress!,
          firstName: newUser.firstName!,
          lastName: newUser.lastName!,
          gender: newUser.gender === "male" ? `1` : `2`,
          newPassword: passcode,
          pushNotificationToken: newUser.pushToken,
        });
        if (regitration) {
          // Store user credentials for face id
          // storeUserCredentialsSecure(newUser.emailAddress, passcode);

          await loginUserAPI({
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
                  navigation.getParent()?.navigate("Root");
                  if (!ceoMessageShown || ceoMessageShown === "null") {
                    //show CEO Message
                    navigation.getParent()?.navigate("CEOMessage");
                    storeItem(CEO_MESSAGE_STORAGE_KEY, "true");
                  }
                  dispatch(getUserInfo());
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
        }
      } else {
        toastError("Password does not match ⚠️");
        setLoading(false);
      }
    }
  };

  return (
    <SpacerWrapper>
      <View style={{ marginLeft: 20 }}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={[CommonStyles.phoneContainer]}>
        <Text style={[CommonStyles.headerText]}>
          {passwordScreenType} Aza Password
        </Text>
      </View>
      <Text style={[CommonStyles.bodyText]}>
        The password will be used to access your account
      </Text>
      <View
        style={{
          marginTop: hp(20),
          paddingHorizontal: hp(20),
          marginBottom: hp(100),
        }}
      >
        <SegmentedInput
          value={passcode}
          secureInput
          headerText=""
          onValueChanged={(code) => setPasscode(code)}
        />
      </View>
      <View
        style={[
          CommonStyles.container,
          { bottom: hp(Platform.OS == "android" ? 300 : 400) },
        ]}
      >
        <View style={[CommonStyles.row]}>
          {/* <Text style={[CommonStyles.transaction]}>
            Use as transaction pin?
          </Text> */}

          {/* <Switch
            trackColor={{
              false: Colors.general.tertiary,
              true: Colors.general.green,
            }}
            thumbColor={isUsePasscodeAsPin ? "white" : "grey"}
            ios_backgroundColor={Colors.general.tertiary}
            onValueChange={toggleSwitch}
            value={isUsePasscodeAsPin}
            style={{
              marginLeft: hp(13),
            }}
          /> */}
        </View>
        <Separator />
        <Button
          title="Continue"
          onPressButton={handleSubmit}
          styleText={{}}
          style={[
            {
              marginTop: 5,
              width: "100%",
            },
            CommonStyles.button,
          ]}
          buttonLoading={isConfirmScreen && loading}
          disabled={passcode.length < 6 ? true : false}
        />
      </View>
    </SpacerWrapper>
  );
};

export default SignUpPasswordScreen;
