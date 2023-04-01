// import { View, ScrollView, StyleSheet } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "../../../../../theme/Themed";
// import { AIrtimeStyles as styles } from "../../airtime-screens/styles";
// import CommonStyles from "../../../../../common/styles/CommonStyles";
// import { Header } from "../../../../../components/text/header";
// import { UnderlinedInput } from "../../../../../components/input/UnderlinedInput";
// import { useRoute } from "@react-navigation/native";
// import { hp } from "../../../../../common/util/LayoutUtil";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import CustomDropdown from "../../../../../components/dropdown/CustomDropdown";
// import * as Images from "../../../../../../assets/images/index";
// import { Card } from "../../sub-components/Card";
// import { CommonScreenProps } from "../../../../../common/navigation/types";
// import { useAppSelector } from "../../../../../redux";
// import { selectAppTheme } from "../../../../../redux/slice/themeSlice";
// import { getAppTheme } from "../../../../../theme";
// import Button from "../../../../../components/buttons/Button";

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

// export default function CableRecurring({
//   navigation,
// }: CommonScreenProps<"SetupRecurringTransfer">) {
//   // const [isEnabled, setIsEnabled] = useState(false);
//   // const [currentIndex, setCurrent] = useState(0);
//   const route = useRoute();
//   // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
//   const insets = useSafeAreaInsets();
//   const [periodValue, setPeriodValue] = useState("");
//   const [selectedCable, setSelectedCable] = useState<{
//     title: string;
//     icon: string;
//   }>({ title: "", icon: "" });
//   const [amount, setAmount] = useState("");
//   const [smartCardNumber, setSmartCardNumber] = useState("");
//   // const { icon } = route.params;
//   const [dayValue, setDayValue] = useState("");
//   const selectedTheme = useAppSelector(selectAppTheme);
//   const appTheme = getAppTheme(selectedTheme);

//   const subscription = [
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
//   const period = [
//     { label: "DSTV Padi", value: "1" },
//     { label: "DSTV Yanga", value: "1" },
//     { label: "DSTV Confam", value: "1" },
//     { label: "DSTV Compact", value: "1" },
//     { label: "DSTV Compact Plus", value: "1" },
//     { label: "DSTV Premium", value: "1" },
//   ];
//   // const period2 = [
//   //   { price: "100 ", value: "2" },
//   //   { price: "200 ", value: "2" },
//   //   { price: "500 ", value: "2" },
//   //   { price: "1gb ", value: "2" },
//   //   { price: "1.5gb ", value: "2" },
//   // ];
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
//           marginTop: hp(20),
//         }}
//         heading="Select Cable TV"
//       />

//       {/* <ScrollView horizontal style={CommonStyles.imageHeaderContainer}>
//         <HeadrImage selected index={0} image={Dstv} title="DSTV" />
//         <HeadrImage selected index={0} image={Gotv} title="GOTV" />
//         <HeadrImage selected index={0} image={Startimes} title="Startimes" />
//       </ScrollView> */}

//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={[CommonStyles.imageHeaderContainer, { marginTop: hp(10) }]}>
//         {Cable.map((item, index) => {
//           return (
//             <Card
//               key={index}
//               title={item.title}
//               icon={item.icon}
//               onPress={() => setSelectedCable(item)}
//               isActive={item.title === selectedCable.title}
//             />
//           );
//         })}
//       </ScrollView>

//       <View style={{ paddingHorizontal: hp(20), marginBottom: hp(15) }}>
//         <UnderlinedInput
//           icon={null}
//           keyboardType="phone-pad"
//           inputStyle={[
//             styles.input,
//             { borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC" },
//           ]}
//           labelStyle={{
//             fontFamily: "Euclid-Circular-A",
//             fontWeight: "400",
//             fontSize: hp(16),
//           }}
//           label="Smart Card Number"
//           placeholder="Enter your smart card number"
//           value={smartCardNumber}
//           onChangeText={(text) => {
//             setSmartCardNumber(text);
//           }}
//           returnKeyType="done"
//         />
//       </View>

//       <View
//         style={{
//           paddingHorizontal: hp(20),
//           marginTop: hp(15),
//           marginBottom: hp(25),
//         }}>
//         <CustomDropdown
//           data={subscription}
//           placeholder="Choose a subscription package"
//           setValue={setPeriodValue}
//           value={periodValue}
//           style={[
//             { fontFamily: "Euclid-Circular-A" },
//             { fontWeight: "400" },
//             { fontSize: hp(16) },
//           ]}
//           label="Subscription Package"
//         />
//       </View>
//       <View style={{ paddingHorizontal: hp(20) }}>
//         <View style={{ marginBottom: hp(25) }}>
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
//           { bottom: insets.top || hp(45) },
//         ]}>
//         <Button
//           disabled={!periodValue || !dayValue || !selectedCable.title}
//           title="Continue"
//           onPressButton={() =>
//             navigation.push("TransactionKeypad", {
//               headerTitle: "Recurring Transfer",
//               transactionType: {
//                 type: "recurring",
//                 beneficiary: {
//                   beneficiaryAccount: "",
//                   beneficiaryImage: selectedCable.icon,
//                   beneficiaryName: selectedCable.title,
//                 },
//                 period: periodValue,
//                 day: dayValue,
//               },
//             })
//           }
//           // style={{ marginTop: 330 }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles2 = StyleSheet.create({
//   container: {
//     marginTop: 70,
//   },
// });
// import { AIrtimeStyles as styles } from "../airtime-screens/styles";
// import * as Images from "../../../../../assets/images/index";
import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View } from "../../../../../theme/Themed";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import { CommonScreenProps } from "../../../../../common/navigation/types";
import { hp, wp } from "../../../../../common/util/LayoutUtil";
import { useAppSelector } from "../../../../../redux";
import { selectAppTheme } from "../../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../../theme";
import SpacerWrapper from "../../../../../common/util/SpacerWrapper";
import { Cable } from "../../../../../../assets/images";

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

export default function CableRecurring({
  navigation,
}: CommonScreenProps<"CableRecurring">) {
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
          The ultimate TV viewing experience like never before!
        </Text>
        <Image
          source={Cable}
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
