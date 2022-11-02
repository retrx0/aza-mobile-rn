import React, { useLayoutEffect } from "react";
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

import { StatusSuccessIcon, StatusWarningIcon } from "../../../assets/svg";

const StatusScreen = ({
  navigation,
  route,
}: CommonScreenProps<"StatusScreen">) => {
  const colorScheme = useColorScheme();
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
    });
  }, []);

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <View
          style={[
            CommonStyles.col,
            { alignItems: "center", marginTop: "auto", marginBottom: "auto" },
          ]}>
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
            }}>
            {status}
          </Text>
          <Text
            style={{
              color: Colors[colorScheme].text,
              fontSize: 14,
              textAlign: "center",
              maxWidth: 350,
              fontFamily: "Euclid-Circular-A-Medium",
            }}>
            {statusMessage}
          </Text>

          <Text
            style={{
              color: Colors[colorScheme].text,
              fontSize: 14,
              textAlign: "center",
              marginTop: hp(25),
              fontFamily: "Euclid-Circular-A-Medium",
            }}>
            {statusMessage2}
          </Text>
        </View>
        <View
          style={[CommonStyles.col, { marginBottom: hp(50), width: "100%" }]}>
          {setupRecurringTransfer && (
            <Button
              title="Setup Recurring Transfer"
              onPressButton={() =>
                navigation.navigate("SetupRecurringTransfer")
              }
              styleText={{
                color: Colors[colorScheme].buttonText,
              }}
              style={{
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: Colors[colorScheme].text,
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
              marginVertical: hp(20),
              backgroundColor: Colors[colorScheme].button,
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
