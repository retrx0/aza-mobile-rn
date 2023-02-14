import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import * as StatusBar from "expo-status-bar";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";

import {
  CheckIcon,
  DarkModeIcon,
  LightModeIcon,
  SystemModeIcon,
} from "../../../../../assets/svg";

import Divider from "../../../../components/divider/Divider";
import { View as View, Text as Text } from "../../../../theme/Themed";

import { useAppDispatch } from "../../../../redux";
import { setAppTheme } from "../../../../redux/slice/themeSlice";
import { AppThemeType, getAppTheme } from "../../../../theme";

import { useAppAsyncStorage } from "../../../../hooks/useAsyncStorage";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const AppearanceScreen = ({ navigation }: CommonScreenProps<"Appearance">) => {
  const { saveSettingsToStorage, loadSettingsFromStorage } =
    useAppAsyncStorage();
  const [selectedAppearance, setSelectedAppearance] =
    useState<AppThemeType>("system");

  const dispatch = useAppDispatch();

  const appTheme = getAppTheme(selectedAppearance);

  const options: {
    icon: JSX.Element;
    name: string;
    value: AppThemeType;
  }[] = [
    {
      icon: <DarkModeIcon color={Colors[appTheme].mainText} size={16} />,
      name: "Dark Mode",
      value: "dark",
    },
    {
      icon: <LightModeIcon color={Colors[appTheme].mainText} size={16} />,
      name: "Light Mode",
      value: "light",
    },
    {
      icon: <SystemModeIcon color={Colors[appTheme].mainText} size={0} />,
      name: "System Mode",
      value: "system",
    },
  ];

  useEffect(() => {
    loadSettingsFromStorage().then((setting) => {
      setting?.appearance !== undefined &&
        setSelectedAppearance(
          setting?.appearance === "light"
            ? "light"
            : setting?.appearance === "dark"
            ? "dark"
            : "system"
        );
    });
  }, []);

  useEffect(() => {
    saveSettingsToStorage({ appearance: selectedAppearance });
  }, [selectedAppearance]);

  useNavigationHeader(navigation, "Appearance");

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <View style={{ marginTop: hp(10) }}>
          <Divider />
          {options.map(({ icon, name, value }, i) => (
            <View key={i}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedAppearance(value);
                  if (value === "light") {
                    dispatch(setAppTheme({ theme: "light" }));
                    StatusBar.setStatusBarStyle("dark");
                  } else if (value === "dark") {
                    dispatch(setAppTheme({ theme: "dark" }));
                    StatusBar.setStatusBarStyle("light");
                  } else {
                    dispatch(setAppTheme({ theme: "system" }));
                    StatusBar.setStatusBarStyle("auto");
                  }
                }}
                style={[
                  CommonStyles.row,
                  {
                    justifyContent: "space-between",
                    alignSelf: "stretch",
                    paddingVertical: 20,
                  },
                ]}>
                <View>{icon}</View>
                <Text
                  style={{
                    marginRight: "auto",
                    marginLeft: 15,
                    fontSize: 17,
                    fontFamily: "Euclid-Circular-A-Medium",
                  }}>
                  {name}
                </Text>
                {selectedAppearance === value && (
                  <CheckIcon size={20} color={"#2A9E17"} />
                )}
              </TouchableOpacity>
              <Divider />
            </View>
          ))}
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AppearanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
