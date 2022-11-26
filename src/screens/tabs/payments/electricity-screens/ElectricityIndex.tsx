import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, View } from "../../../../components/Themed";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Header } from "../../../../components/text/header";
import HeadrImage from "../sub-components/HeadrImage";
import { Input } from "../../../../components/input/input";
import MyButton from "../sub-components/MyButton";
import SelectInput from "../../../../components/input/SelectInput";
import { AEDC, EEDC, EKEDC, Ie, PH } from "../../../../../assets/images";
import HeaderImage from "../sub-components/HeaderImage";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useColorScheme from "../../../../hooks/useColorScheme";
import CustomDropdown from "../../../../components/dropdown/CustomDropdown";

import * as Images from "../../../../../assets/images/index";
import { Card } from "../sub-components/Card";

const CableList = [
  {
    title: "IE",
    icon: Images.Ie,
  },
  {
    title: "AEDC",
    icon: Images.AEDC,
  },
  {
    title: "EEDC",
    icon: Images.EEDC,
  },
  {
    title: "EKEDC",
    icon: Images.EKEDC,
  },
  {
    title: "PHED",
    icon: Images.PH,
  },
];

export default function ElectricityIndex({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const bundles = ["Prepaid", "Postpaid"];
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const [active, setActive] = useState("");

  const [periodValue, setPeriodValue] = useState("");

  const period = [
    { label: "Prepaid", value: "1" },
    { label: "Postpaid", value: "1" },
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
        heading="Select electricity provider"
      />

      {/* <ScrollView horizontal style={CommonStyles.imageHeaderContainer}>
        <HeaderImage selected index={0} image={Ie} title="IE" />
        <HeaderImage selected index={0} image={AEDC} title="AEDC" />
        <HeaderImage selected index={0} image={EEDC} title="EEDC" />
        <HeaderImage selected index={0} image={EKEDC} title="EKEDC" />
        <HeaderImage selected index={0} image={PH} title="PHED" />
      </ScrollView> */}
      <View
        style={{
          flexDirection: "row",
          marginTop: hp(15),
          marginBottom: hp(20),
        }}>
        {CableList.map((item, index) => {
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
      <View
        style={{
          paddingHorizontal: hp(20),
          marginTop: hp(30),
          marginBottom: hp(10),
        }}>
        <CustomDropdown
          label="Meter Type"
          data={period}
          placeholder="Choose your meter type"
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
          icon={null}
          inputStyle={[
            styles.input,
            {
              borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
            },
          ]}
          labelStyle={styles.label}
          label="Meter Number"
          placeholder="Enter your meter number"
        />

        <Input
          icon={null}
          inputStyle={[
            styles.input,
            {
              borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
            },
          ]}
          labelStyle={styles.label}
          label="Amount"
          placeholder="Enter an amount to be paid"
        />
      </View>

      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.bottom || hp(45) },
        ]}>
        <MyButton
          disabled={!bundles}
          title="Continue"
          onPress={() => {
            navigation.navigate("Common", {
              screen: "ElectricityConfirmation",
            });
          }}
          // style={{ marginTop: hp(250) }}
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
