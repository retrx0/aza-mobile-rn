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

const SetupRecurringTransferScreen = ({
  navigation,
}: CommonScreenProps<"SetupRecurringTransfer">) => {
  const [periodValue, setPeriodValue] = useState("");
  const [dayValue, setDayValue] = useState("");
  const colorScheme = useColorScheme();

  const periodData = [
    { label: "Monthly", value: "monthly" },
    { label: "Weekly", value: "weekly" },
    { label: "Daily", value: "daily" },
  ];

  const dayData = [
    { label: "First Day of the Month", value: "1" },
    { label: "2nd", value: "2" },
    { label: "3rd", value: "3" },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
          }}
        >
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

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <View>
          <Text
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A",
              fontSize: 14,
              marginTop: hp(30),
              marginBottom: hp(40),
            }}
          >
            Setup a recurring money transfer
          </Text>
          <View style={{ marginBottom: hp(40) }}>
            <Text
              lightColor={Colors.light.secondaryText}
              darkColor={Colors.dark.secondaryText}
              style={{
                fontSize: 14,
              }}
            >
              Period
            </Text>
            <CustomDropdown
              data={periodData}
              placeholder="Choose a period"
              setValue={setPeriodValue}
              value={periodValue}
            />
          </View>
          <View style={{ marginBottom: hp(40) }}>
            <Text
              lightColor={Colors.light.secondaryText}
              darkColor={Colors.dark.secondaryText}
              style={{
                fontSize: 14,
              }}
            >
              Day
            </Text>
            <CustomDropdown
              data={dayData}
              placeholder="Choose a day"
              setValue={setDayValue}
              value={dayValue}
            />
          </View>
        </View>
        <View
          style={[CommonStyles.col, { marginBottom: hp(50), width: "100%" }]}
        >
          <Button
            title="Continue"
            onPressButton={() => console.log("called")}
            styleText={{
              color: Colors[colorScheme].buttonText,
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
            }}
            style={{
              marginVertical: hp(15),
              backgroundColor: Colors[colorScheme].button,
            }}
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
    paddingHorizontal: 15,
  },
});
