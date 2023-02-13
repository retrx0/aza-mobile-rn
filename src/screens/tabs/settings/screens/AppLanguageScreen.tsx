import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { CommonScreenProps } from "../../../../common/navigation/types";

import { View as View, Text as Text } from "../../../../theme/Themed";
import Divider from "../../../../components/divider/Divider";

import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { CheckIcon } from "../../../../../assets/svg";

import { useAppAsyncStorage } from "../../../../hooks/useAsyncStorage";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const AppLanguageScreen = ({
  navigation,
}: CommonScreenProps<"AppLanguage">) => {
  const { saveSettingsToStorage, loadSettingsFromStorage } =
    useAppAsyncStorage();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  const languages = [
    {
      icon: (
        <Image
          style={{ width: 36, height: 36, borderRadius: 50 }}
          source={require("../../../../../assets/images/icons/BritishFlag.png")}
        />
      ),
      name: "English",
    },
  ];

  useEffect(() => {
    loadSettingsFromStorage().then((setting) => {
      setting?.appLanguage !== undefined &&
        setSelectedLanguage(setting?.appLanguage);
    });
  }, []);

  useEffect(() => {
    saveSettingsToStorage({ appLanguage: selectedLanguage });
  }, [selectedLanguage]);

  useNavigationHeader(navigation, "App Language");

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          You can change the app language
        </Text>
        <View style={{ marginTop: hp(30) }}>
          <Divider />
          {languages.map(({ icon, name }, i) => (
            <View key={i}>
              <TouchableOpacity
                onPress={() => setSelectedLanguage(name)}
                style={[
                  CommonStyles.row,
                  {
                    justifyContent: "space-between",
                    alignSelf: "stretch",
                    paddingVertical: 20,
                  },
                ]}
              >
                <View>{icon}</View>
                <Text
                  lightColor={Colors.light.text}
                  darkColor={Colors.dark.mainText}
                  style={{
                    marginRight: "auto",
                    marginLeft: 15,
                    fontSize: hp(16),
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontWeight: "500",
                  }}
                >
                  {name}
                </Text>
                {selectedLanguage === name && (
                  <CheckIcon size={20} color={"#2A9E17"} />
                )}
              </TouchableOpacity>
              <Divider />
            </View>
          ))}
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AppLanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
