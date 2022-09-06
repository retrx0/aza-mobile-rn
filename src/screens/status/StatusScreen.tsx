import React, { useLayoutEffect } from "react";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
import { hp } from "../../common/util/LayoutUtil";
import Button from "../../components/buttons/Button";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { StatusSuccessIcon, StatusWarningIcon } from "../../../assets/svg";
import { CommonScreenProps } from "../../common/navigation/types";
import ButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

const StatusScreen = ({ navigation, route }: CommonScreenProps<"StatusScreen">) => {
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
  } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <View style={[CommonStyles.col, { alignItems: "center", marginTop: "auto", marginBottom: "auto" }]}>
          {statusIcon === "Success" ? <StatusSuccessIcon /> : <StatusWarningIcon />}
          <Text
            style={{
              color: statusIcon === "Success" ? "#2A9E17" : Colors[colorScheme].text,
              fontSize: 24,
              marginVertical: 20,
              textAlign: "center",
              fontFamily: "Euclid-Circular-A-Semi-Bold",
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
            }}
          >
            {statusMessage2}
          </Text>
        </View>
        <View style={[CommonStyles.col, { marginBottom: hp(50) }]}>
          {setupRecurringTransfer && (
            <Button
              title="Setup Recurring Transfer"
              onPressButton={() => console.log("Setup Recurring Transfer")}
              styleText={{
                color: Colors[colorScheme].text,
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: 14,
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
            onPressButton={() => navigation.getParent()?.navigate(navigateTo)}
            styleText={{
              color: Colors[colorScheme].buttonText,
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
            }}
            style={{
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
