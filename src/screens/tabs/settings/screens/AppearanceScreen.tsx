import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import {
  CheckIcon,
  DarkModeIcon,
  LightModeIcon,
  SystemModeIcon,
} from "../../../../../assets/svg";
import Divider from "../../../../components/divider/Divider";

import { useAppAsyncStorage } from "../../../../hooks/useAsyncStorage";
import { useAppDispatch } from "../../../../redux";
import { setAppTheme } from "../../../../redux/slice/themeSlice";

const AppearanceScreen = ({ navigation }: CommonScreenProps<"Appearance">) => {
  const colorScheme = useColorScheme();
  const { saveSettingsToStorage, loadSettingsFromStorage } =
    useAppAsyncStorage();
  const [selectedAppearance, setSelectedAppearance] =
    useState<string>("System Mode");

  const dispatch = useAppDispatch();

  const options = [
    {
      icon: <DarkModeIcon color={Colors[colorScheme].mainText} size={16} />,
      name: "Dark Mode",
      value: "dark",
    },
    {
      icon: <LightModeIcon color={Colors[colorScheme].mainText} size={16} />,
      name: "Light Mode",
      value: "light",
    },
    {
      icon: <SystemModeIcon color={Colors[colorScheme].mainText} size={0} />,
      name: "System Mode",
      value: "system",
    },
  ];

  useEffect(() => {
    loadSettingsFromStorage().then((setting) => {
      setting?.appearance !== undefined &&
        setSelectedAppearance(setting?.appearance);
    });
  }, []);

  useEffect(() => {
    saveSettingsToStorage({ appearance: selectedAppearance });
  }, [selectedAppearance]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          Appearance
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: hp(10) }}>
        <Divider />
        {options.map(({ icon, name, value }, i) => (
          <View key={i}>
            <TouchableOpacity
              onPress={() => {
                setSelectedAppearance(name);
                if (value === "light")
                  dispatch(setAppTheme({ theme: "light" }));
                else if (value === "dark")
                  dispatch(setAppTheme({ theme: "dark" }));
                else dispatch(setAppTheme({ theme: "system" }));
              }}
              style={[
                CommonStyles.row,
                {
                  justifyContent: "space-between",
                  alignSelf: "stretch",
                  paddingVertical: 20,
                },
              ]}
            >
              <View>{icon}</View>
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.mainText}
                style={{
                  marginRight: "auto",
                  marginLeft: 15,
                  fontSize: 14,
                  fontFamily: "Euclid-Circular-A-Medium",
                }}
              >
                {name}
              </Text>
              {selectedAppearance === name && (
                <CheckIcon size={20} color={"#2A9E17"} />
              )}
            </TouchableOpacity>
            <Divider />
          </View>
        ))}
      </View>
    </View>
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
