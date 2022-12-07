import React, { useEffect, useState } from "react";
import { Platform, Switch } from "react-native";
import { Text, View } from "../../../components/Themed";
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
import { registerUserAPI } from "../../../api/user";
import { useNotifications } from "../../../hooks/useNotifications";
import * as Crypto from "expo-crypto";
import { loginUserAPI } from "../../../api/auth";
import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { toastError } from "../../../common/util/ToastUtil";
import { storeItemSecure } from "../../../common/util/StorageUtil";

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
  const [hashedPasscode, setHashedPasscode] = useState("");
  const [pushToken, setPushToken] = useState("");
  const [loading, setLoading] = useState(false);

  const colorScheme = useColorScheme();
  const notification = useNotifications();

  const switchColor = Colors[colorScheme].backgroundSecondary;
  const switchOnColor = Colors[colorScheme].success;

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
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      passcode
    ).then((hashed) => {
      setHashedPasscode(hashed);
      console.log(hashed);
    });
  }, [passcode]);

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
          <Text style={[CommonStyles.transaction]}>
            Use as transaction pin?
          </Text>

          <Switch
            trackColor={{ false: switchColor, true: switchOnColor }}
            thumbColor={isUsePasscodeAsPin ? "white" : "grey"}
            ios_backgroundColor={switchColor}
            onValueChange={toggleSwitch}
            value={isUsePasscodeAsPin}
            style={{
              marginLeft: hp(13),
            }}
          />
        </View>
        <Separator />
        <Button
          title="Continue"
          onPressButton={() => {
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
                createdPasscode: hashedPasscode,
                thirdPartyEmailSignUp: false,
                pushToken: newUser.pushToken,
              })
            );

            if (!isConfirmScreen) {
              navigation.navigate("SignUpConfirmPassword", {
                passwordScreenType: "Confirm",
              });
            } else {
              if (hashedPasscode === newUser.createdPasscode) {
                // dispatch(setPassword({password:passcode}))
                registerUserAPI({
                  email: newUser.emailAddress!,
                  firstName: newUser.firstName!,
                  lastName: newUser.lastName!,
                  gender: newUser.gender === "male" ? `1` : `2`,
                  newPassword: hashedPasscode,
                  pushNotificationToken: newUser.pushToken,
                }).then((_res) => {
                  if (_res) {
                    loginUserAPI({
                      email: newUser.emailAddress,
                      phoneNumber: newUser.phoneNumber,
                      password: hashedPasscode,
                    }).then((_jwt) => {
                      if (_jwt) {
                        navigation.getParent()?.navigate("Root");
                        storeItemSecure(STORAGE_KEY_JWT_TOKEN, _jwt);
                      }
                      setLoading(false);
                    });
                  }
                  setLoading(false);
                });
              } else {
                toastError("Password does not match ⚠️");
                setLoading(false);
              }
            }
          }}
          styleText={{
            color: Colors[colorScheme].buttonText,
          }}
          style={[
            {
              backgroundColor: Colors[colorScheme].button,
              marginTop: 5,
              width: 365,
            },
            CommonStyles.button,
          ]}
          willCallAsync={isConfirmScreen && loading}
          disabled={passcode.length < 6 ? true : false}
        />
      </View>
    </SpacerWrapper>
  );
};

const Separator = () => {
  return (
    <View
      lightColor={Colors.light.separator}
      darkColor={Colors.dark.separator}
      style={[CommonStyles.separator]}
    />
  );
};

export default SignUpPasswordScreen;
