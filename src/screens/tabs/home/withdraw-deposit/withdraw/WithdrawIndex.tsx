import React from "react";
import { StyleSheet } from "react-native";

import { View } from "../../../../../components/Themed";
import Divider from "../../../payments/sub-components/Divider";
import MenuList from "../../../../../components/ListItem/MenuList";
import Button from "../../../../../components/buttons/Button";

import { RootTabScreenProps } from "../../../../../../types";
import Colors from "../../../../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import { hp } from "../../../../../common/util/LayoutUtil";

export default function WithdrawIndex({
  navigation,
}: RootTabScreenProps<"Home">) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <MenuList
        heading="Withdraw money to your own bank account"
        subHeading="Bank Account"
        onPress={() => {
          navigation.navigate("Common", {
            screen: "BankAccounts",
            params: { screenType: "Withdraw" },
          });
        }}
      />
      <Divider style={styles.divider} />
      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
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
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: Colors.general.red,
  },
});
