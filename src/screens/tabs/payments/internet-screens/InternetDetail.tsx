import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  SafeAreaView,
  View as View,
  Text as Text,
} from "../../../../theme/Themed";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Header } from "../../../../components/text/header";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import { useRoute } from "@react-navigation/native";
import { RootTabScreenProps } from "../../../../../types";
import Button from "../../../../components/buttons/Button";
import useColorScheme from "../../../../hooks/useColorScheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import CustomDropdown from "../../../../components/dropdown/CustomDropdown";

export default function InternetDetail({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentIndex, setCurrent] = useState(0);
  const route = useRoute();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const bundles = ["100mb", "200mb", "500mb"];
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const [periodValue, setPeriodValue] = useState("");

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
          inputStyle={[styles.input]}
          labelStyle={[styles.label]}
          label="Account/User ID"
          placeholder="Enter your User ID"
        />
      </View>

      <View
        style={{
          paddingHorizontal: hp(20),
          marginTop: hp(30),
          marginBottom: hp(10),
        }}>
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
        <UnderlinedInput
          keyboardType="phone-pad"
          icon={null}
          inputStyle={[styles.input]}
          labelStyle={[
            styles.label,
            { color: colorScheme === "dark" ? "#E7E9EA" : "#000000" },
          ]}
          label="Amount"
          placeholder="Enter an amount"
          returnKeyType="done"
        />
      </View>

      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}>
        <Button
          title="Continue"
          onPressButton={() =>
            navigation.navigate("Common", { screen: "Confirm" })
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
