import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "../../../../components/Themed";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Header } from "../../../../components/text/header";
import HeadrImage from "../sub-components/HeadrImage";
import { Input } from "../../../../components/input/input";
import MyButton from "../sub-components/MyButton";
import SelectInput from "../../../../components/input/SelectInput";

export default function ElectricityIndex({ navigation }: { navigation: { navigate: any } }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const bundles = ["100mb", "200mb", "500mb"];
  return (
    <SafeAreaView style={[CommonStyles.parentContainer, styles2.container]}>
      <Header
        style={styles.header}
        description=""
        descriptionStyle={null}
        headerStyle={null}
        heading="Select electricity provider"
      />

      <ScrollView horizontal style={CommonStyles.imageHeaderContainer}>
        <HeadrImage selected index={0} image={require("../../../../assets/images/ie.png")} title="IE" />
      </ScrollView>

      <SelectInput items={bundles} title="Meter Type" placeHolder="Choose a bundle" style={styles.select} />
      <Input
        icon={null}
        keyboardType="phone-pad"
        inputStyle={styles.input}
        labelStyle={styles.label}
        label="Meter Number"
        placeholder="Enter your meter number"
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
    marginTop: 70,
  },
});
