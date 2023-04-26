import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Header } from "../../../../components/text/header";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import MyButton from "../sub-components/MyButton";
import CustomDropdown from "../../../../components/dropdown/CustomDropdown";
import { Card } from "../sub-components/Card";
import { SafeAreaView, ScrollView, Text, View } from "../../../../theme/Themed";

// import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import CommonStyles from "../../../../common/styles/CommonStyles";

import { CommonScreenProps } from "../../../../common/navigation/types";

import { hp, wp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
// import * as Images from "../../../../../assets/images/index";
import Button from "../../../../components/buttons/Button";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { Cable, monitor } from "../../../../../assets/images";

// const Cable = [
//   {
//     title: "DSTV",
//     icon: Images.Dstv,
//   },
//   {
//     title: "GOTV",
//     icon: Images.Gotv,
//   },
//   {
//     title: "Startimes",
//     icon: Images.Startimes,
//   },
// ];

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
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  const period = [
    { label: "DSTV Padi", value: "10000" },
    { label: "DSTV Yanga", value: "1000" },
    { label: "DSTV Confam", value: "3500" },
    { label: "DSTV Compact", value: "4000" },
    { label: "DSTV Compact Plus", value: "5000" },
    { label: "DSTV Premium", value: "6000" },
  ];

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
          }}>
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
          }}>
          The ultimate TV viewing experience like never before!
        </Text>
        <Image
          source={monitor}
          resizeMode="cover"
          style={{
            width: wp(223),
            height: hp(244),
            marginTop: hp(80),
            alignSelf: "center",
          }}
        />
      </View>
    </SpacerWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    padding: 20,
  },
  input: {
    width: "100%",
    borderBottomColor: "#EAEAEC",
    borderBottomWidth: 1,
    height: 40,
    fontSize: hp(16),
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A",
  },
  mainInput: {
    marginTop: 0,
  },
});

// <SafeAreaView style={[CommonStyles.parentContainer, styles2.container]}>
//   <Header
//     description=""
//     descriptionStyle={null}
//     headerStyle={{
//       fontSize: hp(16),
//       fontWeight: "500",
//       fontFamily: "Euclid-Circular-A-Medium",
//       marginTop: hp(30),
//     }}
//     heading="Select Cable TV"
//   />

//   <ScrollView
//     horizontal
//     showsHorizontalScrollIndicator={false}
//     style={CommonStyles.imageHeaderContainer}>
//     {Cable.map((item, index) => {
//       return (
//         <Card
//           key={index}
//           title={item.title}
//           icon={item.icon}
//           onPress={() => setSelectedCable(item)}
//           isActive={item.title === selectedCable.title}
//         />
//       );
//     })}
//   </ScrollView>

//   <View style={{ paddingHorizontal: hp(20) }}>
//     <UnderlinedInput
//       icon={null}
//       keyboardType="number-pad"
//       inputStyle={[
//         styles.input,
//         {
//           borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
//         },
//       ]}
//       labelStyle={styles.label}
//       label="Smart Card Number"
//       placeholder="Enter your smart card number"
//       returnKeyType="done"
//       value={smartCardNumber}
//       onChangeText={(text) => {
//         setSmartCardNumber(text);
//       }}
//     />
//   </View>

//   <View
//     style={{
//       paddingHorizontal: hp(20),
//       marginBottom: hp(20),
//       marginTop: hp(20),
//     }}>
//     <Text
//       style={{
//         fontSize: hp(16),
//         fontWeight: "400",
//         fontFamily: "Euclid-Circular-A",
//       }}>
//       Subscription Package
//     </Text>
//     <CustomDropdown
//       data={period}
//       placeholder="Select your subscription"
//       setValue={setAmount}
//       value={amount}
//       label={""}
//     />
//   </View>

//   <View
//     style={[
//       CommonStyles.passwordContainer,
//       { bottom: insets.top || hp(45) },
//     ]}>
//     <Button
//       disabled={!amount || !smartCardNumber || !selectedCable.title}
//       title="Continue"
//       onPressButton={() => {
//         navigation.navigate("PaymentConfirmation", {
//           amount,
//           beneficiaryLogo: selectedCable.icon,
//           beneficiaryName: selectedCable.title,
//           purchaseName: "TV subscription",
//           smartCardNumber,
//           paymentMethod: "Aza Account",
//         });
//       }}
//     />
//   </View>
// </SafeAreaView>

// const styles2 = StyleSheet.create({
//   container: {
//     marginTop: 70,
//   },
// });
