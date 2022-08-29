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
import MySwitch from "../sub-components/MySwitch";
import { useRoute } from "@react-navigation/native";
import SelectInput from "../../../../components/input/SelectInput";

export default function AirtimeIndex({ navigation }: { navigation: { navigate: any } }) {
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
          image={require("../../../../assets/images/mtn.png")}
          title="MTN"
        />
        <HeadrImage selected={false} index={1} image={require("../../../../assets/images/glo.png")} title="Glo" />
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
      <MySwitch title="My number" onValueChange={toggleSwitch} isEnabled={isEnabled} />
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
          navigation.navigate("confirm");
        }}
      />
    </View>
  );
}
