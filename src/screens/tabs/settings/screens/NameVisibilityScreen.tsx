import React, { useEffect, useLayoutEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";

import { Text, View } from "../../../../components/Themed";
import BackButton from "../../../../components/buttons/BackButton";
import Divider from "../../../../components/divider/Divider";
import SettingsSwitch from "../components/SettingsSwitch";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";

import { useAsyncStorage } from "../../../../hooks/useAsyncStorage";

const NameVisibilityScreen = ({
  navigation,
}: CommonScreenProps<"NameVisibility">) => {
  const { saveSettingsToStorage, loadSettingsFromStorage } = useAsyncStorage();
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "600",
          }}>
          Name Visibility
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
        You can disable this setting if you want your name to appear masked when
        others send or receive money from you
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
          ]}>
          <View style={[CommonStyles.col]}>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.secondaryText}
              style={{
                fontSize: hp(14),
                marginBottom: 10,
                fontWeight: "400",
                fontFamily: "Euclid-Circular-A",
              }}>
              With whom?
            </Text>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.mainText}
              style={{
                fontSize: hp(16),
                fontFamily: "Euclid-Circular-A-Medium",
                fontWeight: "500",
              }}>
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
