import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { View } from "../../../../theme/components/View";
import { Text } from "../../../../theme/components/Text";
import Divider from "../../../../components/divider/Divider";
import SettingsSwitch from "../components/SettingsSwitch";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";

import { useAppAsyncStorage } from "../../../../hooks/useAsyncStorage";

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
          Notification Settings
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
      <View>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          Do you want us to inform you about your account
        </Text>

        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: hp(16),
            fontWeight: "400",
            marginTop: hp(40),
          }}
        >
          You can receive notifications if you enable this setting.
        </Text>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: hp(16),
            fontWeight: "400",

            marginTop: hp(10),
          }}
        >
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
