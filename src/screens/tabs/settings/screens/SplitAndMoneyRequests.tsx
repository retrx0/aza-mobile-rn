import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../../../../components/Themed";
import BackButton from "../../../../components/buttons/BackButton";
import Divider from "../../../../components/divider/Divider";
import SettingsSwitch from "../components/SettingsSwitch";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";

import { useAsyncStorage } from "../../../../hooks/useAsyncStorage";

const SplitAndMoneyRequestsScreen = ({
  navigation,
}: CommonScreenProps<"SplitAndMoneyRequests">) => {
  const { saveSettingsToStorage, loadSettingsFromStorage } = useAsyncStorage();
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  useEffect(() => {
    loadSettingsFromStorage().then((setting) => {
      setting?.splitAndMoneyRequestsSwitch !== undefined &&
        setIsEnabled(setting?.splitAndMoneyRequestsSwitch);
    });
  }, []);

  useEffect(() => {
    saveSettingsToStorage({ splitAndMoneyRequestsSwitch: isEnabled });
  }, [isEnabled]);

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
          }}>
          Split and Money Requests
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
      <Text
        lightColor={Colors.light.text}
        darkColor={Colors.dark.mainText}
        style={{
          fontSize: hp(16),
          fontFamily: "Euclid-Circular-A",

          fontWeight: "500",
        }}>
        You can disable this setting to reject all split and money requests from
        other users.
      </Text>
      <View style={{ marginTop: hp(50) }}>
        <Divider />
        <SettingsSwitch
          text={"Split and Money Requests"}
          isEnabled={isEnabled}
          onSwitchToggle={() => {
            setIsEnabled(!isEnabled);
          }}
        />
      </View>
    </View>
  );
};

export default SplitAndMoneyRequestsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
