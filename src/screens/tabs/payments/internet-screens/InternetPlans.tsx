import { Image, StyleSheet } from "react-native";
import React from "react";
import { View as View, Text as Text } from "../../../../theme/Themed";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import ListItem from "../sub-components/ListItem";
import {
  cobra,
  ipnx,
  legend,
  Ntel,
  smile,
  Spectranet,
  SWIFT,
  Swift,
} from "../../../../../assets/images";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";

export default function InternetPlans({
  navigation,
}: RootTabScreenProps<"Payments">) {
  return (
    <View style={[CommonStyles.parentContainer, styles2.container]}>
      <UnderlinedInput
        icon={null}
        inputStyle={[styles2.input]}
        labelStyle={[styles.label]}
        label=""
        placeholder="Search for internet provider"
        placeholderStyle={{
          fontSize: hp(16),
          fontWeight: "500",
        }}
      />

      <ListItem
        onPress={() => {
          navigation.navigate("Common", {
            screen: "InternetPlanDetail",
            params: { name: "Spectranet" },
          });
        }}
        route=""
        index={0}
        title="Spectranet"
        Icon={() => <Image style={styles2.img} source={Spectranet} />}
      />

      <ListItem
        onPress={() => {}}
        route=""
        index={2}
        title="NTEL"
        Icon={() => <Image style={styles2.img} source={Ntel} />}
      />
      <ListItem
        onPress={() => {}}
        route=""
        index={2}
        title="Smile Communications"
        Icon={() => <Image style={styles2.img} source={smile} />}
      />
      <ListItem
        onPress={() => {}}
        route=""
        index={2}
        title="Swift Networks"
        Icon={() => <Image style={styles2.img} source={SWIFT} />}
      />
      <ListItem
        onPress={() => {}}
        route=""
        index={2}
        title="Legend"
        Icon={() => <Image style={styles2.img} source={legend} />}
      />
      <ListItem
        onPress={() => {}}
        route=""
        index={2}
        title="ipNX"
        Icon={() => <Image style={styles2.img} source={ipnx} />}
      />
      <ListItem
        onPress={() => {}}
        route=""
        index={2}
        title="CobraNet"
        Icon={() => <Image style={styles2.img} source={cobra} />}
      />
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    paddingTop: 80,
    padding: 20,
  },
  input: {
    width: "100%",
    borderBottomColor: "#EAEAEC",
    borderBottomWidth: 0.3,
    fontSize: hp(16),
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A",
  },
  img: {
    width: 45,
    height: 45,
  },
});
