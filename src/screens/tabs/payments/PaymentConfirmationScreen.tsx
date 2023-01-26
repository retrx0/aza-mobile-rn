import { Platform, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { UnderlinedInput } from "../../../components/input/UnderlinedInput";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import Button from "../../../components/buttons/Button";
import { ImageInput } from "./sub-components/ImageInput";
import { View as View, Text as Text } from "../../../theme/Themed";

import Colors from "../../../constants/Colors";
import { hp } from "../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { CommonScreenProps } from "../../../common/navigation/types";

import { NAIRA_UNICODE } from "../../../constants/AppConstants";

export default function PaymentConfirmationScreen({
  navigation,
  route,
}: CommonScreenProps<"PaymentConfirmation">) {
  const insets = useSafeAreaInsets();
  const [isButtonLoading, setButtonLoading] = useState(false);

  const {
    amount,
    beneficiaryLogo,
    beneficiaryName,
    customerAccountNumber,
    meterNumber,
    paymentMethod,
    phoneNumber,
    purchaseName,
    smartCardNumber,
    accountOrUserId,
  } = route.params;

  const onConfirm = () => {
    setButtonLoading(true);
    // TODO: perform api call based on purchaseName and continue to status screen if it is a success
    if (true) {
      setButtonLoading(true);
      navigation.navigate("StatusScreen", {
        navigateTo: "Payments",
        status: "Successful",
        statusIcon: "Success",
        statusMessage: `Your ${purchaseName} purchase was successful`,
      });
    } else {
      setButtonLoading(false);
    }
  };

  return (
    <SpacerWrapper>
      <View
        style={[
          CommonStyles.vaultcontainer,
          { marginTop: Platform.OS == "android" ? 50 : 0 },
        ]}
      >
        <View style={{ paddingHorizontal: hp(23) }}>
          <Text style={styles.txt}>
            Kindly confirm the details of this transaction
          </Text>

          {typeof beneficiaryLogo === "string" ? (
            <ImageInput
              label={"To"}
              placeholder={beneficiaryName}
              source={{ uri: beneficiaryLogo }}
              icon={undefined}
              value={beneficiaryName}
              editable={false}
            />
          ) : (
            <ImageInput
              label={"To"}
              placeholder={beneficiaryName}
              source={beneficiaryLogo}
              icon={undefined}
              value={beneficiaryName}
              editable={false}
            />
          )}

          <UnderlinedInput
            style={{ display: customerAccountNumber ? "flex" : "none" }}
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[styles.input]}
            labelStyle={styles.label}
            label={"Customer Account Number"}
            value={customerAccountNumber}
          />

          <UnderlinedInput
            style={{ display: smartCardNumber ? "flex" : "none" }}
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[styles.input]}
            labelStyle={styles.label}
            label={"Smart Card Number"}
            value={smartCardNumber}
          />

          <UnderlinedInput
            style={{ display: meterNumber ? "flex" : "none" }}
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[styles.input]}
            labelStyle={styles.label}
            label={"Meter Number"}
            value={meterNumber}
          />

          <UnderlinedInput
            style={{ display: accountOrUserId ? "flex" : "none" }}
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[styles.input]}
            labelStyle={styles.label}
            label={"Account/User ID"}
            value={accountOrUserId}
          />

          <UnderlinedInput
            style={{ display: phoneNumber ? "flex" : "none" }}
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[styles.input]}
            labelStyle={styles.label}
            label={"Phone number"}
            value={phoneNumber}
          />

          <UnderlinedInput
            style={{ display: amount ? "flex" : "none" }}
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[styles.input]}
            labelStyle={styles.label}
            editable={false}
            label="Amount"
            value={`${NAIRA_UNICODE + amount} ${
              purchaseName && `(${purchaseName})`
            }`}
            returnKeyType="done"
          />

          <UnderlinedInput
            style={{ display: paymentMethod ? "flex" : "none" }}
            icon={null}
            keyboardType="default"
            inputStyle={[styles.input]}
            labelStyle={styles.label}
            label="Payment Method"
            value={paymentMethod}
          />
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Confirm"
            onPressButton={onConfirm}
            buttonLoading={isButtonLoading}
            styleText={{}}
            style={[]}
          />
          <CancelButtonWithUnderline
            title="Cancel Transaction"
            onPressButton={() => {
              navigation.goBack();
            }}
            style={{ borderBottomColor: Colors.general.red }}
            styleText={CommonStyles.cancelStyle}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  txt: {
    marginBottom: hp(40),
    marginTop: hp(20),
    fontFamily: "Euclid-Circular-A-Medium",
    fontWeight: "500",
    fontSize: hp(16),
  },
  input: {
    width: "100%",
    borderColor: "#EAEAEC",
    borderBottomWidth: 0.3,
    marginBottom: hp(20),
    fontFamily: "Euclid-Circular-A-Medium",
    fontWeight: "500",
    fontSize: hp(16),
  },
  btn: {
    marginTop: "auto",
    marginBottom: 0,
    width: "10%",
  },
  cancelContainer: {
    marginTop: 5,
  },
  label: {
    fontFamily: "Euclid-Circular-A",
    fontWeight: "400",
    fontSize: hp(16),
  },
});
