import React, { useLayoutEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { Text, View } from "../../../../components/Themed";
import Button from "../../../../components/buttons/Button";
import ButtonWithUnderline, {
  CancelButtonWithUnderline,
} from "../../../../components/buttons/CancelButtonWithUnderline";
import Divider from "../../../../components/divider/Divider";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";

import {
  ArrowDownIcon,
  ChevronRightIcon,
  UndrawAccountIcon,
} from "../../../../../assets/svg";

const BankAccountsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"BankAccounts">) => {
  const colorScheme = useColorScheme();
  const [selectedAccount, setSelectedAccount] = useState("");
  const [accountAvailable] = useState(true);

  const { screenType } = route.params;

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
          {screenType}
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

  const accounts = [
    {
      image: require("../../../../../assets/images/AccessBank.png"),
      name: "Access Bank (123........)",
    },
  ];

  if (accountAvailable && screenType === "Withdraw") {
    return (
      <View
        style={[
          styles.container,
          {
            justifyContent: "space-between",
          },
        ]}
      >
        <View>
          <Text
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A",
              fontSize: 14,
              marginBottom: hp(30),
            }}
          >
            Select the bank you wish to withdraw to
          </Text>
          <Divider />
          {accounts.map(({ image, name }, i) => (
            <View key={i}>
              <TouchableOpacity onPress={() => setSelectedAccount(name)}>
                <View
                  style={[
                    CommonStyles.row,
                    { alignSelf: "stretch", paddingVertical: 15 },
                  ]}
                >
                  <Image
                    source={image}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 50,
                    }}
                  />
                  <Text
                    lightColor={Colors.light.mainText}
                    darkColor={Colors.dark.mainText}
                    style={{
                      marginLeft: 20,
                      fontFamily: "Euclid-Circular-A-Medium",
                      fontSize: 14,
                    }}
                  >
                    Access Bank (123........)
                  </Text>
                  <View
                    style={{
                      marginLeft: "auto",
                      width: hp(20),
                      height: hp(20),
                      borderRadius: hp(10),
                      borderColor:
                        selectedAccount === name
                          ? Colors.general.green
                          : "#3A3D42",
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: hp(1),
                    }}
                  >
                    {selectedAccount === name && (
                      <View style={CommonStyles.doneSelect} />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
              <Divider />
            </View>
          ))}
        </View>
        <View
          style={[CommonStyles.col, { marginBottom: hp(45), width: "100%" }]}
        >
          <Button
            disabled={!selectedAccount}
            title="Continue"
            onPressButton={() =>
              navigation.navigate("TransactionKeypad", {
                headerTitle: "Amount",
                transactionType: {
                  transaction:'withdraw',
                  type: "normal transaction",
                  beneficiary: {
                    beneficiaryAccount: "",
                    beneficiaryImage: "",
                    beneficiaryName: "",
                  },
                },
              })
            }
            styleText={{
              color: Colors[colorScheme].buttonText,
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
            }}
            style={{
              width: "100%",
              marginBottom: hp(15),
              backgroundColor: Colors[colorScheme].button,
            }}
          />
          <CancelButtonWithUnderline
            title="Cancel"
            onPressButton={() => navigation.goBack()}
            styleText={CommonStyles.cancelStyle}
            style={{ borderBottomColor: Colors.general.red }}
          />
        </View>
      </View>
    );
  }

  if (accountAvailable && screenType === "Bank Account") {
    return (
      <View
        style={[
          styles.container,
          {
            justifyContent: "space-between",
          },
        ]}
      >
        <View>
          <Text
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A",
              fontSize: 14,
              marginBottom: hp(30),
            }}
          >
            Select a bank account to perform any activity
          </Text>
          <Divider />
          {accounts.map(({ image, name }, i) => (
            <View key={i}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditBankAccountDetails")}
              >
                <View
                  style={[
                    CommonStyles.row,
                    { alignSelf: "stretch", paddingVertical: 15 },
                  ]}
                >
                  <Image
                    source={image}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 50,
                    }}
                  />
                  <Text
                    lightColor={Colors.light.mainText}
                    darkColor={Colors.dark.mainText}
                    style={{
                      marginLeft: 20,
                      fontFamily: "Euclid-Circular-A-Medium",
                      fontSize: 14,
                    }}
                  >
                    Access Bank (123........)
                  </Text>
                  <View style={{ marginLeft: "auto" }}>
                    <ChevronRightIcon color={"#2A9E17"} size={20} />
                  </View>
                </View>
              </TouchableOpacity>
              <Divider />
            </View>
          ))}
        </View>
        <View
          style={[CommonStyles.col, { marginBottom: hp(45), width: "100%" }]}
        >
          <Button
            title="Add another bank Account"
            onPressButton={() =>
              navigation.navigate("SelectBank", {
                screenType,
              })
            }
            styleText={{
              color: Colors[colorScheme].buttonText,
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
            }}
            style={{
              width: "100%",
              marginBottom: hp(15),
              backgroundColor: Colors[colorScheme].button,
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <SpacerWrapper>
      <View style={[styles.container, { justifyContent: "space-between" }]}>
        <View
          style={[
            CommonStyles.col,
            { marginTop: "auto", marginBottom: "auto" },
          ]}
        >
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
            }}
          >
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
              }}
            >
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
          style={[CommonStyles.col, { width: "100%", marginBottom: hp(45) }]}
        >
          <Button
            title="Add Bank Account"
            onPressButton={() =>
              navigation.navigate("SelectBank", {
                screenType,
              })
            }
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
