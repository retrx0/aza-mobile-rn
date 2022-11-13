import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, View } from "../../../../components/Themed";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Header } from "../../../../components/text/header";
import HeadrImage from "../sub-components/HeadrImage";
import { Input } from "../../../../components/input/input";
import MyButton from "../sub-components/MyButton";
import { useRoute } from "@react-navigation/native";
import { Ie } from "../../../../../assets/images";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function WaterScreen({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentIndex, setCurrent] = useState(0);
  const route = useRoute();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const bundles = ["100mb", "200mb", "500mb"];
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[CommonStyles.parentContainer, styles2.container]}>
      <Header
        style={styles.header}
        description=""
        descriptionStyle={null}
        headerStyle={{
          fontSize: hp(14),
          fontWeight: "500",
          fontFamily: "Euclid-Circular-A-Medium",
          marginLeft: hp(3),
          marginTop: hp(30),
        }}
        heading="Select water provider"
      />

      <ScrollView horizontal style={CommonStyles.imageHeaderContainer}>
        <HeadrImage selected index={0} image={Ie} title="FCTWB" />
      </ScrollView>

      <Input
        style={styles2.input}
        icon={null}
        keyboardType="phone-pad"
        inputStyle={styles.input}
        labelStyle={styles.label}
        label="Customer Account Number"
        placeholder="Enter your customer account number"
      />

      <Input
        style={styles2.input}
        icon={null}
        inputStyle={styles.input}
        labelStyle={styles.label}
        label="Amount"
        placeholder="Enter an amount to be paid"
      />

      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.bottom || hp(45) },
        ]}>
        <MyButton
          disabled={false}
          title="Continue"
          onPress={() => {
            navigation.navigate("Common", { screen: "Confirm" });
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles2 = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  input: {
    marginTop: 0,
    marginBottom: 40,
  },
});
