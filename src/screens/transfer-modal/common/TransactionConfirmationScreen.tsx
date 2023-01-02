import React, { useLayoutEffect } from "react";
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
import {
  Beneficiary,
  CommonScreenProps,
} from "../../../common/navigation/types";
import { useAppSelector } from "../../../redux";
import {
  selectTransaction,
  TransactionState,
} from "../../../redux/slice/transactionSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Transaction } from "../../../redux/types";
import { NAIRA_UNICODE } from "../../../constants/AppConstants";

type TransactionScreenProps = {
  confirmationType: "send" | "request";
  beneficiary: Beneficiary;
  transactionDetails: TransactionState;
};

const TransactionConfirmationScreen = ({
  navigation,
  route,
  beneficiary,
  transactionDetails,
  confirmationType,
}: CommonScreenProps<"RequestMoneyConfirmation"> & TransactionScreenProps) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  console.log(useAppSelector(selectTransaction));

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

    navigation.navigate("StatusScreen", {
      status: "Successful",
      statusIcon: "Success",
      //TODO update message to accept JSX
      statusMessage: `You have successfully ${
        confirmationType === "request" ? "requested for" : "send"
      } ${NAIRA_UNICODE} ${transactionDetails.amount} ${
        confirmationType === "request" ? "from" : "to"
      } ${beneficiary.fullName}`,
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
            }}
          >
            Kindly confirm the details of this transaction
          </Text>
          <View style={{ marginBottom: hp(30), position: "relative" }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}
            >
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
              }}
            >
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
              ]}
            >
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
                showSoftInputOnFocus={false}
                value={`${NAIRA_UNICODE} ${transactionDetails.amount}`}
              />
            </View>
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}
            >
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
              showSoftInputOnFocus={false}
              value={transactionDetails.description}
            />
          </View>
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
