import { StyleSheet } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { View as View } from "../../../../../theme/Themed";
import MenuList from "../../../../../components/ListItem/MenuList";
import Button from "../../../../../components/buttons/Button";
import Divider from "../../../../../components/divider/Divider";

import { CommonScreenProps } from "../../../../../common/navigation/types";
import Colors from "../../../../../constants/Colors";
import { hp } from "../../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../../common/util/SpacerWrapper";

export default function DepositIndex({
  navigation,
}: CommonScreenProps<"WithdrawDepositTabs">) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[CommonStyles.vaultcontainer]}>
      <View style={{ paddingHorizontal: hp(20) }}>
        <MenuList
          heading="Card deposit"
          subHeading="Deposit via Debit/Credit card"
          onPress={() => {
            navigation.navigate("Deposit");
          }}
        />
        <Divider />
      </View>

      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}
      >
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
