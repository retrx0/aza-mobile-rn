import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { View, Text } from "../../../../theme/Themed";
import Divider from "../../../../components/divider/Divider";
import SettingsSwitch from "../components/SettingsSwitch";

import { CommonScreenProps } from "../../../../common/navigation/types";
import { hp } from "../../../../common/util/LayoutUtil";

import { useAppAsyncStorage } from "../../../../hooks/useAsyncStorage";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const SplitAndMoneyRequestsScreen = ({
  navigation,
}: CommonScreenProps<"SplitAndMoneyRequests">) => {
  const { saveSettingsToStorage, loadSettingsFromStorage } =
    useAppAsyncStorage();
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

  useNavigationHeader(navigation, "Split and Money Requests");

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: hp(16),
          fontFamily: "Euclid-Circular-A",

          fontWeight: "500",
        }}
      >
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
