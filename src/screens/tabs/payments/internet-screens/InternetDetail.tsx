import { Text, ScrollView, Switch, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, View } from "../../../../components/Themed";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Header } from "../../../../components/text/header";
import HeadrImage from "../sub-components/HeadrImage";
import { Input } from "../../../../components/input/input";
import ButtonLg from "../../../../components/buttons/ButtonLg";
import MyButton from "../sub-components/MyButton";
import MySwitch from "../sub-components/MySwitch";
import { useRoute } from "@react-navigation/native";
import SelectInput from "../../../../components/input/SelectInput";
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
        <Input
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
          value=""
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
        <Input
          keyboardType="phone-pad"
          icon={null}
          inputStyle={[
            styles.input,
            {
              borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
            },
          ]}
          labelStyle={[
            styles.label,
            { color: colorScheme === "dark" ? "#E7E9EA" : "#000000" },
          ]}
          label="Amount"
          placeholder="Enter an amount"
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
            navigation.navigate("Common", { screen: "InternetConfirmation" })
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
