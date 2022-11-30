import React, { useLayoutEffect, useState } from "react";
import { StyleSheet } from "react-native";

import BackButton from "../../components/buttons/BackButton";
import { Text, View } from "../../components/Themed";
import Button from "../../components/buttons/Button";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";
import CustomDropdown from "../../components/dropdown/CustomDropdown";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../common/navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SetupRecurringTransferScreen = ({
  navigation,
}: CommonScreenProps<"SetupRecurringTransfer">) => {
  const [periodValue, setPeriodValue] = useState("");
  const [dayValue, setDayValue] = useState("");
  const colorScheme = useColorScheme();

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          // lightColor={Colors.light.text}
          // darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          Recurring Transfer
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
  }, []);
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <View>
          <Text
            // lightColor={Colors.light.mainText}
            // darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: hp(16),
              marginTop: hp(30),
              marginBottom: hp(40),
            }}>
            Setup a recurring money transfer
          </Text>
          <View style={{ marginBottom: hp(40) }}>
            <Text
              // lightColor={Colors.light.secondaryText}
              // darkColor={Colors.dark.secondaryText}
              style={{
                fontSize: hp(16),
                fontWeight: "500",

                fontFamily: "Euclid-Circular-A-Medium",
              }}>
              Period
            </Text>
            <CustomDropdown
              data={period}
              placeholder="Choose a period"
              setValue={setPeriodValue}
              value={periodValue}
              label={""}
            />
          </View>
          {periodValue !== "daily" && (
            <View style={{ marginBottom: hp(40) }}>
              <Text
                // lightColor={Colors.light.secondaryText}
                // darkColor={Colors.dark.secondaryText}
                style={{
                  fontSize: hp(16),
                  fontWeight: "500",
                  fontFamily: "Euclid-Circular-A-Medium",
                }}>
                Day
              </Text>
              <CustomDropdown
                data={periodValue === "weekly" ? dayWeekly : dayMonthly}
                placeholder="Choose a day"
                setValue={setDayValue}
                value={dayValue}
                label={""}
              />
            </View>
          )}
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}>
          <Button
            title="Continue"
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
              CommonStyles.button,
            ]}
          />
          <CancelButtonWithUnderline
            title="Cancel"
            color={Colors.general.red}
            styleText={CommonStyles.cancelStyle}
            onPressButton={() => navigation.goBack()}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default SetupRecurringTransferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: hp(23),
  },
});
