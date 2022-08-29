import { View, Text, ScrollView, Switch, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "../../../../components/Themed";
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

export default function InternetDetail({ navigation }: { navigation: { navigate: any } }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentIndex, setCurrent] = useState(0);
  const route = useRoute();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const bundles = ["100mb", "200mb", "500mb"];
  return (
    <SafeAreaView style={[CommonStyles.parentContainer, styles2.container]}>
      <Header description="" descriptionStyle={null} headerStyle={null} heading="Subscribe to an internet plan" />

      <Input
        icon={null}
        keyboardType="phone-pad"
        inputStyle={[styles.input]}
        labelStyle={styles.label}
        label="Account/User ID"
        placeholder="Enter your User ID"
      />

      <SelectInput
        items={bundles}
        title="Bundle"
        placeHolder="Choose a bundle"
        style={[styles.select, styles2.select]}
      />
      <Input
        icon={null}
        inputStyle={styles.input}
        labelStyle={styles.label}
        label="Amount"
        placeholder="Enter an amount"
      />
      <MyButton
        disabled={false}
        title="Continue"
        onPress={() => {
          navigation.navigate("confirm");
        }}
      />
    </SafeAreaView>
  );
}

const styles2 = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  select: {
    marginTop: 20,
  },
});
