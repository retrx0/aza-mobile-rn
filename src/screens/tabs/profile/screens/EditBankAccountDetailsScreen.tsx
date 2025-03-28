import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import BackButton from "../../../../components/buttons/BackButton";
import Button from "../../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import { TextInput } from "../../../../theme/Themed";
import { View, Text } from "../../../../theme/Themed";

import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { toastError, toastSuccess } from "../../../../common/util/ToastUtil";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

import { useAppDispatch, useAppSelector } from "../../../../redux";
import { removeUserSavedBankAcc } from "../../../../redux/slice/userSlice";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";

const EditBankAccountDetailsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"EditBankAccountDetails">) => {
  const [isEditing, setEditing] = useState(false);
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);
  const dispatch = useAppDispatch();

  const { accountName, accountNumber, id, bankName, bankLogo } = route.params;

  useNavigationHeader(navigation, "Bank Account");

  const editDetails = () => {
    setEditing(!isEditing);
  };

  const deleteAccount = () => {
    dispatch(removeUserSavedBankAcc(id))
      .unwrap()
      .then(() => {
        navigation.goBack();
        toastSuccess("The account has been successfully deleted");
      })
      .catch(() => toastError("An error occurred while deleting the account"));
  };

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(15) }}>
          <Text
            style={{
              marginVertical: hp(30),
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              fontWeight: "500",
              marginLeft: hp(5),
            }}
          >
            Details of your bank account
          </Text>
          <View style={{ marginBottom: hp(30), position: "relative" }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
                marginLeft: hp(5),
              }}
            >
              Bank
            </Text>
            <TextInput
              editable={isEditing}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",

                marginLeft: hp(5),
                fontSize: hp(16),
              }}
              value={bankName}
            />
            <Image
              source={{
                uri: bankLogo,
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
                fontSize: hp(16),
                fontWeight: "500",
                marginLeft: hp(5),
              }}
            >
              Account Number
            </Text>
            <TextInput
              editable={isEditing}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",

                marginLeft: hp(5),
                fontSize: hp(16),
              }}
              value={accountNumber}
            />
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
                marginLeft: hp(5),
              }}
            >
              Account Name
            </Text>
            <TextInput
              editable={isEditing}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
                marginLeft: hp(5),
                fontSize: hp(16),
              }}
              value={accountName}
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          {/* <Button
            title={isEditing ? "Done" : "Edit Account Details"}
            onPressButton={editDetails}
          /> */}
          <CancelButtonWithUnderline
            title="Delete Account"
            onPressButton={deleteAccount}
            styleText={CommonStyles.cancelStyle}
            style={[{ borderBottomColor: Colors.general.red }]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default EditBankAccountDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
