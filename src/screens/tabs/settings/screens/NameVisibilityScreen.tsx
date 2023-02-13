import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";

import { View as View, Text as Text } from "../../../../theme/Themed";
import Divider from "../../../../components/divider/Divider";
import SettingsSwitch from "../components/SettingsSwitch";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";

import { useAppAsyncStorage } from "../../../../hooks/useAsyncStorage";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const NameVisibilityScreen = ({
  navigation,
}: CommonScreenProps<"NameVisibility">) => {
  const { saveSettingsToStorage, loadSettingsFromStorage } =
    useAppAsyncStorage();
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  useEffect(() => {
    loadSettingsFromStorage().then((setting) => {
      setting?.nameVisibilitySwitch !== undefined &&
        setIsEnabled(setting?.nameVisibilitySwitch);
    });
  }, []);

  useEffect(() => {
    saveSettingsToStorage({ nameVisibilitySwitch: isEnabled });
  }, [isEnabled]);

  useNavigationHeader(navigation, "Name Visibility");

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
          You can disable this setting if you want your name to appear masked
          when others send or receive money from you
        </Text>
        <View style={{ marginTop: hp(80) }}>
          <Divider />
          <SettingsSwitch
            text={"Name Visibility"}
            isEnabled={isEnabled}
            onSwitchToggle={() => {
              setIsEnabled(!isEnabled);
            }}
          />
          <View
            style={[
              CommonStyles.row,
              {
                justifyContent: "space-between",
                alignSelf: "stretch",
                paddingVertical: 30,
                alignItems: "center",
              },
            ]}
          >
            <View style={[CommonStyles.col]}>
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.secondaryText}
                style={{
                  fontSize: hp(14),
                  marginBottom: 10,
                  fontWeight: "400",
                  fontFamily: "Euclid-Circular-A",
                }}
              >
                With whom?
              </Text>
              <Text
                style={{
                  fontSize: hp(16),
                  fontFamily: "Euclid-Circular-A-Medium",
                  fontWeight: "500",
                }}
              >
                Chiazondu Joseph
              </Text>
            </View>
            <Image
              style={{ borderRadius: 50, width: 45, height: 45 }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
              }}
            />
          </View>
          <Divider />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default NameVisibilityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
