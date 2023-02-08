import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
 
import { View as View, Text as Text } from "../../../../theme/Themed";
import Divider from "../../../../components/divider/Divider";
import SettingsSwitch from "../components/SettingsSwitch";

import { CommonScreenProps } from "../../../../common/navigation/types"; 
import { hp } from "../../../../common/util/LayoutUtil";

import { useAppAsyncStorage } from "../../../../hooks/useAsyncStorage";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const NotificationSettingsScreen = ({
  navigation,
}: CommonScreenProps<"NotificationSettings">) => {
  const { saveSettingsToStorage, loadSettingsFromStorage } =
    useAppAsyncStorage();
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  useEffect(() => {
    loadSettingsFromStorage().then((setting) => {
      setting?.communicationPermitSwitch !== undefined &&
        setIsEnabled(setting?.communicationPermitSwitch);
    });
  }, []);

  useEffect(() => {
    saveSettingsToStorage({ communicationPermitSwitch: isEnabled });
  }, [isEnabled]);
  
  useNavigationHeader(navigation, "Notification Settings"); 

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 5 }}>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          Do you want us to inform you about your account
        </Text>

        <Text
          style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: hp(16),
            fontWeight: "400",
            marginTop: hp(40),
          }}>
          You can receive notifications if you enable this setting.
        </Text>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: hp(16),
            fontWeight: "400",

            marginTop: hp(10),
          }}>
          You can revoke this permission at any time.
        </Text>
      </View>
      <View style={{ marginTop: hp(50) }}>
        <Divider />
        <SettingsSwitch
          text={"Communication Permit"}
          isEnabled={isEnabled}
          onSwitchToggle={() => {
            setIsEnabled(!isEnabled);
          }}
        />
      </View>
    </View>
  );
};

export default NotificationSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
