import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Button from "../../../../components/buttons/Button";
import { View, Text, TextInput } from "../../../../theme/Themed";

import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { toastError } from "../../../../common/util/ToastUtil";

import { getAppTheme } from "../../../../theme";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import {
  getUserSavedBankAccs,
  saveUserBankAcc,
  selectUser,
} from "../../../../redux/slice/userSlice";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const AddBankAccountConfirmationScreen = ({
  navigation,
  route,
}: CommonScreenProps<"AddBankAccountConfirmation">) => {
  const [isButtonLoading, setButtonLoading] = useState(false);
  const {
    bankName,
    accountName,
    accountNumber,
    screenType,
    logoUrl,
    bankCode,
    id,
  } = route.params;

  const [_accountName, setAccountName] = useState(accountName);
  const insets = useSafeAreaInsets();
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useNavigationHeader(navigation, "Confirmation");

  const addBankAccount = async () => {
    setButtonLoading(true);

    const accountAlreadyAdded = user.bankAccounts.data.find(
      (account) =>
        account.accountName === _accountName &&
        account.accountNumber === accountNumber
    );
    if (accountAlreadyAdded) {
      toastError("Account already exists");
      setButtonLoading(false);
      return;
    }

    const addBank = await dispatch(
      saveUserBankAcc({
        accountName: _accountName,
        accountNumber,
        bankCode,
        isBeneficiary: false,
      })
    );

    if (addBank.meta.requestStatus === "fulfilled") {
      setButtonLoading(false);
      dispatch(getUserSavedBankAccs());
      navigation.navigate("StatusScreen", {
        status: "Successful",
        statusIcon: "Success",
        statusMessage:
          "Your bank account has been successfully linked to your Aza",
        navigateTo: "BankAccounts",
        navigateToParams: {
          screenType,
        },
      });
    } else {
      setButtonLoading(false);
      toastError(
        "There was a problem adding your bank account, please try again!"
      );
    }
  };

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(15) }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              marginVertical: hp(30),
              fontWeight: "500",
              marginLeft: hp(5),
            }}
          >
            Kindly confirm the details of your bank account
          </Text>
          <View style={{ marginBottom: hp(30), position: "relative" }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(15),
                fontWeight: "500",
                marginLeft: hp(5),
              }}
            >
              Bank
            </Text>
            <TextInput
              placeholderTextColor={Colors[appTheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
                marginLeft: hp(5),
              }}
              showSoftInputOnFocus={false}
              value={bankName}
            />
            <Image
              source={{
                uri: logoUrl,
              }}
              style={{
                position: "absolute",
                right: 0,
                bottom: hp(10),
                width: 45,
                height: 45,
                borderRadius: 50,
                backgroundColor: "white",
                resizeMode: "contain",
              }}
            />
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(15),
                fontWeight: "500",
                marginLeft: hp(5),
              }}
            >
              Account Number
            </Text>
            <TextInput
              placeholderTextColor={Colors[appTheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
                marginLeft: hp(5),
              }}
              showSoftInputOnFocus={false}
              value={accountNumber}
            />
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(15),
                fontWeight: "500",
                marginLeft: hp(5),
              }}
            >
              Account Name
            </Text>
            <TextInput
              placeholderTextColor={Colors[appTheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
                marginLeft: hp(5),
              }}
              showSoftInputOnFocus={false}
              value={_accountName}
              onChangeText={(text) => setAccountName(text)}
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Continue"
            onPressButton={addBankAccount}
            buttonLoading={isButtonLoading}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AddBankAccountConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
