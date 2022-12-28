import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import Button from "../../components/buttons/Button";
import ButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../common/navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { StatusSuccessIcon, StatusWarningIcon } from "../../../assets/svg";
import { playSwooshSound } from "../../common/util/SoundUtil";

const StatusScreen = ({
  navigation,
  route,
}: CommonScreenProps<"StatusScreen">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const {
    statusIcon,
    status,
    statusMessage,
    statusMessage2,
    receiptButton,
    setupRecurringTransfer,
    cancelButton,
    navigateTo,
    navigateToParams,
  } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      gestureEnabled: false,
    });
  }, []);

  //TODO fix sound to only play on transcations

  useEffect(() => {
    switch (statusIcon) {
      case "Success":
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        playSwooshSound();
        break;

      case "Warning":
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        break;

      default:
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        break;
    }
  }, []);

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View
          style={[
            CommonStyles.col,
            { alignItems: "center", marginTop: "auto", marginBottom: "auto" },
          ]}
        >
          {statusIcon === "Success" ? (
            <StatusSuccessIcon />
          ) : (
            <StatusWarningIcon />
          )}
          <Text
            style={{
              color:
                statusIcon === "Success" ? "#2A9E17" : Colors[colorScheme].text,
              fontSize: hp(24),
              marginVertical: hp(20),
              textAlign: "center",
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontWeight: "500",
            }}
          >
            {status}
          </Text>
          <Text
            style={{
              color: Colors[colorScheme].text,
              fontSize: 14,
              textAlign: "center",
              maxWidth: 350,
              fontFamily: "Euclid-Circular-A-Medium",
            }}
          >
            {statusMessage}
          </Text>

          <Text
            style={{
              color: Colors[colorScheme].text,
              fontSize: 14,
              textAlign: "center",
              marginTop: hp(25),
              fontFamily: "Euclid-Circular-A-Medium",
              maxWidth: 350,
            }}
          >
            {statusMessage2}
          </Text>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          {setupRecurringTransfer && (
            <Button
              title="Setup Recurring Transfer"
              onPressButton={() =>
                navigation.navigate("SetupRecurringTransfer")
              }
              style={[
                {
                  backgroundColor:
                    colorScheme === "dark" ? "#000000" : "#ffffff",
                  borderColor: colorScheme === "dark" ? "#E7E9EA" : "#121212",
                  borderWidth: 1,
                  marginTop: hp(20),
                },
                { marginBottom: 20 },
              ]}
              styleText={{
                color: colorScheme === "dark" ? "#E7E9EA" : "#121212",
              }}
            />
          )}
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.getParent()?.navigate(navigateTo, navigateToParams)
            }
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={{
              backgroundColor: Colors[colorScheme].button,
              marginBottom: 15,
            }}
          />
          {receiptButton && (
            <ButtonWithUnderline
              title="Receipt"
              color={Colors[colorScheme].text}
              onPressButton={() => console.log("called receipt")}
            />
          )}
          {cancelButton && (
            <ButtonWithUnderline
              title="Cancel"
              styleText={CommonStyles.cancelStyle}
              color={Colors[colorScheme].error}
              onPressButton={() => navigation.goBack()}
            />
          )}
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default StatusScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
