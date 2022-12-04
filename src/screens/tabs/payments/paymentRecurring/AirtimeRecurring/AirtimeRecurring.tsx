import React, { useState } from "react";
import { View } from "../../../../../components/Themed";
import { AIrtimeStyles as styles } from "../../airtime-screens/styles";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import { Header } from "../../../../../components/text/header";
import { Input } from "../../../../../components/input/input";
import { useRoute } from "@react-navigation/native";
import CustomSwitch from "../../../../../components/input/CustomSwitch";
import Colors from "../../../../../constants/Colors";
import useColorScheme from "../../../../../hooks/useColorScheme";
import Button from "../../../../../components/buttons/Button";
import SpacerWrapper from "../../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../../../common/util/LayoutUtil";
import CustomDropdown from "../../../../../components/dropdown/CustomDropdown";
import * as Images from "../../../../../../assets/images/index";
import { Card } from "../../sub-components/Card";
import { CommonScreenProps } from "../../../../../common/navigation/types";

const Network = [
  {
    title: "Glo",
    icon: Images.Glo,
  },
  {
    title: "MTN",
    icon: Images.Mtn,
  },
  {
    title: "Airtel",
    icon: Images.Airtel,
  },
  {
    title: "9mobile",
    icon: Images.etisalat,
  },
];
export default function AirtimeRecurring({
  navigation,
}: CommonScreenProps<"SetupRecurringTransfer">) {
  const [isEnabled, setIsEnabled] = useState(false);
  // const [selected, setSelected] = useState(false);
  // const [currentIndex, setCurrent] = useState(0);
  const route = useRoute();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  // const bundles = ["100mb", "200mb", "500mb"];
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const [periodValue, setPeriodValue] = useState("");
  const [active, setActive] = useState("");

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

  // const [airtimeOperators, setAirtimeOperators] = useState<
  //   {
  //     name: string;
  //     logoUrls: string[];
  //     operatorId: number;
  //   }[]
  // >([]);

  // useEffect(() => {
  //   fetchAirtimeOperators().then((r) => setAirtimeOperators(r.data.data));
  // }, []);

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <Header
          description=""
          descriptionStyle={null}
          headerStyle={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontWeight: "600",
            fontSize: hp(16),
            marginTop: hp(15),
            marginBottom: 10,
          }}
          heading="  Select Network Provider"
        />

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}>
          {Network.map((item, index) => {
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
        </View>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Input
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[
              {
                borderBottomColor:
                  colorScheme === "dark" ? "#262626" : "#EAEAEC",
                width: "100%",
                borderBottomWidth: 1,
                fontFamily: "Euclid-Circular-A",
                fontWeight: "500",
                fontSize: hp(16),
              },
            ]}
            labelStyle={styles.label}
            label="Phone Number"
            placeholder="Enter a phone number"
          />
          <CustomSwitch
            title="My number"
            onValueChange={toggleSwitch}
            isEnabled={isEnabled}
          />
          <View style={{ marginBottom: hp(15) }}>
            <Input
              icon={null}
              inputStyle={[
                styles.input,
                {
                  borderBottomColor:
                    colorScheme === "dark" ? "#262626" : "#EAEAEC",
                },
              ]}
              label="Amount"
              placeholder="Enter an amount"
              keyboardType="number-pad"
              labelStyle={undefined}
            />
          </View>
          {route.name == "airtime" && (
            <>
              <View style={{ marginBottom: hp(15) }}>
                <CustomDropdown
                  data={period}
                  placeholder="Choose a period"
                  setValue={setPeriodValue}
                  value={periodValue}
                  label={"Period"}
                />
              </View>
              {periodValue !== "daily" && (
                <View>
                  <CustomDropdown
                    data={periodValue === "weekly" ? dayWeekly : dayMonthly}
                    placeholder="Choose a day"
                    setValue={setDayValue}
                    value={dayValue}
                    label={"Day"}
                  />
                </View>
              )}
            </>
          )}
        </View>

        <View
          style={{
            paddingHorizontal: hp(20),
          }}>
          {route.name == "data bundle" && (
            <>
              <CustomDropdown
                data={period}
                placeholder="Choose a bundle"
                setValue={setPeriodValue}
                value={periodValue}
                style={[
                  { fontFamily: "Euclid-Circular-A" },
                  { fontWeight: "400" },
                  { fontSize: hp(16) },
                ]}
                label={"Bundle"}
              />
            </>
          )}
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}>
          <Button
            title="continue"
            // onPressButton={() =>
            //   navigation
            //     .getParent()
            //     ?.navigate("Common", { screen: "VaultToBank" })
            // }
            onPressButton={() =>
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
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
            ]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
}
