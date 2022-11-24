import { View, Text } from "react-native";
import React from "react";
import SettingsListItem from "./SettingsListItem";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import {
  ChangeEmailIcon,
  ChangePasswordIcon,
  ChangePhoneNumberIcon,
  LoginOptionsIcon,
  PrivacySettingsIcon,
} from "../../../../../assets/svg";
import { hp } from "../../../../common/util/LayoutUtil";
import { RootTabScreenProps } from "../../../../../types";

export default function AccountSettings({
  navigation,
}: RootTabScreenProps<"Settings">) {
  const colorScheme = useColorScheme();

  const accountSettings = [
    {
      icon: (
        <ChangePasswordIcon size={36} color={Colors[colorScheme].mainText} />
      ),
      name: "Change Password",
      detail: "Change your Aza account password",
      disabled: false,
      disabledIcon: (
        <ChangePasswordIcon size={36} color={Colors[colorScheme].disabled} />
      ),
      handleNavigation: () =>
        navigation.navigate("Common", { screen: "ChangePassword" }),
    },
    {
      icon: (
        <ChangePhoneNumberIcon size={36} color={Colors[colorScheme].mainText} />
      ),
      name: "Change Mobile Phone Number",
      detail: "Change your mobile number",
      disabled: false,
      disabledIcon: (
        <ChangePhoneNumberIcon size={36} color={Colors[colorScheme].disabled} />
      ),
      handleNavigation: () =>
        navigation.navigate("Common", { screen: "ChangePhoneNumber" }),
    },
    {
      icon: <ChangeEmailIcon size={36} color={Colors[colorScheme].mainText} />,
      name: "Change Email Address",
      detail: "Change your email address",
      disabled: false,
      disabledIcon: (
        <ChangeEmailIcon size={36} color={Colors[colorScheme].disabled} />
      ),
      handleNavigation: () =>
        navigation.navigate("Common", { screen: "ChangeEmail" }),
    },
    {
      icon: (
        <PrivacySettingsIcon size={36} color={Colors[colorScheme].mainText} />
      ),
      name: "Privacy Settings",
      detail: "Change your privacy settings",
      disabled: false,
      disabledIcon: (
        <PrivacySettingsIcon size={36} color={Colors[colorScheme].disabled} />
      ),
      handleNavigation: () =>
        navigation.navigate("Common", { screen: "PrivacySettings" }),
    },
    {
      icon: <LoginOptionsIcon size={36} color={Colors[colorScheme].mainText} />,
      name: "Login Options",
      detail: "Connect your social media accounts",
      disabled: false,
      disabledIcon: (
        <LoginOptionsIcon size={36} color={Colors[colorScheme].disabled} />
      ),
      handleNavigation: () =>
        navigation.navigate("Common", { screen: "LoginOptions" }),
    },
  ];

  return (
    <View>
      <View>
        <Text
          style={{
            color: colorScheme === "dark" ? "#E7E9EA" : "#000000",
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: hp(14),
            fontWeight: "400",
            marginLeft: hp(5),
          }}>
          Account Settings
        </Text>
        <View
          style={{
            backgroundColor: "transparent",
            marginTop: hp(10),
            borderBottomWidth: 0.6,
            borderBottomColor: Colors[colorScheme].separator,
          }}
        />
      </View>

      {accountSettings.map(
        (
          { icon, detail, name, handleNavigation, disabled, disabledIcon },
          i
        ) => (
          <SettingsListItem
            detail={detail}
            icon={icon}
            name={name}
            disabled={disabled}
            disabledIcon={disabledIcon}
            handleNavigation={handleNavigation}
            key={i}
          />
        )
      )}
    </View>
  );
}
