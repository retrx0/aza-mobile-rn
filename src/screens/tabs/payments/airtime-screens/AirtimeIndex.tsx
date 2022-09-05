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

export default function AirtimeIndex({ navigation }: RootTabScreenProps<"Payments">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selected, setSelected] = useState(false);
  const [currentIndex, setCurrent] = useState(0);
  const route = useRoute();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const bundles = ["100mb", "200mb", "500mb"];

  return (
    <View style={styles.container}>
      <Header description="" descriptionStyle={null} headerStyle={null} heading="Select Network Provider" />
      <ScrollView horizontal style={CommonStyles.imageHeaderContainer}>
        <HeadrImage
          selected={selected}
          onSelect={() => {
            setSelected(true);
          }}
          index={0}
          image={Mtn}
          title="MTN"
        />
        <HeadrImage selected={false} index={1} image={Glo} title="Glo" />
      </ScrollView>
      <Input
        icon={null}
        keyboardType="phone-pad"
        inputStyle={styles.input}
        labelStyle={styles.label}
        style={{ marginTop: 0 }}
        label="Phone Number"
        placeholder="Enter a phone number"
      />
      <CustomSwitch title="My number" onValueChange={toggleSwitch} isEnabled={isEnabled} />
      {route.name == "data" && (
        <SelectInput items={bundles} title="Bundle" placeHolder="Choose a bundle" style={styles.select} />
      )}
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
          navigation.navigate("Common", { screen: "Confirm" });
        }}
      />
    </View>
  );
}
