import { ScrollView, Switch } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, View } from "../../../../components/Themed";
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

export default function AirtimeIndex({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [currentIndex, setCurrent] = useState(0);
  const route = useRoute();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const bundles = ["100mb", "200mb", "500mb"];
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const [airtimeOperators, setAirtimeOperators] = useState<
    {
      name: string;
      logoUrls: string[];
      operatorId: number;
    }[]
  >([]);

  useEffect(() => {
    fetchAirtimeOperators().then((r) => setAirtimeOperators(r.data.data));
  }, []);

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
      <ScrollView
        horizontal
        style={CommonStyles.imageHeaderContainer}
        showsHorizontalScrollIndicator={false}>
        {airtimeOperators.map((op, i) => {
          return (
            <HeadrImage
              selected={selected === i}
              onSelect={() => {
                setSelected(i);
              }}
              index={0}
              image={{ uri: op.logoUrls[0] }}
              title={op.name}
            />
          );
        })}
        {/* <HeadrImage
          selected={selected}
          onSelect={() => {
            setSelected(true);
          }}
          index={0}
          image={Mtn}
          title="MTN"
        /> */}
        {/* <HeadrImage selected={false} index={1} image={Glo} title="Glo" /> */}
      </ScrollView>
      <View>
        <Input
          icon={null}
          keyboardType="phone-pad"
          inputStyle={styles.input}
          labelStyle={styles.label}
          style={{ marginTop: hp(35) }}
          label="Phone Number"
          placeholder="Enter a phone number"
        />
        <CustomSwitch
          title="My number"
          onValueChange={toggleSwitch}
          isEnabled={isEnabled}
        />
        {route.name == "data" && (
          <SelectInput
            items={bundles}
            title="Bundle"
            placeHolder="Choose a bundle"
            style={styles.select}
          />
        )}
        <Input
          icon={null}
          inputStyle={styles.input}
          labelStyle={styles.label}
          label="Amount"
          placeholder="Enter an amount"
          keyboardType="number-pad"
        />
      </View>
      <View style={[CommonStyles.passwordContainer, { bottom: hp(80) }]}>
        <Button
          title="Continue"
          onPressButton={() => {
            navigation.navigate("Common", { screen: "Confirm" });
          }}
          disabled={false}
          styleText={{
            color: Colors[colorScheme].buttonText,
          }}
          style={[
            {
              backgroundColor: Colors[colorScheme].button,
              width: wp(335),
            },
          ]}
        />
      </View>
    </View>
  );
}
