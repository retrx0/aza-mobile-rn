import { StyleSheet } from "react-native";

import { View as View, Text as Text } from "../../../../theme/Themed";
import SettingsListItem from "../components/SettingsListItem";
import Divider from "../../../../components/divider/Divider";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";

import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const PrivacySettingsScreen = ({
  navigation,
}: CommonScreenProps<"PrivacySettings">) => {
  const privacySettings = [
    {
      name: "Account Balance Visibility",
      handleNavigation: () => navigation.navigate("AccountBalanceVisibility"),
    },
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
  useNavigationHeader(navigation, "Privacy Settings");

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A-Medium",
            fontWeight: "500",
          }}
        >
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
    </SpacerWrapper>
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
