import { StyleSheet } from "react-native";
import React from "react";
import { View } from "../../../../../components/Themed";
import Divider from "../../../payments/sub-components/Divider";
import MenuList from "../../../../../components/ListItem/MenuList";
import { RootTabScreenProps } from "../../../../../../types";
import Button from "../../../../../components/buttons/Button";
import Colors from "../../../../../constants/Colors";
import { hp } from "../../../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CommonStyles from "../../../../../common/styles/CommonStyles";

export default function DepositIndex({
  navigation,
}: RootTabScreenProps<"Home">) {
  const insets = useSafeAreaInsets();

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
      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.bottom || hp(45) },
        ]}>
        <Button
          title="Cancel"
          style={styles.button}
          onPressButton={() => navigation.goBack()}
        />
      </View>
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
  },
});
