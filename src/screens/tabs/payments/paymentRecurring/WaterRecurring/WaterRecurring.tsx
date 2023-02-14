// import { ScrollView, StyleSheet } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "../../../../../theme/Themed";
// import { View } from "../../../../../theme/Themed";
// import { AIrtimeStyles as styles } from "../../airtime-screens/styles";
// import CommonStyles from "../../../../../common/styles/CommonStyles";
// import { Header } from "../../../../../components/text/header";
// import { UnderlinedInput } from "../../../../../components/input/UnderlinedInput";
// import { hp } from "../../../../../common/util/LayoutUtil";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import * as Images from "../../../../../../assets/images/index";
// import { Card } from "../../sub-components/Card";
// import CustomDropdown from "../../../../../components/dropdown/CustomDropdown";
// import { CommonScreenProps } from "../../../../../common/navigation/types";
// import { useAppSelector } from "../../../../../redux";
// import { selectAppTheme } from "../../../../../redux/slice/themeSlice";
// import { getAppTheme } from "../../../../../theme";
// import Button from "../../../../../components/buttons/Button";

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

// export default function WaterRecurring({
//   navigation,
// }: CommonScreenProps<"SetupRecurringTransfer">) {
//   // const [isEnabled, setIsEnabled] = useState(false);
//   // const [currentIndex, setCurrent] = useState(0);
//   const insets = useSafeAreaInsets();
//   // const [selected, setSelected] = useState(false);
//   // const [active, setActive] = useState("");
//   const [periodValue, setPeriodValue] = useState("");
//   const selectedTheme = useAppSelector(selectAppTheme);
//   const appTheme = getAppTheme(selectedTheme);

//   const [dayValue, setDayValue] = useState("");
//   const [selectedWater, setSelectedWater] = useState<{
//     title: string;
//     icon: string;
//   }>({ title: "", icon: "" });
//   const [customerAccountNumber, setCustomerAccountNumber] = useState("");
//   const period = [
//     { label: "Monthly", value: "monthly" },
//     { label: "Weekly", value: "weekly" },
//     { label: "Daily", value: "daily" },
//   ];

//   const dayMonthly = [
//     { label: "First Day of the Month", value: "1" },
//     { label: "2nd", value: "2" },
//     { label: "3rd", value: "3" },
//   ];

//   const dayWeekly = [
//     { label: "Sunday", value: "sunday" },
//     { label: "Monday", value: "monday" },
//     { label: "Tuesday", value: "tuesday" },
//     { label: "Wednesday", value: "wednesday" },
//     { label: "Thursday", value: "thursday" },
//     { label: "Friday", value: "friday" },
//     { label: "Saturday", value: "saturday" },
//   ];

//   return (
//     <SafeAreaView style={[CommonStyles.parentContainer, styles2.container]}>
//       <Header
//         style={styles.header}
//         description=""
//         descriptionStyle={null}
//         headerStyle={{
//           fontSize: hp(16),
//           fontWeight: "500",
//           fontFamily: "Euclid-Circular-A-Medium",
//           marginLeft: hp(3),
//           marginTop: hp(30),
//         }}
//         heading="Select water provider"
//       />

//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={CommonStyles.imageHeaderContainer}>
//         {WaterList.map((item, index) => {
//           return (
//             <Card
//               key={index}
//               title={item.title}
//               icon={item.icon}
//               onPress={() => setSelectedWater(item)}
//               isActive={item.title === selectedWater.title}
//             />
//           );
//         })}
//       </ScrollView>
//       <View style={{ paddingHorizontal: hp(20) }}>
//         <UnderlinedInput
//           style={styles2.input}
//           icon={null}
//           keyboardType="phone-pad"
//           returnKeyType="done"
//           inputStyle={[
//             styles.input,
//             { borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC" },
//           ]}
//           labelStyle={styles.label}
//           label="Customer Account Number"
//           placeholder="Enter your customer account number"
//           value={customerAccountNumber}
//           onChangeText={(text) => {
//             setCustomerAccountNumber(text);
//           }}
//         />
//       </View>
//       <View style={{ paddingHorizontal: hp(20) }}>
//         <View style={{ marginBottom: hp(40) }}>
//           <CustomDropdown
//             data={period}
//             placeholder="Choose a period"
//             setValue={setPeriodValue}
//             value={periodValue}
//             label={"Period"}
//           />
//         </View>
//         {periodValue !== "daily" && (
//           <View style={{ marginBottom: hp(40) }}>
//             <CustomDropdown
//               data={periodValue === "weekly" ? dayWeekly : dayMonthly}
//               placeholder="Choose a day"
//               setValue={setDayValue}
//               value={dayValue}
//               label={"Day"}
//             />
//           </View>
//         )}
//       </View>
//       <View
//         style={[
//           CommonStyles.passwordContainer,
//           { bottom: insets.bottom || hp(45) },
//         ]}>
//         <Button
//           disabled={!periodValue || !dayValue}
//           title="Continue"
//           onPressButton={() =>
//             navigation.push("TransactionKeypad", {
//               headerTitle: "Recurring Transfer",
//               transactionType: {
//                 type: "recurring",
//                 beneficiary: {
//                   beneficiaryAccount: "",
//                   beneficiaryImage: selectedWater.icon,
//                   beneficiaryName: selectedWater.title,
//                 },
//                 period: periodValue,
//                 day: dayValue,
//               },
//             })
//           }
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles2 = StyleSheet.create({
//   container: {
//     marginTop: 70,
//   },
//   input: {
//     marginTop: 0,
//     marginBottom: 40,
//   },
// });
import React from "react";
import { Image } from "react-native";

import { Text, View as View } from "../../../../../theme/Themed";

import CommonStyles from "../../../../../common/styles/CommonStyles";

import { CommonScreenProps } from "../../../../../common/navigation/types";

import { hp, wp } from "../../../../../common/util/LayoutUtil";
// import * as Images from "../../../../../assets/images/index";
import SpacerWrapper from "../../../../../common/util/SpacerWrapper";
import { Water } from "../../../../../../assets/images";

export default function WaterRecurring({
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
          Easily pay for your water services through Aza
        </Text>
        <Image
          source={Water}
          resizeMode="cover"
          style={{
            width: wp(196),
            height: hp(242),
            marginTop: hp(80),
            alignSelf: "center",
          }}
        />
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
