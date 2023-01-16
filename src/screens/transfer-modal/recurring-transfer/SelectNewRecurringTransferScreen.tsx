import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";

import { CommonScreenProps } from "../../../common/navigation/types";

import BackButton from "../../../components/buttons/BackButton";
import { View, Text } from "../../../theme/Themed";
import Divider from "../../../components/divider/Divider";

import Colors from "../../../constants/Colors";
import { hp } from "../../../common/util/LayoutUtil";
import CommonStyles from "../../../common/styles/CommonStyles";

import {
  BillIcon,
  ChevronRightIcon,
  HeartOutlinedIcon,
  MoneyTransferNairaIcon,
  VaultLargeIcon,
} from "../../../../assets/svg";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { getAppTheme } from "../../../theme";
import { useAppSelector } from "../../../redux";
import { selectAppTheme } from "../../../redux/slice/themeSlice";

const SelectNewRecurringTransferScreen = ({
  navigation,
}: CommonScreenProps<"SelectNewRecurringTransfer">) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          Recurring Money Transfer
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

  const navigationListItems = [
    {
      name: "Charity",
      handleNavigation: () => navigation.navigate("Charity"),
      icon: <HeartOutlinedIcon size={24} color={Colors[appTheme].mainText} />,
    },
    {
      name: "Money Transfer",
      handleNavigation: () => navigation.navigate("SendMoney"),
      icon: (
        <MoneyTransferNairaIcon size={24} color={Colors[appTheme].mainText} />
      ),
    },
    {
      name: "Bill payment",
      handleNavigation: () =>
        navigation.getParent()?.navigate("PaymentRecurring"),
      icon: <BillIcon size={24} color={Colors[appTheme].mainText} />,
    },

    // {
    //   name: "Vault",
    //   handleNavigation: () =>
    //     navigation.getParent()?.navigate("Common", { screen: "Vault" }),
    //   icon: <VaultLargeIcon size={24} color={Colors[colorScheme].mainText} />,
    // },
  ];

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <View>
          <Divider />
          {navigationListItems.map(({ name, icon, handleNavigation }, i) => (
            <View key={i}>
              <TouchableOpacity
                onPress={handleNavigation}
                style={[CommonStyles.col, { alignSelf: "stretch" }]}
              >
                <View
                  style={[
                    CommonStyles.row,
                    {
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      marginVertical: hp(20),
                    },
                  ]}
                >
                  <View>{icon}</View>
                  <View
                    style={[
                      CommonStyles.col,
                      { marginRight: "auto", marginLeft: 20 },
                    ]}
                  >
                    <Text
                      style={{
                        fontSize: hp(16),
                        fontFamily: "Euclid-Circular-A-Semi-Bold",
                        fontWeight: "500",
                      }}
                    >
                      {name}
                    </Text>
                  </View>
                  <ChevronRightIcon color={Colors.general.green} size={20} />
                </View>
              </TouchableOpacity>
              <Divider />
            </View>
          ))}
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default SelectNewRecurringTransferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
