import React, { useLayoutEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { View as View, Text as Text } from "../../../../../theme/Themed";
import Divider from "../../../payments/sub-components/Divider";
import MenuList from "../../../../../components/ListItem/MenuList";
import Button from "../../../../../components/buttons/Button";

import { RootTabScreenProps } from "../../../../../../types";
import Colors from "../../../../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import { hp } from "../../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../../common/util/SpacerWrapper";
import { InfoIcon } from "../../../../../../assets/svg";
import useColorScheme from "../../../../../hooks/useColorScheme";

export default function WithdrawIndex({
  navigation,
}: RootTabScreenProps<"Home">) {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          // lightColor={Colors.light.text}
          // darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          Withdraw
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
    });
  }, []);

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
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: Colors.general.red,
  },
});
