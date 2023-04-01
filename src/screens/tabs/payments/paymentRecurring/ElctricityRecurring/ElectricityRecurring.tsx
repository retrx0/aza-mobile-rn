// import { ScrollView, StyleSheet } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "../../../../../theme/Themed";
// import { View, Text } from "../../../../../theme/Themed";
// import { AIrtimeStyles as styles } from "../../airtime-screens/styles";
// import CommonStyles from "../../../../../common/styles/CommonStyles";
// import { Header } from "../../../../../components/text/header";
// import { UnderlinedInput } from "../../../../../components/input/UnderlinedInput";
// import MyButton from "../../sub-components/MyButton";
// import { RootTabScreenProps } from "../../../../../../types";
// import { hp } from "../../../../../common/util/LayoutUtil";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import useColorScheme from "../../../../../hooks/useColorScheme";
// import CustomDropdown from "../../../../../components/dropdown/CustomDropdown";

// import * as Images from "../../../../../../assets/images/index";
// import { Card } from "../../sub-components/Card";
// import { CommonScreenProps } from "../../../../../common/navigation/types";
// import Button from "../../../../../components/buttons/Button";
// import { useAppSelector } from "../../../../../redux";
// import { selectAppTheme } from "../../../../../redux/slice/themeSlice";
// import { getAppTheme } from "../../../../../theme";

// const ElectricityList = [
//   {
//     title: "IE",
//     icon: Images.Ie,
//   },
//   {
//     title: "AEDC",
//     icon: Images.AEDC,
//   },
//   {
//     title: "EEDC",
//     icon: Images.EEDC,
//   },
//   {
//     title: "EKEDC",
//     icon: Images.EKEDC,
//   },
//   {
//     title: "PHED",
//     icon: Images.PH,
//   },
// ];

// export default function ElectricityRecurring({
//   navigation,
// }: CommonScreenProps<"SetupRecurringTransfer">) {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const bundles = ["Prepaid", "Postpaid"];
//   const insets = useSafeAreaInsets();
//   const colorScheme = useColorScheme();
//   const [selectedElectricity, setselectedElectricity] = useState<{
//     title: string;
//     icon: string;
//   }>({ title: "", icon: "" });
//   const [periodValue, setPeriodValue] = useState("");
//   const selectedTheme = useAppSelector(selectAppTheme);
//   const appTheme = getAppTheme(selectedTheme);

//   // const { icon } = route.params;

//   const [dayValue, setDayValue] = useState("");
//   const [daymeter, setdayMeter] = useState("");

//   const period = [
//     { label: "Monthly", value: "monthly" },
//     { label: "Weekly", value: "weekly" },
//     { label: "Daily", value: "daily" },
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
//   const meter = [
//     { label: "Prepaid", value: "1" },
//     { label: "Postpaid", value: "1" },
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
//           marginTop: hp(20),
//         }}
//         heading="Select electricity provider"
//       />

//       {/* <ScrollView horizontal style={CommonStyles.imageHeaderContainer}>
//         <HeaderImage selected index={0} image={Ie} title="IE" />
//         <HeaderImage selected index={0} image={AEDC} title="AEDC" />
//         <HeaderImage selected index={0} image={EEDC} title="EEDC" />
//         <HeaderImage selected index={0} image={EKEDC} title="EKEDC" />
//         <HeaderImage selected index={0} image={PH} title="PHED" />
//       </ScrollView> */}
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={[CommonStyles.imageHeaderContainer, { marginTop: hp(10) }]}>
//         {ElectricityList.map((item, index) => {
//           return (
//             <Card
//               key={index}
//               title={item.title}
//               icon={item.icon}
//               onPress={() => setselectedElectricity(item)}
//               isActive={item.title === selectedElectricity.title}
//             />
//           );
//         })}
//       </ScrollView>
//       <View
//         style={{
//           paddingHorizontal: hp(20),
//         }}>
//         <CustomDropdown
//           label="Meter Type"
//           data={meter}
//           placeholder="Choose your meter type"
//           setValue={setdayMeter}
//           value={periodValue}
//           placeholderstyle={[
//             { fontFamily: "Euclid-Circular-A" },
//             { fontWeight: "400" },
//             { fontSize: hp(16) },
//           ]}
//         />
//       </View>
//       <View style={{ paddingHorizontal: hp(20), marginBottom: hp(20) }}>
//         <UnderlinedInput
//           icon={null}
//           inputStyle={[
//             styles.input,
//             { borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC" },
//           ]}
//           labelStyle={styles.label}
//           label="Meter Number"
//           placeholder="Enter your meter number"
//           keyboardType="phone-pad"
//           returnKeyType="done"
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

//         <View style={{ marginBottom: hp(40) }}>
//           <CustomDropdown
//             data={dayWeekly}
//             placeholder="Choose a day"
//             setValue={setDayValue}
//             value={dayValue}
//             label={"Day"}
//           />
//         </View>
//       </View>
//       <View
//         style={[
//           CommonStyles.passwordContainer,
//           { bottom: insets.top || hp(45) },
//         ]}>
//         <Button
//           disabled={!bundles}
//           title="Continue"
//           onPressButton={() =>
//             navigation.push("TransactionKeypad", {
//               headerTitle: "Recurring Transfer",
//               transactionType: {
//                 type: "recurring",
//                 beneficiary: {
//                   beneficiaryAccount: "",
//                   beneficiaryImage: selectedElectricity.icon,
//                   beneficiaryName: selectedElectricity.title,
//                 },
//                 period: periodValue,
//                 day: dayValue,
//               },
//             })
//           }
//           // style={{ marginTop: hp(250) }}
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

import { ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, View as View } from "../../../../../theme/Themed";
import { Header } from "../../../../../components/text/header";
import { UnderlinedInput } from "../../../../../components/input/UnderlinedInput";
import CustomDropdown from "../../../../../components/dropdown/CustomDropdown";
import { Card } from "../../sub-components/Card";
import Button from "../../../../../components/buttons/Button";
import { CommonScreenProps } from "../../../../../common/navigation/types";
import { hp, wp } from "../../../../../common/util/LayoutUtil";
import * as Images from "../../../../../../assets/images/index";
import { AIrtimeStyles as styles } from "../../airtime-screens/styles";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import { toastError } from "../../../../../common/util/ToastUtil";

import { fetchElectricityBillersAPI } from "../../../../../api/utility-bill";
import { useAppDispatch, useAppSelector } from "../../../../../redux";
import {
  getElectricityBillers,
  selectPayment,
} from "../../../../../redux/slice/paymentSlice";
import { PaymentRoundSkeleton } from "../../../../skeletons";
import { IElectricityBiller } from "../../../../../redux/types";
import { NAIRA_UNICODE } from "../../../../../constants/AppConstants";
import ProviderSkeleton from "../../sub-components/ProviderSkeleton";
import { selectAppTheme } from "../../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../../theme";
import SpacerWrapper from "../../../../../common/util/SpacerWrapper";

export default function ElectricittRecurring({
  navigation,
}: CommonScreenProps<"ElectricityRecurring">) {
  const [providers, setProviders] = useState([]);
  const [meterNumber, setMeterNumber] = useState("");
  const [selectedMeterType, setSelectedMeterType] = useState("");
  const [amount, setAmount] = useState("");
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const { electricityBillers } = useAppSelector(selectPayment);
  const [selectedProvider, setSelectedProvider] = useState<IElectricityBiller>({
    name: "",
    id: 0,
    countryName: "",
    logoUrl: "",
    type: "",
    serviceType: "",
    maxLocalTransactionAmount: 0,
    minLocalTransactionAmount: 0,
  });
  const [periodValue, setPeriodValue] = useState("");

  // const { icon } = route.params;

  const [dayValue, setDayValue] = useState("");
  const [daymeter, setdayMeter] = useState("");

  const period = [
    { label: "Monthly", value: "monthly" },
    { label: "Weekly", value: "weekly" },
    { label: "Daily", value: "daily" },
  ];

  const dayWeekly = [
    { label: "Sunday", value: "sunday" },
    { label: "Monday", value: "monday" },
    { label: "Tuesday", value: "tuesday" },
    { label: "Wednesday", value: "wednesday" },
    { label: "Thursday", value: "thursday" },
    { label: "Friday", value: "friday" },
    { label: "Saturday", value: "saturday" },
  ];
  const meterType = [
    { label: "Prepaid", value: "PREPAID" },
    { label: "Postpaid", value: "POSTPAID" },
  ];

  useEffect(() => {
    if (!electricityBillers.loaded) dispatch(getElectricityBillers());

    fetchElectricityBillersAPI()
      .then(({ data }) => {
        const billers = data;
        for (const element of billers) {
          switch (element.name) {
            case "Ikeja Electricity Postpaid":
            case "Ikeja Electricity Prepaid":
              element.icon = Images.Ie;
              element.title = "IE";
              break;
            case "Abuja Electricity Postpaid":
            case "Abuja Electricity Prepaid":
              element.icon = Images.AEDC;
              element.title = "AEDC";
              break;
            case "Eko Electricity Postpaid":
            case "Eko Electricity Prepaid":
              element.icon = Images.EKEDC;
              element.title = "EKEDC";
              break;
            case "Ibadan Electricity Postpaid":
            case "Ibadan Electricity Prepaid":
              element.icon = Images.IBEDC;
              element.title = "IBEDC";
              break;
            case "Enugu Electricity Postpaid":
            case "Enugu Electricity Prepaid":
              element.icon = Images.EEDC;
              element.title = "EEDC";
              break;
            case "Port Harcourt Electricity Postpaid":
            case "Port Harcourt Electricity Prepaid":
              element.icon = Images.PH;
              element.title = "PH";
              break;
            case "Kano Electricity Postpaid":
            case "Kano Electricity Prepaid":
              element.icon = Images.KEDCO;
              element.title = "KEDCO";
              break;
            case "Kaduna Electricity Postpaid":
            case "Kaduna Electricity Prepaid":
              element.icon = Images.KE;
              element.title = "KE";
              break;
            case "Jos Electricity Postpaid":
            case "Jos Electricity Prepaid":
              element.icon = Images.JEDP;
              element.title = "JEDP";
              break;
            default:
              break;
          }
        }
        setProviders(billers);
      })
      .catch(() => toastError("Error while retrieving electricity providers"));
  }, []);

  // removes duplicated providers
  const displayedProviders = new Set();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <Header
          description=""
          descriptionStyle={null}
          headerStyle={{
            fontSize: hp(16),
            fontWeight: "500",
            fontFamily: "Euclid-Circular-A-Medium",
            marginTop: hp(30),
          }}
          heading="Select electricity provider"
        />

        {!electricityBillers.loaded ? (
          <ProviderSkeleton numberOfItems={4} />
        ) : (
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                minHeight: hp(70),
                maxHeight: hp(100),
                marginTop: hp(20),
                marginBottom: hp(25),
              }}
            >
              {electricityBillers.data.map(
                (item: IElectricityBiller, index) => {
                  if (displayedProviders.has(item.name)) {
                    return null;
                  }
                  displayedProviders.add(item.name);
                  return (
                    <Card
                      key={index}
                      title={item.name.split(" ")[0]}
                      icon={Images.KE}
                      onPress={() => {
                        setSelectedProvider(item);
                      }}
                      isActive={item.id === selectedProvider.id}
                    />
                  );
                }
              )}
            </ScrollView>
            <View
              style={{
                paddingHorizontal: hp(20),
                marginBottom: hp(10),
              }}
            >
              {!electricityBillers.loaded ? (
                <PaymentRoundSkeleton />
              ) : (
                <CustomDropdown
                  label="Meter Type"
                  data={meterType}
                  placeholder="Choose your meter type"
                  setValue={setSelectedMeterType}
                  value={selectedProvider.serviceType}
                  placeholderstyle={[
                    { fontFamily: "Euclid-Circular-A" },
                    { fontWeight: "400" },
                    { fontSize: hp(16) },
                  ]}
                />
              )}
            </View>
            <View style={{ paddingHorizontal: hp(20) }}>
              <UnderlinedInput
                icon={null}
                inputStyle={[
                  styles.input,
                  {
                    borderBottomColor:
                      appTheme === "dark" ? "#262626" : "#EAEAEC",
                  },
                ]}
                labelStyle={styles.label}
                label="Meter Number"
                placeholder="Enter your meter number"
                keyboardType="number-pad"
                returnKeyType="done"
                onChangeText={(text) => {
                  setMeterNumber(text);
                }}
              />
            </View>
          </View>
        )}
        <View style={{ paddingHorizontal: hp(20), marginTop: hp(30) }}>
          <View style={{ marginBottom: hp(40) }}>
            <CustomDropdown
              data={period}
              placeholder="Choose a period"
              setValue={setPeriodValue}
              value={periodValue}
              label={"Period"}
            />
          </View>

          <View style={{ marginBottom: hp(40) }}>
            <CustomDropdown
              data={dayWeekly}
              placeholder="Choose a day"
              setValue={setDayValue}
              value={dayValue}
              label={"Day"}
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            disabled={!meterNumber}
            title="Continue"
            onPressButton={() =>
              navigation.push("TransactionKeypad", {
                headerTitle: "Recurring Transfer",
                transactionType: {
                  type: "recurring",
                  beneficiary: {
                    beneficiaryName: "",
                    fullName: "",
                    azaAccountNumber: "",
                  },
                  period: periodValue,
                  day: dayValue,
                },
              })
            }
            // style={{ marginTop: hp(250) }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
}

const styles2 = StyleSheet.create({
  container: {
    marginTop: 70,
  },
});
