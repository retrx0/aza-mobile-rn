import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "../../../../../theme/Themed";
import { View } from "../../../../../theme/Themed";
import { AIrtimeStyles as styles } from "../../airtime-screens/styles";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import { Header } from "../../../../../components/text/header";
import { UnderlinedInput } from "../../../../../components/input/UnderlinedInput";
import { useRoute } from "@react-navigation/native";
import Button from "../../../../../components/buttons/Button";
import useColorScheme from "../../../../../hooks/useColorScheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../../../common/util/LayoutUtil";
import CustomDropdown from "../../../../../components/dropdown/CustomDropdown";
import { CommonScreenProps } from "../../../../../common/navigation/types";

export default function RecurringPlan({
  navigation,
}: CommonScreenProps<"RecurringPlan">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentIndex, setCurrent] = useState(0);
  const route = useRoute();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const bundles = ["100mb", "200mb", "500mb"];
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const [periodValue, setPeriodValue] = useState("");
  const [dayValue, setDayValue] = useState("");

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
        headerStyle={{
          fontSize: hp(16),
          fontWeight: "500",
          fontFamily: "Euclid-Circular-A-Medium",
          marginTop: hp(30),
          marginLeft: 3,
        }}
        heading="Subscribe to an internet plan"
      />
      <View style={{ paddingHorizontal: hp(20) }}>
        <UnderlinedInput
          icon={null}
          keyboardType="default"
          inputStyle={[
            styles.input,
            {
              borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
            },
          ]}
          labelStyle={[styles.label]}
          label="Account/User ID"
          placeholder="Enter your User ID"
        />
      </View>

      <View
        style={{
          paddingHorizontal: hp(20),
          marginTop: hp(30),
          marginBottom: hp(40),
        }}
      >
        <CustomDropdown
          label="Bundle"
          data={period}
          placeholder="Choose a bundle"
          setValue={setPeriodValue}
          value={periodValue}
          placeholderstyle={[
            { fontFamily: "Euclid-Circular-A" },
            { fontWeight: "400" },
            { fontSize: hp(16) },
          ]}
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
        <Button
          title="Continue"
          onPressButton={() =>
            navigation.push("TransactionKeypad", {
              headerTitle: "Recurring Transfer",
              transactionType: {
                type: "recurring",
                beneficiary: {
                  accountNumber: "",
                  fullName: "",
                },
                period: periodValue,
                day: dayValue,
              },
            })
          }
          styleText={{}}
          style={[]}
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
});
