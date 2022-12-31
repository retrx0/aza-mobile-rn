import { StyleSheet } from "react-native";
import React from "react";
import { View2 as View } from "../../../../../theme/Themed";
import Divider from "../../../payments/sub-components/Divider";
import MenuList from "../../../../../components/ListItem/MenuList";
import { RootTabScreenProps } from "../../../../../../types";
import Button from "../../../../../components/buttons/Button";
import Colors from "../../../../../constants/Colors";
import { hp } from "../../../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../../common/util/SpacerWrapper";

export default function DepositIndex({
  navigation,
}: RootTabScreenProps<"Home">) {
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <MenuList
            heading="Card deposit"
            subHeading="Deposit via Debit/Credit card"
            onPress={() => {
              navigation.navigate("Common", { screen: "Deposit" });
            }}
          />
          <Divider style={styles.divider} />
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
    </SpacerWrapper>
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
