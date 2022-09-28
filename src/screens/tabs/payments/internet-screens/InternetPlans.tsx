import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import { View } from "../../../../components/Themed";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Input } from "../../../../components/input/input";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import ListItem from "../sub-components/ListItem";
import { BackIcon, LoveIcon } from "../../../../../assets/svg";
import { Ntel, Spectranet } from "../../../../../assets/images";
import { RootTabScreenProps } from "../../../../../types";
export default function InternetPlans({
  navigation,
}: RootTabScreenProps<"Payments">) {
  return (
    <View style={[CommonStyles.parentContainer, styles2.container]}>
      <Input
        icon={null}
        inputStyle={styles2.input}
        labelStyle={styles.label}
        label=""
        placeholder="Search for internet provider"
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
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 10,
  },
  img: {
    width: 20,
    height: 20,
  },
});
