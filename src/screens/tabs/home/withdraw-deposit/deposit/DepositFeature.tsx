import React, { useLayoutEffect } from "react";
import { Image, StyleSheet } from "react-native";

import { CommonScreenProps } from "../../../../../common/navigation/types";

import { Text as Text, View as View } from "../../../../../theme/Themed";

import Colors from "../../../../../constants/Colors";
import { hp } from "../../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExitButton from "../../../../../components/buttons/ExitButton";
import Button from "../../../../../components/buttons/Button";
import useColorScheme from "../../../../../hooks/useColorScheme";

const DepositFeature = ({
  navigation,
}: CommonScreenProps<"RecurringTransfer">) => {
  const colorScheme = useColorScheme();
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
          Deposit
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
          <Image
            style={{
              width: hp(250),
              height: hp(147),
              alignSelf: "center",
              marginBottom: hp(61),
              marginTop: hp(61),
              resizeMode: "cover",
            }}
            source={require("../../../../../../assets/images/common//DepositFeature.png")}
          />
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <Text
            style={{
              fontSize: hp(24),
              fontWeight: "600",
              fontFamily: "Euclid-Circular-A-Bold",
              textAlign: "center",
              alignSelf: "center",
              lineHeight: hp(30),
            }}
          >
            Deposit funds to your Aza
          </Text>
          <Text
            style={{
              fontSize: hp(16),
              lineHeight: hp(25),
              fontFamily: "Euclid-Circular-A",
              textAlign: "center",
              fontWeight: "400",
              alignSelf: "center",
              marginTop: hp(20),
            }}
          >
            Fund your Aza account via your debit/credit card, securely.
          </Text>
        </View>

        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.getParent()?.navigate("WithdrawDepositTabs")
            }
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
            ]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default DepositFeature;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});

// SelectNewRecurringTransfer
