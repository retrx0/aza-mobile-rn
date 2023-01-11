import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Header } from "../../../../components/text/header";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import MyButton from "../sub-components/MyButton";
import CustomDropdown from "../../../../components/dropdown/CustomDropdown";
import { Card } from "../sub-components/Card";
import { SafeAreaView } from "../../../../theme/Themed";

import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import CommonStyles from "../../../../common/styles/CommonStyles";

import { CommonScreenProps } from "../../../../common/navigation/types";

import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import * as Images from "../../../../../assets/images/index";

const Cable = [
  {
    title: "DSTV",
    icon: Images.Dstv,
  },
  {
    title: "GOTV",
    icon: Images.Gotv,
  },
  {
    title: "Startimes",
    icon: Images.Startimes,
  },
];

export default function CableTvIndex({
  navigation,
}: CommonScreenProps<"CableTV">) {
  const [selectedCable, setSelectedCable] = useState<{
    title: string;
    icon: string;
  }>({ title: "", icon: "" });
  const [amount, setAmount] = useState("");
  const [smartCardNumber, setSmartCardNumber] = useState("");

  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const period = [
    { label: "DSTV Padi", value: "10000" },
    { label: "DSTV Yanga", value: "1000" },
    { label: "DSTV Confam", value: "3500" },
    { label: "DSTV Compact", value: "4000" },
    { label: "DSTV Compact Plus", value: "5000" },
    { label: "DSTV Premium", value: "6000" },
  ];

  return (
    <SafeAreaView style={[CommonStyles.parentContainer, styles2.container]}>
      <Header
        description=""
        descriptionStyle={null}
        headerStyle={{
          fontSize: hp(16),
          fontWeight: "500",
          fontFamily: "Euclid-Circular-A-Medium",
          marginTop: hp(30),
        }}
        heading="Select Cable TV"
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={CommonStyles.imageHeaderContainer}
      >
        {Cable.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              icon={item.icon}
              onPress={() => setSelectedCable(item)}
              isActive={item.title === selectedCable.title}
            />
          );
        })}
      </ScrollView>

      <View style={{ paddingHorizontal: hp(20) }}>
        <UnderlinedInput
          icon={null}
          keyboardType="number-pad"
          inputStyle={[styles.input]}
          labelStyle={styles.label}
          label="Smart Card Number"
          placeholder="Enter your smart card number"
          returnKeyType="done"
          value={smartCardNumber}
          onChangeText={(text) => {
            setSmartCardNumber(text);
          }}
        />
      </View>

      <View
        style={{
          paddingHorizontal: hp(20),
          marginBottom: hp(20),
          marginTop: hp(20),
        }}
      >
        <Text
          style={{
            fontSize: hp(16),
            fontWeight: "400",
            fontFamily: "Euclid-Circular-A",

            color: colorScheme === "dark" ? "#ffffff" : "#000000",
          }}
        >
          Subscription Package
        </Text>
        <CustomDropdown
          data={period}
          placeholder="Select your subscription"
          setValue={setAmount}
          value={amount}
          label={""}
        />
      </View>

      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}
      >
        <MyButton
          disabled={!amount || !smartCardNumber || !selectedCable.title}
          title="Continue"
          onPress={() => {
            navigation.navigate("PaymentConfirmation", {
              amount,
              beneficiaryLogo: selectedCable.icon,
              beneficiaryName: selectedCable.title,
              purchaseName: "TV subscription",
              smartCardNumber,
              paymentMethod: "Aza Account",
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles2 = StyleSheet.create({
  container: {
    marginTop: 70,
  },
});
