import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import { CommonScreenProps } from "../../../../common/navigation/types";

import { View, Text } from "../../../../theme/Themed";

import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExitButton from "../../../../components/buttons/ExitButton";
import { AzaLOGO, AZALogo, MoneyTick } from "../../../../../assets/svg";
import Button from "../../../../components/buttons/Button";
import { getAppTheme } from "../../../../theme";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";

const TransactionCertainty = ({
  navigation,
}: CommonScreenProps<"RecurringTransfer">) => {
  const colorScheme = getAppTheme(useAppSelector(selectAppTheme));
  const insets = useSafeAreaInsets();

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
          Send Money
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerRight: () => <ExitButton onPress={() => navigation.goBack()} />,
    });
  }, []);

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View
          style={{
            alignSelf: "center",
            marginTop: hp(96),
            marginBottom: hp(96),
          }}
        >
          <MoneyTick color={colorScheme === "dark" ? "#FFFFFF" : "#000000"} />
        </View>
        <Text
          style={{
            fontSize: hp(24),
            fontWeight: "600",
            fontFamily: "Euclid-Circular-A-Bold",
            textAlign: "center",
            // maxWidth: 350,
            alignSelf: "center",
            lineHeight: hp(30),
          }}
        >
          Transaction Certainty
        </Text>
        <Text
          style={{
            fontSize: hp(16),
            lineHeight: hp(25),
            fontFamily: "Euclid-Circular-A",
            fontWeight: "400",
            marginTop: hp(20),
            maxWidth: 340,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Send money with Aza and instantly carry on with your life, knowing
          that the transaction will go through without fail.
        </Text>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Continue"
            onPressButton={() => navigation.navigate("InviteUsers")}
            styleText={{}}
            style={[]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default TransactionCertainty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});

// SelectNewRecurringTransfer
