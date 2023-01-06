import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { View as View, Text as Text } from "../../../../theme/Themed";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import SettingsListItem from "../components/SettingsListItem";
import Divider from "../../../../components/divider/Divider";

const PrivacySettingsScreen = ({
  navigation,
}: CommonScreenProps<"PrivacySettings">) => {
  const privacySettings = [
    {
      name: "Name Visibility",
      handleNavigation: () => navigation.navigate("NameVisibility"),
    },
    {
      name: "Contacts Visibility",
      handleNavigation: () => navigation.navigate("ContactVisibility"),
    },
    {
      name: "Split and Money Requests",
      handleNavigation: () => navigation.navigate("SplitAndMoneyRequests"),
    },
    {
      name: "Block Users",
      handleNavigation: () => navigation.navigate("BlockUsers"),
    },
  ];

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
          Privacy Settings
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
          fontFamily: "Euclid-Circular-A-Medium",
          fontWeight: "500",
        }}>
        You can change your privacy settings
      </Text>
      <View style={{ marginTop: hp(80) }}>
        <Divider />
        {privacySettings.map(({ name, handleNavigation }, i) => (
          <SettingsListItem
            name={name}
            handleNavigation={handleNavigation}
            key={i}
          />
        ))}
      </View>
    </View>
  );
};

export default PrivacySettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
