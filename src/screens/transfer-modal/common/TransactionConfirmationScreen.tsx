import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";

import BackButton from "../../../components/buttons/BackButton";
import { TextInput, View, Text } from "../../../theme/Themed";
import Button from "../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { hp } from "../../../common/util/LayoutUtil";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../common/navigation/types";
import { useAppDispatch, useAppSelector } from "../../../redux";
import {
  selectTransaction,
  setTransactionDescription,
  TransactionState,
} from "../../../redux/slice/transactionSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NAIRA_UNICODE } from "../../../constants/AppConstants";

type TransactionScreenProps = {
  confirmationType: "send" | "request";
};

const TransactionConfirmationScreen = ({
  navigation,
  route,
  confirmationType,
}: CommonScreenProps<"Common"> & TransactionScreenProps) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const { beneficiary, amount, transferType, description } =
    useAppSelector(selectTransaction);

  const [transDescription, setTransDescription] = useState(description);

  console.log({ beneficiary, amount, description, transferType });

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          Confirmation
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

  const makeTransaction = () => {
    // do some validation

    dispatch(setTransactionDescription("" + transDescription));

    navigation.navigate("StatusScreen", {
      status:
        confirmationType === "request"
          ? "Successful"
          : "Your Transaction was successful",
      statusIcon: "Success",
      //TODO update message to accept JSX
      statusMessage: `You have successfully ${
        confirmationType === "request" ? "requested" : "sent"
      } ${NAIRA_UNICODE} ${amount} ${
        confirmationType === "request" ? "from" : "to"
      } ${beneficiary.fullName}`,
      statusMessage2:
        confirmationType === "send"
          ? "You can perform this transaction automatically by giving a Recurring Transfer order"
          : "",
      receiptButton: confirmationType === "send",
      recurringTransferBeneficiary:
        confirmationType === "send" ? beneficiary : undefined,
      navigateTo: "Home",
      screenType: "transaction",
    });
  };

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: hp(16),
              marginTop: hp(15),
              fontWeight: "500",
              marginBottom: hp(50),
            }}>
            Kindly confirm the details of this transaction
          </Text>
          <View style={{ marginBottom: hp(30), position: "relative" }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}>
              To
            </Text>
            <TextInput
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors[colorScheme].separator,

                fontSize: hp(16),
              }}
              showSoftInputOnFocus={false}
              value={beneficiary.fullName}
              editable={false}
            />
            <Image
              source={{
                uri: beneficiary.pictureUrl,
              }}
              style={{
                position: "absolute",
                right: 0,
                bottom: hp(10),
                width: 45,
                height: 45,
                borderRadius: 50,
                backgroundColor: "white",
              }}
            />
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}>
              Amount
            </Text>
            <View
              style={[
                CommonStyles.row,
                {
                  marginTop: hp(15),
                  alignSelf: "stretch",
                  position: "relative",
                },
              ]}>
              {/* <Text
                style={{
                  fontSize: hp(16),
                  fontFamily: "Euclid-Circular-A-Medium",
                  paddingBottom: 5,
                }}>
                {NAIRA_UNICODE}
              </Text> */}
              <TextInput
                placeholderTextColor={Colors[colorScheme].secondaryText}
                style={{
                  flex: 1,
                  backgroundColor: "transparent",
                  paddingBottom: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors[colorScheme].separator,
                  fontSize: hp(16),
                  fontFamily: "Euclid-Circular-A-Medium",
                }}
                value={NAIRA_UNICODE + "" + amount}
                showSoftInputOnFocus={false}
                editable={false}
              />
            </View>
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}>
              Description
            </Text>
            <TextInput
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors[colorScheme].separator,
                fontSize: hp(16),
              }}
              onChangeText={setTransDescription}
              value={transDescription}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}>
        <Button
          title="Continue"
          onPressButton={() => makeTransaction()}
          styleText={{}}
          style={[{}]}
        />
        <CancelButtonWithUnderline
          title="Cancel Transaction"
          color={Colors.general.red}
          styleText={CommonStyles.cancelStyle}
          onPressButton={() => navigation.goBack()}
          style={{ marginTop: 5 }}
        />
      </View>
    </SpacerWrapper>
  );
};

export default TransactionConfirmationScreen;
