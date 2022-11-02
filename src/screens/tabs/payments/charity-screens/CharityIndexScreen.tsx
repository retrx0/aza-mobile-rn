import { Image, StyleSheet } from "react-native";
import React from "react";
import { View } from "../../../../components/Themed";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Input } from "../../../../components/input/input";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import ListItem from "../sub-components/ListItem";
import { Ntel, Spectranet } from "../../../../../assets/images";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";

export default function CharityIndexScreen({
  navigation,
}: RootTabScreenProps<"Payments">) {
  return (
    <View style={[CommonStyles.parentContainer, styles2.container]}>
      <Input
        style={styles2.mainInput}
        icon={null}
        inputStyle={styles2.input}
        labelStyle={styles.label}
        label=""
        placeholder="Search for charitable organizations"
      />

      <ListItem
        onPress={() => {
          navigation.navigate("Common", {
            screen: "CharityDetail",
            params: { name: "Chess in Slums" },
          });
        }}
        route=""
        index={0}
        title="Chess in Slums"
        Icon={() => <Image style={styles2.img} source={Spectranet} />}
      />

      <ListItem
        onPress={() => {}}
        route=""
        index={2}
        title="ICICE"
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
    fontSize: hp(16),
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A",
  },
  mainInput: {
    marginTop: 0,
    marginBottom: 25,
  },
  img: {
    width: 20,
    height: 20,
  },
});
