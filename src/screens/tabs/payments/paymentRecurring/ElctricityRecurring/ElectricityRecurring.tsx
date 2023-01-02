import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "../../../../../theme/Themed";
import { View } from "../../../../../theme/components/View";
import { AIrtimeStyles as styles } from "../../airtime-screens/styles";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import { Header } from "../../../../../components/text/header";
import { UnderlinedInput } from "../../../../../components/input/UnderlinedInput";
import MyButton from "../../sub-components/MyButton";
import { RootTabScreenProps } from "../../../../../../types";
import { hp } from "../../../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useColorScheme from "../../../../../hooks/useColorScheme";
import CustomDropdown from "../../../../../components/dropdown/CustomDropdown";

import * as Images from "../../../../../../assets/images/index";
import { Card } from "../../sub-components/Card";
import { CommonScreenProps } from "../../../../../common/navigation/types";

const ElectricityList = [
  {
    title: "IE",
    icon: Images.Ie,
  },
  {
    title: "AEDC",
    icon: Images.AEDC,
  },
  {
    title: "EEDC",
    icon: Images.EEDC,
  },
  {
    title: "EKEDC",
    icon: Images.EKEDC,
  },
  {
    title: "PHED",
    icon: Images.PH,
  },
];

export default function ElectricityRecurring({
  navigation,
}: CommonScreenProps<"SetupRecurringTransfer">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const bundles = ["Prepaid", "Postpaid"];
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const [active, setActive] = useState("");

  const [periodValue, setPeriodValue] = useState("");

  // const { icon } = route.params;
  const [dayValue, setDayValue] = useState("");

  const period = [
    { label: "Monthly", value: "monthly" },
    { label: "Weekly", value: "weekly" },
    { label: "Daily", value: "daily" },
  ];

  const dayMonthly = [
    { label: "First Day of the Month", value: "1" },
    { label: "2nd", value: "2" },
    { label: "3rd", value: "3" },
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
  const meter = [
    { label: "Prepaid", value: "1" },
    { label: "Postpaid", value: "1" },
  ];

  return (
    <SafeAreaView style={[CommonStyles.parentContainer, styles2.container]}>
      <Header
        style={styles.header}
        description=""
        descriptionStyle={null}
        headerStyle={{
          fontSize: hp(16),
          fontWeight: "500",
          fontFamily: "Euclid-Circular-A-Medium",
          marginTop: hp(10),
        }}
        heading="Select electricity provider"
      />

      {/* <ScrollView horizontal style={CommonStyles.imageHeaderContainer}>
        <HeaderImage selected index={0} image={Ie} title="IE" />
        <HeaderImage selected index={0} image={AEDC} title="AEDC" />
        <HeaderImage selected index={0} image={EEDC} title="EEDC" />
        <HeaderImage selected index={0} image={EKEDC} title="EKEDC" />
        <HeaderImage selected index={0} image={PH} title="PHED" />
      </ScrollView> */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[CommonStyles.imageHeaderContainer, { marginTop: hp(10) }]}
      >
        {ElectricityList.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              icon={item.icon}
              onPress={() => setActive(item.icon)}
              isActive={item.icon === active}
            />
          );
        })}
      </ScrollView>
      <View
        style={{
          paddingHorizontal: hp(20),
        }}
      >
        <CustomDropdown
          label="Meter Type"
          data={meter}
          placeholder="Choose your meter type"
          setValue={setPeriodValue}
          value={periodValue}
          placeholderstyle={[
            { fontFamily: "Euclid-Circular-A" },
            { fontWeight: "400" },
            { fontSize: hp(16) },
          ]}
        />
      </View>
      <View style={{ paddingHorizontal: hp(20), marginBottom: hp(20) }}>
        <UnderlinedInput
          icon={null}
          inputStyle={[
            styles.input,
            {
              borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
            },
          ]}
          labelStyle={styles.label}
          label="Meter Number"
          placeholder="Enter your meter number"
        />
      </View>
      <View style={{ paddingHorizontal: hp(20) }}>
        <View style={{ marginBottom: hp(40) }}>
          <CustomDropdown
            data={period}
            placeholder="Choose a period"
            setValue={setPeriodValue}
            value={periodValue}
            label={"Period"}
          />
        </View>
        {periodValue !== "daily" && (
          <View style={{ marginBottom: hp(40) }}>
            <CustomDropdown
              data={periodValue === "weekly" ? dayWeekly : dayMonthly}
              placeholder="Choose a day"
              setValue={setDayValue}
              value={dayValue}
              label={"Day"}
            />
          </View>
        )}
      </View>
      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}
      >
        <MyButton
          disabled={!bundles}
          title="Continue"
          onPress={() =>
            navigation.push("TransactionKeypad", {
              headerTitle: "Recurring Transfer",
              transactionType: {
                type: "recurring",
                beneficiary: {
                  beneficiaryAccount: "",
                  beneficiaryImage: "",
                  beneficiaryName: "",
                },
                period: periodValue,
                day: dayValue,
              },
            })
          }
          // style={{ marginTop: hp(250) }}
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
