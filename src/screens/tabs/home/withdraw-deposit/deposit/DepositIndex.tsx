import { StyleSheet } from "react-native";
import React from "react";
import { View } from "../../../../../components/Themed";
import Divider from "../../../payments/sub-components/Divider";
import MenuList from "../../../../../components/ListItem/MenuList";
import { RootTabScreenProps } from "../../../../../../types";
import Button from "../../../../../components/buttons/Button";
import Colors from "../../../../../constants/Colors";

export default function DepositIndex({
  navigation,
}: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <MenuList
        heading="Card deposit"
        subHeading="Deposit via Debit/Credit card"
        onPress={() => {
          navigation.navigate("Common", { screen: "Deposit" });
        }}
      />
      <Divider style={styles.divider} />
      <Button
        title="Cancel"
        style={styles.button}
        onPressButton={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  divider: {
    marginTop: 10,
  },
  button: {
    backgroundColor: Colors.general.red,
    marginTop: "auto",
    width: "100%",
    marginBottom: 100,
  },
});
