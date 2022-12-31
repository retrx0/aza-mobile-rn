import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import { CommonScreenProps } from "../../../common/navigation/types";

import { View } from "../../../theme/components/View";
import { Text } from "../../../theme/components/Text";

import Colors from "../../../constants/Colors";
import { hp } from "../../../common/util/LayoutUtil";
import useColorScheme from "../../../hooks/useColorScheme";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ExitButton from "../../../components/buttons/ExitButton";
import { AzaLOGO, AZALogo } from "../../../../assets/svg";
import Button from "../../../components/buttons/Button";

const SendMoneyFeature = ({
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
          <AzaLOGO color={colorScheme === "dark" ? "#FFFFFF" : "#000000"} />
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
            Lightning-fast transaction speed
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
            Send money to anyone on Aza or other banks at lightning speeds
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
            onPressButton={() => navigation.navigate("TransactionCertainty")}
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

export default SendMoneyFeature;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});

// SelectNewRecurringTransfer
