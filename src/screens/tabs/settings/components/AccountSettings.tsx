// import { View, Text } from "react-native";
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

import { View as View, Text as Text } from "../../../../theme/Themed";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";

export default function AccountSettings({
  navigation,
}: RootTabScreenProps<"Settings">) {
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  const accountSettings = [
    {
      icon: <ChangePasswordIcon size={36} color={Colors[appTheme].mainText} />,
      name: "Change Password",
      detail: "Change your Aza account password",
      disabled: false,
      disabledIcon: (
        <ChangePasswordIcon size={36} color={Colors[appTheme].disabled} />
      ),
      handleNavigation: () =>
        navigation.navigate("Common", { screen: "ChangePassword" }),
    },

    {
      icon: (
        <ChangePhoneNumberIcon size={36} color={Colors[appTheme].mainText} />
      ),
      name: "Change Mobile Phone Number",
      detail: "Change your mobile number",
      disabled: false,
      disabledIcon: (
        <ChangePhoneNumberIcon size={36} color={Colors[appTheme].disabled} />
      ),
      handleNavigation: () =>
        navigation.navigate("Common", { screen: "ChangePhoneNumber" }),
    },
    {
      icon: <ChangeEmailIcon size={36} color={Colors[appTheme].mainText} />,
      name: "Change Email Address",
      detail: "Change your email address",
      disabled: false,
      disabledIcon: (
        <ChangeEmailIcon size={36} color={Colors[appTheme].disabled} />
      ),
      handleNavigation: () =>
        navigation.navigate("Common", { screen: "ChangeEmail" }),
    },
    {
      icon: <PrivacySettingsIcon size={36} color={Colors[appTheme].mainText} />,
      name: "Privacy Settings",
      detail: "Change your privacy settings",
      disabled: false,
      disabledIcon: (
        <PrivacySettingsIcon size={36} color={Colors[appTheme].disabled} />
      ),
      handleNavigation: () =>
        navigation.navigate("Common", { screen: "PrivacySettings" }),
    },
    // TODO TO BE IMPLEMENTED LATER
    // {
    //   icon: <LoginOptionsIcon size={36} color={Colors[colorScheme].mainText} />,
    //   name: "Login Options",
    //   detail: "Connect your social media accounts",
    //   disabled: false,
    //   disabledIcon: (
    //     <LoginOptionsIcon size={36} color={Colors[colorScheme].disabled} />
    //   ),
    //   handleNavigation: () =>
    //     navigation.navigate("Common", { screen: "LoginOptions" }),
    // },
  ];

  return (
    <View style={{ marginBottom: hp(15) }}>
      <View>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A",
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
            borderBottomWidth: 1,
            borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
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
