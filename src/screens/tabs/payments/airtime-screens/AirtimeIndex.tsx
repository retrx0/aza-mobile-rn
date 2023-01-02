import React, { useState } from "react";
import { View2 as View } from "../../../../theme/Themed";
import { AIrtimeStyles as styles } from "./styles";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Header } from "../../../../components/text/header";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import { useRoute } from "@react-navigation/native";
import { RootTabScreenProps } from "../../../../../types";
import CustomSwitch from "../../../../components/input/CustomSwitch";
import Button from "../../../../components/buttons/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { fetchAirtimeOperators } from "../../../../api/airtime";
import { hp } from "../../../../common/util/LayoutUtil";
import CustomDropdown from "../../../../components/dropdown/CustomDropdown";
import * as Images from "../../../../../assets/images/index";
import { Card } from "../sub-components/Card";
import {
  setAmount,
  setDetailHeader,
  setDetailValue,
  setLogo,
  setPaymentTYpe,
  setTo,
} from "../../../../redux/slice/paymentSlice";
import { useDispatch } from "react-redux";

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
  const insets = useSafeAreaInsets();
  const [periodValue, setPeriodValue] = useState("");
  const [active, setActive] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, settAmount] = useState("");
  const dispatch = useDispatch();
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
        }}
      >
        {Network.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              icon={item.icon}
              onPress={() => {
                setActive(item.icon);
                dispatch(setTo(item.title));
                dispatch(setLogo(item.icon));
              }}
              isActive={item.icon === active}
            />
          );
        })}
      </View>

      <View style={{ paddingHorizontal: hp(20) }}>
        <UnderlinedInput
          icon={null}
          keyboardType="phone-pad"
          inputStyle={[styles.input]}
          labelStyle={styles.label}
          style={{ marginTop: hp(10) }}
          label="Phone Number"
          placeholder="Enter a phone number"
          returnKeyType="done"
          onChangeText={(text) => setPhone(text)}
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
        }}
      >
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
        <UnderlinedInput
          icon={null}
          inputStyle={[styles.input]}
          labelStyle={[styles.label]}
          label="Amount"
          placeholder="Enter an amount"
          keyboardType="number-pad"
          returnKeyType="done"
          onChangeText={(text) => {
            settAmount(text);
          }}
        />
      </View>

      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}
      >
        <Button
          title="Continue"
          onPressButton={() => {
            dispatch(
              setDetailHeader(
                route.name == "data bundle" ? "Data bundle" : "Phone number"
              )
            );
            dispatch(
              setPaymentTYpe(route.name == "data bundle" ? "Data" : "Airtime")
            );
            dispatch(setDetailValue(phone));
            dispatch(setAmount(amount));
            navigation.navigate("Common", { screen: "Confirm" });
          }}
          disabled={!CustomSwitch}
          styleText={{}}
          style={[{}]}
        />
      </View>
    </View>
  );
}
