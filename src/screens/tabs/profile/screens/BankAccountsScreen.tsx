import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { View, Text } from "../../../../theme/Themed";
import Button from "../../../../components/buttons/Button";
import ButtonWithUnderline, {
  CancelButtonWithUnderline,
} from "../../../../components/buttons/CancelButtonWithUnderline";
import Divider from "../../../../components/divider/Divider";
import ListItemSkeleton from "../../../../components/skeleton/ListItemSkeleton";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";

import {
  ArrowDownIcon,
  ChevronRightIcon,
  UndrawAccountIcon,
} from "../../../../../assets/svg";
import {
  getUserSavedBankAccs,
  selectUser,
} from "../../../../redux/slice/userSlice";
import { IBankAccount } from "../../../../types/types.redux";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";
import { setTransaction } from "../../../../redux/slice/transactionSlice";

const BankAccountsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"BankAccounts">) => {
  const [selectedAccount, setSelectedAccount] = useState<IBankAccount>();
  const insets = useSafeAreaInsets();
  const { screenType } = route.params;
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);

  useNavigationHeader(navigation, screenType);

  useEffect(() => {
    if (!user.bankAccounts.loaded) dispatch(getUserSavedBankAccs());
  }, []);

  if (user.bankAccounts.data.length > 0 && screenType === "Withdraw") {
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
            {user.bankAccounts.data
              .filter((b) => !b.isBeneficiary)
              .map((_account, i) => (
                <View key={i}>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedAccount(_account);
                    }}
                  >
                    <View
                      style={[
                        CommonStyles.row,
                        { alignSelf: "stretch", paddingVertical: 15 },
                      ]}
                    >
                      {_account.bankLogo && (
                        <Image
                          source={{ uri: _account.bankLogo }}
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 50,
                          }}
                        />
                      )}

                      <Text
                        style={{
                          marginLeft: hp(20),
                          fontFamily: "Euclid-Circular-A-Semi-Bold",
                          fontSize: hp(14),
                        }}
                      >
                        {`${_account.bankName} (${_account.accountNumber})`}
                      </Text>
                      <View
                        style={{
                          marginLeft: "auto",
                          width: hp(20),
                          height: hp(20),
                          borderRadius: hp(10),
                          borderColor:
                            selectedAccount?.accountNumber ===
                            _account.accountNumber
                              ? Colors.general.green
                              : "#3A3D42",
                          alignItems: "center",
                          justifyContent: "center",
                          borderWidth: hp(1),
                        }}
                      >
                        {selectedAccount?.accountNumber ===
                          _account.accountNumber && (
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
              style={[
                {
                  marginBottom: 15,
                  borderBottomColor:
                    appTheme === "dark" ? "#262626" : "#EAEAEC",
                },
              ]}
            />
            {selectedAccount && (
              <Button
                disabled={!selectedAccount}
                title="Continue"
                onPressButton={() => {
                  dispatch(
                    setTransaction({
                      amount: 0,
                      beneficiary: {
                        fullName: selectedAccount.accountName,
                        accountNumber: selectedAccount.accountNumber,
                        bankCode: selectedAccount.bankCode,
                      },
                      transferType: "withdraw",
                      description: "",
                    })
                  );
                  navigation.navigate("TransactionKeypad", {
                    headerTitle: "Amount",
                    transactionType: {
                      transaction: "withdraw",
                      type: "normal",
                      beneficiary: {
                        accountNumber: selectedAccount.accountNumber,
                        beneficiaryName: selectedAccount.accountName,
                        pictureUrl: user.pictureUrl,
                        fullName: selectedAccount.accountName,
                        bankCode: selectedAccount.bankCode,
                      },
                    },
                  });
                }}
              />
            )}

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

  if (user.bankAccounts.data.length > 0 && screenType === "Bank Account") {
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
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ height: "100%" }}
            >
              {user.bankAccounts.data.map(
                ({ bankLogo, bankName, accountNumber, accountName, id }, i) => (
                  <View key={i}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("EditBankAccountDetails", {
                          accountName,
                          accountNumber,
                          id,
                          bankName,
                          bankLogo,
                          bankCode: "",
                          isBeneficiary: false,
                        })
                      }
                    >
                      <View
                        style={[
                          CommonStyles.row,
                          { alignSelf: "stretch", paddingVertical: 15 },
                        ]}
                      >
                        {bankLogo && (
                          <Image
                            source={{ uri: bankLogo }}
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: 50,
                            }}
                          />
                        )}

                        <Text
                          style={{
                            marginLeft: hp(20),
                            fontFamily: "Euclid-Circular-A-Semi-Bold",
                            fontSize: hp(14),
                          }}
                        >
                          {`${bankName} (${accountNumber.substring(
                            0,
                            3
                          )}.....)`}
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
            </ScrollView>
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
            />
          </View>
        </View>
      </SpacerWrapper>
    );
  }

  if (user.bankAccounts.loading) {
    return (
      <SpacerWrapper>
        <View style={{ paddingTop: 20, flex: 1 }}>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <ListItemSkeleton key={i} placeHoldersWidth={[50]} />
            ))}
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
            color={appTheme === "dark" ? "#E7E9EA" : "#000000"}
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
                appTheme === "dark"
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
