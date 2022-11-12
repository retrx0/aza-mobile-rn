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

// import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
// import { selectNewUser, setNewUser, setPassword } from "../../../redux/slice/newUserSlice";

// import { useAppDispatch, useAppSelector } from "../../../redux";
// import { selectNewUser, setNewUser } from "../../../redux/slice/newUserSlice";

const SignUpPasswordScreen = ({
  navigation,
  route,
}: SignUpScreenProps<"SignUpPassword">) => {
  const { passwordScreenType } = route.params;
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isUsePasscodeAsPin, setIsEnabled] = useState<boolean | undefined>(
    false
  );
  const newUserData = useAppSelector(selectNewUser);
  const [isConfirmScreen, setIsConfirmScreen] = useState(false);

  useEffect(() => {
    if (passwordScreenType !== "Create") {
      setIsConfirmScreen(true);
      setIsEnabled(newUserData.isUsePasscodeAsPin);
    }
  }, []);

  const colorScheme = useColorScheme();

  const [passcode, setPasscode] = useState("");

  const switchColor = Colors[colorScheme].backgroundSecondary;
  const switchOnColor = Colors[colorScheme].success;

  const dispatch = useAppDispatch();

  const newUser = useAppSelector(selectNewUser);
  const { firstname, lastname } = useAppSelector((state) => state.newUser);

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
              })
            );

            if (!isConfirmScreen) {
              navigation.navigate("SignUpConfirmPassword", {
                passwordScreenType: "Confirm",
              });
            } else {
              if (passcode === newUserData.createdPasscode) {
                // dispatch(setPassword({password:passcode}))
                console.log(firstname, lastname, "NAMEE");
                dispatch(
                  registerUser({
                    firstname,
                    lastname,
                    password: passcode,
                  })
                );
                navigation.getParent()?.navigate("Root");
              } else {
                alert("Password does not match");
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
