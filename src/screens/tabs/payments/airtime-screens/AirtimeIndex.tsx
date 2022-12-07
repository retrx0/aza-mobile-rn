import { Switch } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "../../../../components/Themed";
import { AIrtimeStyles as styles } from "./styles";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Header } from "../../../../components/text/header";
import HeadrImage from "../sub-components/HeadrImage";
import { Input } from "../../../../components/input/input";
import ButtonLg from "../../../../components/buttons/ButtonLg";
import MyButton from "../sub-components/MyButton";
import { useRoute } from "@react-navigation/native";
import SelectInput from "../../../../components/input/SelectInput";
import { Glo, Mtn } from "../../../../../assets/images";
import { RootTabScreenProps } from "../../../../../types";
import CustomSwitch from "../../../../components/input/CustomSwitch";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import Button from "../../../../components/buttons/Button";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fetchAirtimeOperators } from "../../../../api/airtime";
import api from "../../../../api";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import CustomDropdown from "../../../../components/dropdown/CustomDropdown";
import HeaderImage from "../sub-components/HeaderImage";
import * as Images from "../../../../../assets/images/index";
import { Card } from "../sub-components/Card";

const Network = [
  {
    title: "Glo",
    icon: Images.Glo,
  },
  {
    title: "MTN",
    icon: Images.Mtn,
  },
  {
    title: "Airtel",
    icon: Images.Airtel,
  },
  {
    title: "9mobile",
    icon: Images.Etisalat,
  },
];
export default function AirtimeIndex({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const [isEnabled, setIsEnabled] = useState(false);
  // const [selected, setSelected] = useState(false);
  // const [currentIndex, setCurrent] = useState(0);
  const route = useRoute();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  // const bundles = ["100mb", "200mb", "500mb"];
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const [periodValue, setPeriodValue] = useState("");
  const [active, setActive] = useState("");
  // const { icon } = route.params;

  const period = [
    { label: "100 ", value: "1" },
    { label: "200 ", value: "1" },
    { label: "500 ", value: "1" },
    { label: "1gb ", value: "1" },
    { label: "1.5gb ", value: "1" },
  ];

  // const [airtimeOperators, setAirtimeOperators] = useState<
  //   {
  //     name: string;
  //     logoUrls: string[];
  //     operatorId: number;
  //   }[]
  // >([]);

  // useEffect(() => {
  //   fetchAirtimeOperators().then((r) => setAirtimeOperators(r.data.data));
  // }, []);

  return (
    <View style={styles.container}>
      <Header
        description=""
        descriptionStyle={null}
        headerStyle={{
          fontFamily: "Euclid-Circular-A-Medium",
          fontWeight: "600",
          fontSize: hp(16),
          marginTop: hp(30),
        }}
        heading="Select Network Provider"
      />
      {/* <ScrollView
        horizontal
        style={CommonStyles.imageHeaderContainer}
        showsHorizontalScrollIndicator={false}>
        {airtimeOperators.map((op, i) => {
          return (
            <HeaderImage
              selected={selected === i}
              onSelect={() => {
                setSelected(i);
              }}
              index={0}
              image={{ uri: op.logoUrls[-0] }}
            />
          );
        })} */}
      {/* <HeadrImage
          selected={selected}
          onSelect={() => {
            setSelected(true);
          }}
          index={0}
          image={Mtn}
          title="MTN"
        />
        <HeadrImage
          selected={selected}
          index={1}
          image={Glo}
          title="Glo"
          onSelect={() => {
            setSelected(true);
          }}
        />
        <HeadrImage
          selected={selected}
          index={2}
          image={airtel}
          title="Airtel"
          onSelect={() => {
            setSelected(true);
          }}
        />
        <HeadrImage
          selected={selected}
          index={3}
          image={etisalat}
          title="9mobile"
          onSelect={() => {
            setSelected(true);
          }}
        /> */}
      {/* </ScrollView> */}

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: hp(15),
          justifyContent: "space-between",
        }}>
        {Network.map((item, index) => {
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
          style={{ marginTop: hp(10) }}
          label="Phone Number"
          placeholder="Enter a phone number"
          returnKeyType="done"
        />
        <CustomSwitch
          title="My number"
          onValueChange={toggleSwitch}
          isEnabled={isEnabled}
        />
      </View>
      <View
        style={{
          paddingHorizontal: hp(20),
          marginTop: hp(10),
          marginBottom: hp(10),
        }}>
        {route.name == "data bundle" && (
          <CustomDropdown
            data={period}
            placeholder="Choose a bundle"
            setValue={setPeriodValue}
            value={periodValue}
            style={[
              { fontFamily: "Euclid-Circular-A" },
              { fontWeight: "400" },
              { fontSize: hp(16) },
            ]}
            label={"Bundle"}
          />
        )}
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
          labelStyle={[styles.label]}
          label="Amount"
          placeholder="Enter an amount"
          keyboardType="number-pad"
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
          onPressButton={() => {
            navigation.navigate("Common", { screen: "AirtimeConfirmation" });
          }}
          disabled={!CustomSwitch}
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
    </View>
  );
}
