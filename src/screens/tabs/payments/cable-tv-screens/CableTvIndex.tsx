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
import { Dstv, Gotv, Ie, Startimes } from "../../../../../assets/images";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomDropdown from "../../../../components/dropdown/CustomDropdown";
import useColorScheme from "../../../../hooks/useColorScheme";
import * as Images from "../../../../../assets/images/index";
import { Card } from "../sub-components/Card";

const Cable = [
  {
    title: "DSTV",
    icon: Images.Dstv,
  },
  {
    title: "GOTV",
    icon: Images.Gotv,
  },
  {
    title: "Startimes",
    icon: Images.Startimes,
  },
];

export default function CableTvIndex({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentIndex, setCurrent] = useState(0);
  const route = useRoute();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const bundles = ["100mb", "200mb", "500mb"];
  const insets = useSafeAreaInsets();
  const [periodValue, setPeriodValue] = useState("");
  const colorScheme = useColorScheme();
  const [active, setActive] = useState("");

  const period = [
    { label: "DSTV Padi", value: "1" },
    { label: "DSTV Yanga", value: "1" },
    { label: "DSTV Confam", value: "1" },
    { label: "DSTV Compact", value: "1" },
    { label: "DSTV Compact Plus", value: "1" },
    { label: "DSTV Premium", value: "1" },
  ];
  const period2 = [
    { price: "100 ", value: "2" },
    { price: "200 ", value: "2" },
    { price: "500 ", value: "2" },
    { price: "1gb ", value: "2" },
    { price: "1.5gb ", value: "2" },
  ];
  return (
    <SafeAreaView style={[CommonStyles.parentContainer, styles2.container]}>
      <Header
        style={styles.header}
        description=""
        descriptionStyle={null}
        headerStyle={{
          fontSize: hp(16),
          fontWeight: "500",
          fontFamily: "Euclid-Circular-A-Medium",
          marginTop: hp(30),
        }}
        heading="Select Cable TV"
      />

      {/* <ScrollView horizontal style={CommonStyles.imageHeaderContainer}>
        <HeadrImage selected index={0} image={Dstv} title="DSTV" />
        <HeadrImage selected index={0} image={Gotv} title="GOTV" />
        <HeadrImage selected index={0} image={Startimes} title="Startimes" />
      </ScrollView> */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={CommonStyles.imageHeaderContainer}>
        {Cable.map((item, index) => {
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
      </ScrollView>

      <View style={{ paddingHorizontal: hp(20) }}>
        <Input
          icon={null}
          keyboardType="phone-pad"
          inputStyle={[
            styles.input,
            {
              borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
            },
          ]}
          labelStyle={styles.label}
          label="Smart Card Number"
          placeholder="Enter your smart card number"
        />
      </View>

      <View
        style={{
          paddingHorizontal: hp(20),
          marginTop: hp(30),
          marginBottom: hp(10),
        }}>
        <CustomDropdown
          data={period}
          placeholder="Choose a subscription package"
          setValue={setPeriodValue}
          value={periodValue}
          style={[
            { fontFamily: "Euclid-Circular-A" },
            { fontWeight: "400" },
            { fontSize: hp(16) },
          ]}
          label="Subscription Package"
        />
      </View>

      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}>
        <MyButton
          disabled={false}
          title="Continue"
          onPress={() => {
            navigation.navigate("Common", { screen: "CableConfirmation" });
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
