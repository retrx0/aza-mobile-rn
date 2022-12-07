import { Platform, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Input } from "../../../../components/input/input";
import MyButton from "../sub-components/MyButton";
import { ScrollView, Text, View } from "../../../../components/Themed";
import { RootTabScreenProps } from "../../../../../types";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import Colors from "../../../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useColorScheme from "../../../../hooks/useColorScheme";
import { hp } from "../../../../common/util/LayoutUtil";
import { ImageInput } from "../sub-components/ImageInput";
import { Glo, Ie, Mtn } from "../../../../../assets/images";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import Button from "../../../../components/buttons/Button";
import { Formik } from "formik";
import { TextInput } from "../../../../components/Themed";
import { useAppSelector } from "../../../../redux";
import { selectTransaction } from "../../../../redux/slice/transactionSlice";

import InputFormFieldNormal from "../../../../components/input/InputFormFieldNormal";
import * as yup from "yup";
// style={[{ paddingTop: Platform.OS == "android" ? 100 : 100 }]}

export default function AirtimeConfirmation({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const [confirmed, setConfirm] = useState(false);
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const transferObject = useAppSelector(selectTransaction);

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View style={{ paddingHorizontal: hp(23) }}>
          <Text style={styles.txt}>
            Kindly confirm the details of this transaction
          </Text>

          <ImageInput
            label={"To"}
            placeholder={"Glo"}
            source={Glo}
            icon={undefined}
            value={""}
          />

          <Input
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[
              styles.input,
              {
                borderBottomColor:
                  colorScheme === "dark" ? "#262626" : "#EAEAEC",
              },
            ]}
            labelStyle={{
              fontFamily: "Euclid-Circular-A",
              fontWeight: "400",
              fontSize: hp(16),
              color: colorScheme === "dark" ? "#999999" : "#000000",
            }}
            label="Phone Number"
            value="1234ueydjThs567890"
            placeholderTextColor={
              colorScheme === "dark" ? "#E7E9EA" : "#000000"
            }
          />

          <Input
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[
              styles.input,
              {
                borderBottomColor:
                  colorScheme === "dark" ? "#262626" : "#EAEAEC",
              },
            ]}
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
            value={"\u20A62,000 (Airtime)"}
            returnKeyType="done"
          />

          <Input
            icon={null}
            keyboardType="default"
            inputStyle={[
              styles.input,
              {
                borderBottomColor:
                  colorScheme === "dark" ? "#262626" : "#EAEAEC",
              },
            ]}
            labelStyle={{
              fontFamily: "Euclid-Circular-A",
              fontWeight: "500",
              fontSize: hp(16),
              color: colorScheme === "dark" ? "#E7E9EA" : "#000000",
            }}
            label="Payment Method"
            // placeholder="Select your payment method"
            // placeholderTextColor={
            //   colorScheme === "dark" ? "#E7E9EA" : "#000000"
            // }
            value="Aza Account"
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
    borderBottomWidth: 1,
    marginBottom: 30,
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
