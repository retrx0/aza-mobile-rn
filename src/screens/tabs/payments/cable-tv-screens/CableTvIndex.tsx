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
import { Ie } from "../../../../../assets/images";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CableTvIndex({
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

          marginTop: hp(30),
        }}
        heading="Select Cable TV"
      />

      <ScrollView horizontal style={CommonStyles.imageHeaderContainer}>
        <HeadrImage selected index={0} image={Ie} title="IE" />
      </ScrollView>

      <SelectInput
        items={bundles}
        title="Smart Card Number"
        placeHolder="Enter your smart card number"
        style={styles.select}
      />

      <Input
        icon={null}
        keyboardType="phone-pad"
        inputStyle={[styles.input]}
        labelStyle={styles.label}
        label="Subscription Package"
        placeholder="Choose a subscription package"
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
