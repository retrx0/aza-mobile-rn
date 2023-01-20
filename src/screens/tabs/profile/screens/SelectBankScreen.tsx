import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { TextInput } from "../../../../theme/Themed";
import { View, Text } from "../../../../theme/Themed";

import Divider from "../../../../components/divider/Divider";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { SearchIcon } from "../../../../../assets/svg";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import {
  AccessBankLogoWithName,
  EcoBankLogoWithName,
  FCMBLogoWithName,
  FidelityBankLogoWithName,
  FirstBankLogoWithName,
  GTBankLogoWithName,
  UBALogoWithName,
  ZenithBankLogoWithName,
} from "../../../../../assets/images";

const SelectBankScreen = ({
  navigation,
  route,
}: CommonScreenProps<"SelectBank">) => {
  const colorScheme = useColorScheme();
  const [search, setSearch] = useState("");

  const { screenType } = route.params;

  const banks = [
    { name: "Access", logo: AccessBankLogoWithName },
    { name: "Eco", logo: EcoBankLogoWithName },
    { name: "Fcmb", logo: FCMBLogoWithName },
    { name: "Gtb", logo: GTBankLogoWithName },
    { name: "Uba", logo: UBALogoWithName },
    { name: "Zenith", logo: ZenithBankLogoWithName },
    { name: "Fidelity", logo: FidelityBankLogoWithName },
    { name: "First", logo: FirstBankLogoWithName },
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
          }}
        >
          Select Bank
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
    <SpacerWrapper>
      <View style={[CommonStyles.col, styles.container]}>
        <View
          style={[
            CommonStyles.row,
            {
              borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",

              borderBottomWidth: 0.7,
              marginBottom: 20,
              marginLeft: hp(5),
            },
          ]}
        >
          <SearchIcon color={Colors[colorScheme].secondaryText} size={16} />
          <TextInput
            style={{
              flex: 1,
              padding: 10,
              backgroundColor: "transparent",
              color: Colors[colorScheme].secondaryText,
            }}
            placeholder="Search for bank"
            onChangeText={(e) => setSearch(e)}
          />
        </View>
        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
          {banks
            .filter(({ name }) =>
              name.toLowerCase().includes(search.toLowerCase())
            )
            .map(({ logo, name }, i) => (
              <View key={i}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("AddBankAccount", {
                      bankName: name,
                      bankLogo: logo,
                      screenType,
                    })
                  }
                  style={[
                    CommonStyles.col,
                    {
                      alignSelf: "stretch",
                      alignItems: "center",
                    },
                  ]}
                >
                  <Image source={logo} />
                </TouchableOpacity>
                <View
                  style={{
                    marginVertical: 25,
                    width: "100%",
                  }}
                >
                  <Divider />
                </View>
              </View>
            ))}
        </ScrollView>
      </View>
    </SpacerWrapper>
  );
};

export default SelectBankScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
