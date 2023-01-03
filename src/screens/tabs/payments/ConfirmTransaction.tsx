import { Platform, StyleSheet } from "react-native";
import React, { useState } from "react";
import { UnderlinedInput } from "../../../components/input/UnderlinedInput";
import { RootTabScreenProps } from "../../../../types";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import Colors from "../../../constants/Colors";
import Button from "../../../components/buttons/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useColorScheme from "./../../../hooks/useColorScheme";
import { hp } from "./../../../common/util/LayoutUtil";
import { ImageInput } from "./sub-components/ImageInput";
import SpacerWrapper from "./../../../common/util/SpacerWrapper";
import CommonStyles from "./../../../common/styles/CommonStyles";
import { View as View, Text as Text } from "./../../../theme/Themed";
import { useAppSelector } from "./../../../redux";

import { selectPayment, PaymentState } from "../../../redux/slice/paymentSlice";

// style={[{ paddingTop: Platform.OS == "android" ? 100 : 100 }]}

export default function AirtimeConfirmation({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const [confirmed, setConfirm] = useState(false);
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const payment: PaymentState = useAppSelector(selectPayment);

  return (
    <SpacerWrapper>
      <View
        style={[
          CommonStyles.vaultcontainer,
          { marginTop: Platform.OS == "android" ? 50 : 0 },
        ]}>
        <View style={{ paddingHorizontal: hp(23) }}>
          <Text style={styles.txt}>
            Kindly confirm the details of this transaction
          </Text>

          <ImageInput
            label={"To"}
            placeholder={payment.to}
            source={payment.logo}
            icon={undefined}
            value={""}
          />

          <UnderlinedInput
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[styles.input]}
            labelStyle={{
              fontFamily: "Euclid-Circular-A",
              fontWeight: "400",
              fontSize: hp(16),
              color: colorScheme === "dark" ? "#999999" : "#000000",
            }}
            label={payment.detailHeader}
            value={payment.detailValue}
            placeholderTextColor={
              colorScheme === "dark" ? "#E7E9EA" : "#000000"
            }
          />

          <UnderlinedInput
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[styles.input]}
            labelStyle={{
              fontFamily: "Euclid-Circular-A",
              fontWeight: "500",
              fontSize: hp(16),
              color: colorScheme === "dark" ? "#E7E9EA" : "#000000",
            }}
            label="Amount"
            // placeholder="Select your payment method"
            // placeholderTextColor={
            //   colorScheme === "dark" ? "#E7E9EA" : "#000000"
            // }
            value={`\u20A6${payment.amount} (${payment.paymentType})`}
            returnKeyType="done"
          />

          <UnderlinedInput
            icon={null}
            keyboardType="default"
            inputStyle={[styles.input]}
            labelStyle={{
              fontFamily: "Euclid-Circular-A",
              fontWeight: "500",
              fontSize: hp(16),
              color: colorScheme === "dark" ? "#E7E9EA" : "#000000",
              marginTop: hp(20),
            }}
            label="Payment Method"
            // placeholder="Select your payment method"
            // placeholderTextColor={
            //   colorScheme === "dark" ? "#E7E9EA" : "#000000"
            // }
            value={payment.paymentMethod}
          />
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}>
          <Button
            title="Confirm"
            onPressButton={() => {
              navigation.navigate("StatusScreen", {
                statusIcon: "Success",
                status: "Successful",
                statusMessage: "Your internet purchase was successful",
                navigateTo: "Payments",
              });
            }}
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
            ]}
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
});
