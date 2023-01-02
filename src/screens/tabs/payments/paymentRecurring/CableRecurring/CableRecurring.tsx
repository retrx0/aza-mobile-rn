import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "../../../../../theme/Themed";
import { AIrtimeStyles as styles } from "../../airtime-screens/styles";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import { Header } from "../../../../../components/text/header";
import { UnderlinedInput } from "../../../../../components/input/UnderlinedInput";
import MyButton from "../../sub-components/MyButton";
import { useRoute } from "@react-navigation/native";
import { RootTabScreenProps } from "../../../../../../types";
import { hp } from "../../../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomDropdown from "../../../../../components/dropdown/CustomDropdown";
import useColorScheme from "../../../../../hooks/useColorScheme";
import * as Images from "../../../../../../assets/images/index";
import { Card } from "../../sub-components/Card";
import { CommonScreenProps } from "../../../../../common/navigation/types";

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

export default function CableRecurring({
  navigation,
}: CommonScreenProps<"SetupRecurringTransfer">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentIndex, setCurrent] = useState(0);
  const route = useRoute();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const bundles = ["100mb", "200mb", "500mb"];
  const insets = useSafeAreaInsets();
  const [periodValue, setPeriodValue] = useState("");
  const colorScheme = useColorScheme();
  const [active, setActive] = useState("");

  // const { icon } = route.params;
  const [dayValue, setDayValue] = useState("");

  const subscription = [
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
  const period = [
    { label: "DSTV Padi", value: "1" },
    { label: "DSTV Yanga", value: "1" },
    { label: "DSTV Confam", value: "1" },
    { label: "DSTV Compact", value: "1" },
    { label: "DSTV Compact Plus", value: "1" },
    { label: "DSTV Premium", value: "1" },
  ];
  // const period2 = [
  //   { price: "100 ", value: "2" },
  //   { price: "200 ", value: "2" },
  //   { price: "500 ", value: "2" },
  //   { price: "1gb ", value: "2" },
  //   { price: "1.5gb ", value: "2" },
  // ];
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
          marginTop: hp(20),
        }}
        heading="Select Cable TV"
      />

      {/* <ScrollView horizontal style={CommonStyles.imageHeaderContainer}>
        <HeadrImage selected index={0} image={Dstv} title="DSTV" />
        <HeadrImage selected index={0} image={Gotv} title="GOTV" />
        <HeadrImage selected index={0} image={Startimes} title="Startimes" />
      </ScrollView> */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[CommonStyles.imageHeaderContainer, { marginTop: hp(10) }]}
      >
        {Cable.map((item, index) => {
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

      <View style={{ paddingHorizontal: hp(20), marginBottom: hp(15) }}>
        <UnderlinedInput
          icon={null}
          keyboardType="phone-pad"
          inputStyle={[
            styles.input,
            {
              borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
            },
          ]}
          labelStyle={{
            fontFamily: "Euclid-Circular-A",
            fontWeight: "400",
            fontSize: hp(16),
          }}
          label="Smart Card Number"
          placeholder="Enter your smart card number"
        />
      </View>

      <View
        style={{
          paddingHorizontal: hp(20),
          marginTop: hp(15),
          marginBottom: hp(25),
        }}
      >
        <CustomDropdown
          data={subscription}
          placeholder="Choose a subscription package"
          setValue={setPeriodValue}
          value={periodValue}
          style={[
            { fontFamily: "Euclid-Circular-A" },
            { fontWeight: "400" },
            { fontSize: hp(16) },
          ]}
          label="Subscription Package"
        />
      </View>
      <View style={{ paddingHorizontal: hp(20) }}>
        <View style={{ marginBottom: hp(25) }}>
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
          disabled={false}
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
          // style={{ marginTop: 330 }}
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
