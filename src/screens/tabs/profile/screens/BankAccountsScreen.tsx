import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { Text, View } from "../../../../components/Themed";
import Button from "../../../../components/buttons/Button";
import ButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { ArrowDownIcon, UndrawAccountIcon } from "../../../../../assets/svg";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";

const BankAccountsScreen = ({
  navigation,
}: CommonScreenProps<"BankAccounts">) => {
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
          }}>
          Bank Accounts
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
      <View style={[styles.container, { justifyContent: "space-between" }]}>
        <View
          style={[
            CommonStyles.col,
            { marginTop: "auto", marginBottom: "auto" },
          ]}>
          <UndrawAccountIcon
            color={colorScheme === "dark" ? "#E7E9EA" : "#000000"}
            size={30}
          />
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontSize: 16,
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              marginTop: hp(30),
              maxWidth: 300,
              textAlign: "center",
            }}>
            There is no bank account registered to your Aza account
          </Text>
          <View style={[CommonStyles.row, { marginTop: hp(15) }]}>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.secondaryText}
              style={{
                fontSize: 14,
                maxWidth: 300,
                marginRight: 5,
                textAlign: "center",
              }}>
              Click ‘Add Bank Account’ to link your bank account to aza
            </Text>
            <ArrowDownIcon
              color={
                colorScheme === "dark"
                  ? Colors.dark.secondaryText
                  : Colors.light.text
              }
              size={16}
            />
          </View>
        </View>
        <View
          style={[CommonStyles.col, { width: "100%", marginBottom: hp(45) }]}>
          <Button
            title="Add Bank Account"
            onPressButton={() => navigation.navigate("SelectBank")}
            styleText={{
              color: Colors[colorScheme].buttonText,
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
            }}
            style={{
              marginBottom: hp(15),
              width: "100%",
              backgroundColor: Colors[colorScheme].button,
            }}
          />
          <ButtonWithUnderline
            title="Cancel"
            onPressButton={() => navigation.goBack()}
            styleText={CommonStyles.cancelStyle}
            style={{ borderBottomColor: Colors.general.red }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default BankAccountsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
