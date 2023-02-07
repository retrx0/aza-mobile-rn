import { StyleSheet } from "react-native";

import { View } from "../../../../../theme/Themed";
import MenuList from "../../../../../components/ListItem/MenuList";
import Button from "../../../../../components/buttons/Button";

import { RootTabScreenProps } from "../../../../../../types";
import Colors from "../../../../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import { hp } from "../../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../../common/util/SpacerWrapper";
import Divider from "../../../../../components/divider/Divider";

export default function WithdrawIndex({
  navigation,
}: RootTabScreenProps<"Home">) {
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
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
    </SpacerWrapper>
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
