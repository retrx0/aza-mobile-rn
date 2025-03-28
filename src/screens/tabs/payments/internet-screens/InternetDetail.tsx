import React, { useImperativeHandle, useState } from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Header } from "../../../../components/text/header";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import Button from "../../../../components/buttons/Button";
import CustomDropdown from "../../../../components/dropdown/CustomDropdown";
import { SafeAreaView, View } from "../../../../theme/Themed";

import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import CommonStyles from "../../../../common/styles/CommonStyles";

import { hp } from "../../../../common/util/LayoutUtil";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";

export default function InternetDetail({
  navigation,
  route,
}: CommonScreenProps<"InternetPlanDetail">) {
  const [amount, setAmount] = useState("");
  const [accountOrUserId, setAccountOrUserId] = useState("");
  const [selectedBundle, setSelectedBundle] = useState("");
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  const insets = useSafeAreaInsets();

  const { name } = route.params;

  const period = [
    { label: "100 ", value: "1" },
    { label: "200 ", value: "1" },
    { label: "500 ", value: "1" },
    { label: "1gb ", value: "1" },
    { label: "1.5gb ", value: "1" },
  ];

  return (
    <SafeAreaView style={[CommonStyles.parentContainer, styles2.container]}>
      <Header
        description=""
        descriptionStyle={null}
        headerStyle={styles2.header}
        heading="Subscribe to an internet plan"
      />
      <View style={{ paddingHorizontal: hp(20) }}>
        <UnderlinedInput
          icon={null}
          keyboardType="default"
          inputStyle={[
            styles.input,
            {
              borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
            },
          ]}
          labelStyle={[styles.label]}
          label="Account/User ID"
          placeholder="Enter your User ID"
          value={accountOrUserId}
          onChangeText={(text) => {
            setAccountOrUserId(text);
          }}
        />
      </View>

      <View
        style={{
          paddingHorizontal: hp(20),
          marginTop: hp(30),
          marginBottom: hp(10),
        }}>
        <CustomDropdown
          label="Bundle"
          data={period}
          placeholder="Choose a bundle"
          setValue={setSelectedBundle}
          value={selectedBundle}
          placeholderstyle={[
            { fontFamily: "Euclid-Circular-A" },
            { fontWeight: "400" },
            { fontSize: hp(16) },
          ]}
        />
      </View>
      <View style={{ paddingHorizontal: hp(20) }}>
        <UnderlinedInput
          keyboardType="phone-pad"
          icon={null}
          inputStyle={[
            styles.input,
            {
              borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
            },
          ]}
          labelStyle={[styles.label]}
          label="Amount"
          placeholder="Enter an amount"
          returnKeyType="done"
          value={amount}
          onChangeText={(text) => {
            setAmount(text);
          }}
        />
      </View>

      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}>
        <Button
          title="Continue"
          disabled={!amount || !selectedBundle || !useImperativeHandle}
          onPressButton={() =>
            navigation.navigate("PaymentConfirmation", {
              amount,
              beneficiaryLogo: "",
              beneficiaryName: name,
              purchaseName: "internet",
              paymentMethod: "Aza Account",
              accountOrUserId,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles2 = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: hp(23),
  },
  select: {
    marginTop: 20,
  },
  header: {
    fontSize: hp(16),
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A-Medium",
    marginTop: hp(30),
    marginLeft: 3,
  },
});
