import React, { useLayoutEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { View, Text } from "../../../../theme/Themed";
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
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  ArrowDownIcon,
  ChevronRightIcon,
  UndrawAccountIcon,
} from "../../../../../assets/svg";
import { AccessBank } from "../../../../../assets/images";
import { useAppSelector } from "../../../../redux";
import { selectUser } from "../../../../redux/slice/userSlice";

const BankAccountsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"BankAccounts">) => {
  const colorScheme = useColorScheme();
  const [selectedAccount, setSelectedAccount] = useState("");
  const [accountAvailable] = useState(true);
  const insets = useSafeAreaInsets();
  const { screenType } = route.params;

  const user = useAppSelector(selectUser);

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
      image: AccessBank,
      name: "Access Bank (123........)",
    },
  ];

  if (accountAvailable && screenType === "Withdraw") {
    return (
      <SpacerWrapper>
        <View style={[CommonStyles.vaultcontainer]}>
          <View style={{ paddingHorizontal: 15 }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: hp(16),
                marginBottom: hp(30),
                fontWeight: "600",
                paddingLeft: hp(7),
              }}
            >
              Select the bank you wish to withdraw to
            </Text>
            <Divider />
            {user.bankAccounts.data.map(
              ({ logoUrl, bankName, accountNumber }, i) => (
                <View key={i}>
                  <TouchableOpacity
                    onPress={() => setSelectedAccount(bankName)}
                  >
                    <View
                      style={[
                        CommonStyles.row,
                        { alignSelf: "stretch", paddingVertical: 15 },
                      ]}
                    >
                      <Image
                        source={{ uri: logoUrl }}
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 50,
                        }}
                      />

                      <Text
                        style={{
                          marginLeft: hp(20),
                          fontFamily: "Euclid-Circular-A-Semi-Bold",
                          fontSize: hp(14),
                        }}
                      >
                        {`${bankName} (${accountNumber.substring(0, 3)}.....)`}
                      </Text>
                      <View
                        style={{
                          marginLeft: "auto",
                          width: hp(20),
                          height: hp(20),
                          borderRadius: hp(10),
                          borderColor:
                            selectedAccount === bankName
                              ? Colors.general.green
                              : "#3A3D42",
                          alignItems: "center",
                          justifyContent: "center",
                          borderWidth: hp(1),
                        }}
                      >
                        {selectedAccount === bankName && (
                          <View style={CommonStyles.doneSelect} />
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>
                  <Divider />
                </View>
              )
            )}
          </View>
          <View
            style={[
              CommonStyles.passwordContainer,
              { bottom: insets.top || hp(45) },
            ]}
          >
            <CancelButtonWithUnderline
              title="Add another bank Account"
              onPressButton={() =>
                navigation.navigate("SelectBank", {
                  screenType,
                })
              }
              color={colorScheme === "dark" ? "#E7E9EA" : "#000000"}
              style={[{ marginBottom: 15 }]}
            />
            <Button
              disabled={!selectedAccount}
              title="Continue"
              onPressButton={() =>
                navigation.navigate("TransactionKeypad", {
                  headerTitle: "Amount",
                  transactionType: {
                    transaction: "deposit",
                    type: "normal",
                    beneficiary: {
                      azaAccountNumber: "",
                      fullName: "",
                    },
                  },
                })
              }
              styleText={{}}
              style={[{}]}
            />
            <CancelButtonWithUnderline
              title="Cancel"
              onPressButton={() => navigation.goBack()}
              styleText={CommonStyles.cancelStyle}
              style={{ borderBottomColor: Colors.general.red }}
            />
          </View>
        </View>
      </SpacerWrapper>
    );
  }

  if (accountAvailable && screenType === "Bank Account") {
    return (
      <SpacerWrapper>
        <View style={[CommonStyles.vaultcontainer]}>
          <View style={{ paddingHorizontal: hp(15) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: hp(16),
                fontWeight: "600",
                paddingLeft: hp(7),
                marginBottom: hp(30),
                marginTop: hp(20),
              }}
            >
              Select a bank account to perform any activity
            </Text>
            <Divider />
            {user.bankAccounts.data.map(
              ({ logoUrl, bankName, accountNumber }, i) => (
                <View key={i}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("EditBankAccountDetails")
                    }
                  >
                    <View
                      style={[
                        CommonStyles.row,
                        { alignSelf: "stretch", paddingVertical: 15 },
                      ]}
                    >
                      <Image
                        source={{ uri: logoUrl }}
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 50,
                        }}
                      />
                      <Text
                        style={{
                          marginLeft: hp(20),
                          fontFamily: "Euclid-Circular-A-Semi-Bold",
                          fontSize: hp(14),
                        }}
                      >
                        {`${bankName} (${accountNumber.substring(0, 3)}.....)`}
                      </Text>
                      <View style={{ marginLeft: "auto" }}>
                        <ChevronRightIcon color={"#2A9E17"} size={20} />
                      </View>
                    </View>
                  </TouchableOpacity>
                  <Divider />
                </View>
              )
            )}
          </View>
          <View
            style={[
              CommonStyles.passwordContainer,
              { bottom: insets.top || hp(45) },
            ]}
          >
            <Button
              title="Add another bank Account"
              onPressButton={() =>
                navigation.navigate("SelectBank", {
                  screenType,
                })
              }
              styleText={{}}
              style={[{}]}
            />
          </View>
        </View>
      </SpacerWrapper>
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
