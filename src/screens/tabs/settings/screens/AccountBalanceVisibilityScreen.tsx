import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { View as View, Text as Text } from "../../../../theme/Themed";
import Divider from "../../../../components/divider/Divider";
import SettingsSwitch from "../components/SettingsSwitch";

import { CommonScreenProps } from "../../../../common/navigation/types";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";

import { useAppAsyncStorage } from "../../../../hooks/useAsyncStorage";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const AccountBalanceVisibilityScreen = ({
  navigation,
}: CommonScreenProps<"AccountBalanceVisibility">) => {
  const { saveSettingsToStorage, loadSettingsFromStorage } =
    useAppAsyncStorage();
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  useEffect(() => {
    loadSettingsFromStorage().then((setting) => {
      setting?.accountBalanceVisibilitySwitch !== undefined &&
        setIsEnabled(setting?.accountBalanceVisibilitySwitch);
    });
  }, []);

  useEffect(() => {
    saveSettingsToStorage({ accountBalanceVisibilitySwitch: isEnabled });
  }, [isEnabled]);

  useNavigationHeader(navigation, "Balance Visibility");

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A",
            fontWeight: "500",
          }}
        >
          You can enable this setting if you want your account balance to be
          hidden when using the app.
        </Text>
        <View style={{ marginTop: hp(80) }}>
          <Divider />
          <SettingsSwitch
            text={"Hide Account Balance"}
            isEnabled={isEnabled}
            onSwitchToggle={() => {
              setIsEnabled(!isEnabled);
            }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AccountBalanceVisibilityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
