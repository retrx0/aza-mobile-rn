import React, { useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Header } from "../../../../components/text/header";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import { SafeAreaView, Text, View as View } from "../../../../theme/Themed";
import { Card } from "../sub-components/Card";
import Button from "../../../../components/buttons/Button";

import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import CommonStyles from "../../../../common/styles/CommonStyles";

import { CommonScreenProps } from "../../../../common/navigation/types";

import { hp, wp } from "../../../../common/util/LayoutUtil";
// import * as Images from "../../../../../assets/images/index";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { Water } from "../../../../../assets/images";

export default function WaterScreen({
  navigation,
}: CommonScreenProps<"Water">) {
  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <Text
          style={{
            marginTop: hp(30),
            textAlign: "center",
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: hp(16),
            fontWeight: "600",
            marginBottom: hp(30),
            color: "#2A9E17",
          }}
        >
          Coming Soon
        </Text>
        <Text
          style={{
            marginTop: hp(30),
            alignSelf: "center",
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: hp(16),
            fontWeight: "500",
            maxWidth: wp(333),
            textAlign: "center",
          }}
        >
          Easily pay for your water services through Aza
        </Text>
        {/* <Image
          source={Water}
          resizeMode="cover"
          style={{
            width: wp(196),
            height: hp(242),
            marginTop: hp(80),
            alignSelf: "center",
          }}
        /> */}
      </View>
    </SpacerWrapper>
  );
}

// const insets = useSafeAreaInsets();
// const [selectedProvider, setSelectedProvider] = useState<{
//   title: string;
//   icon: string;
// }>({ title: "", icon: "" });
// const [amount, setAmount] = useState("");
// const [customerAccountNumber, setCustomerAccountNumber] = useState("");
// const selectedTheme = useAppSelector(selectAppTheme);
// const appTheme = getAppTheme(selectedTheme);

// const WaterList = [
//   {
//     title: "FCTWB",
//     icon: Images.Fctwb,
//   },
//   {
//     title: "LSWC",
//     icon: Images.Lswc,
//   },
//   {
//     title: "CRSWB",
//     icon: Images.Crswb,
//   },
//   {
//     title: "VWS",
//     icon: Images.Vws,
//   },
//   {
//     title: "ENSWC",
//     icon: Images.Enswc,
//   },
// ];

{
  /* <SafeAreaView style={[CommonStyles.parentContainer, styles2.container]}>
      <Header
        style={styles.header}
        description=""
        descriptionStyle={null}
        headerStyle={{
          fontSize: hp(16),
          fontWeight: "500",
          fontFamily: "Euclid-Circular-A-Medium",
          marginLeft: hp(3),
          marginTop: hp(30),
        }}
        heading="Select water provider"
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={CommonStyles.imageHeaderContainer}>
        {WaterList.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              icon={item.icon}
              onPress={() => setSelectedProvider(item)}
              isActive={item.title === selectedProvider.title}
            />
          );
        })}
      </ScrollView>
      <View style={{ paddingHorizontal: hp(20) }}>
        <UnderlinedInput
          style={styles2.input}
          icon={null}
          keyboardType="phone-pad"
          returnKeyType="done"
          inputStyle={[
            styles.input,
            {
              borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
            },
          ]}
          labelStyle={styles.label}
          label="Customer Account Number"
          placeholder="Enter your customer account number"
          value={customerAccountNumber}
          onChangeText={(text) => {
            setCustomerAccountNumber(text);
          }}
        />

        <UnderlinedInput
          style={styles2.input}
          icon={null}
          inputStyle={[
            styles.input,
            {
              borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
            },
          ]}
          labelStyle={styles.label}
          label="Amount"
          placeholder="Enter an amount to be paid"
          keyboardType="number-pad"
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
          disabled={
            !amount || !selectedProvider.title || !customerAccountNumber
          }
          title="Continue"
          onPressButton={() => {
            navigation.navigate("PaymentConfirmation", {
              amount,
              customerAccountNumber,
              beneficiaryLogo: selectedProvider.icon,
              beneficiaryName: selectedProvider.title,
              purchaseName: "water",
            });
          }}
        />
      </View>
    </SafeAreaView> */
}

// const styles2 = StyleSheet.create({
//   container: {
//     marginTop: 70,
//   },
//   input: {
//     marginTop: 0,
//     marginBottom: 40,
//   },
// });
