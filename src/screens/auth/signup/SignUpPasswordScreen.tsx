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
import Toast from "react-native-toast-message";
import { useNotifications } from "../../../hooks/useNotifications";
import * as Crypto from "expo-crypto";

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

    // const digest = Crypto.digestStringAsync(
    //   Crypto.CryptoDigestAlgorithm.SHA256,
    //   'GitHub stars are neat 🌟'
    // );

    notification
      .registerForPushNotificationsAsync()
      .then((tok) => {
        if (tok) setPushToken(tok);
      })
      .catch((e) => console.error(e));
  }, []);

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
            dispatch(
              setNewUser({
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                email: newUser.email,
                phone: newUser.phone,
                gender: newUser.gender,
                isUsePasscodeAsPin: isUsePasscodeAsPin,
                createdPasscode: passcode,
                thirdPartyEmailSignUp: false,
              })
            );

            if (!isConfirmScreen) {
              navigation.navigate("SignUpConfirmPassword", {
                passwordScreenType: "Confirm",
              });
            } else {
              if (passcode === newUser.createdPasscode) {
                // dispatch(setPassword({password:passcode}))
                console.log(newUser.firstname, newUser.lastname, "NAMEE");
                registerUserAPI({
                  email: newUser.email!,
                  firstName: newUser.firstname!,
                  lastName: newUser.lastname!,
                  gender: newUser.gender!,
                  newPassword: newUser.password!,
                  pushNotificationToken: "",
                })
                  .then((_res) => {
                    navigation.getParent()?.navigate("Root");
                  })
                  .catch((e) => {
                    console.error("Error " + e);
                    Toast.show({
                      type: "error",
                      text1: "There was a problem creating your account ⚠️",
                    });
                  });
              } else {
                Toast.show({
                  type: "error",
                  text1: "Password does not match ⚠️",
                });
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
