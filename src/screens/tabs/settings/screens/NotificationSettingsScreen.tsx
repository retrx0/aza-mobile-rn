import { StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import Divider from "../../../../components/divider/Divider";
import SettingsSwitch from "../components/SettingsSwitch";

const NotificationSettingsScreen = ({
  navigation,
}: CommonScreenProps<"NotificationSettings">) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
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
          style={{ fontSize: 14, fontFamily: "Euclid-Circular-A-Medium" }}
        >
          Do you want us to inform you about your account
        </Text>

        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: 14,
            marginTop: hp(40),
          }}
        >
          You can receive notifications if you enable this setting.
        </Text>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: 14,
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
          setIsEnabled={setIsEnabled}
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
    paddingHorizontal: 15,
  },
});
