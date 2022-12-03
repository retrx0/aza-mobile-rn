import { Platform, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Input } from "../../../../components/input/input";
import MyButton from "../sub-components/MyButton";
import { ScrollView, Text, View } from "../../../../components/Themed";
import { RootTabScreenProps } from "../../../../../types";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import Colors from "../../../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useColorScheme from "../../../../hooks/useColorScheme";
import { hp } from "../../../../common/util/LayoutUtil";
import { ImageInput } from "../sub-components/ImageInput";
import CommonStyles from "../../../../common/styles/CommonStyles";
import Button from "../../../../components/buttons/Button";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";

export default function GiftCardConfirmation({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const [confirmed, setConfirm] = useState(false);
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.txt}>
            Your digital code purchase would be complete after your
            confirmation. The code would be sent to you via email and SMS.
          </Text>

          <Input
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[
              styles.input,
              {
                borderBottomColor:
                  colorScheme === "dark" ? "#262626" : "#EAEAEC",
              },
            ]}
            labelStyle={{
              fontFamily: "Euclid-Circular-A",
              fontWeight: "400",
              fontSize: hp(16),
              color: colorScheme === "dark" ? "#999999" : "#000000",
            }}
            label={"Package"}
            placeholder={"iTunes USD100"}
            placeholderTextColor={
              colorScheme === "dark" ? "#E7E9EA" : "#000000"
            }
          />

          <Input
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[
              styles.input,
              {
                borderBottomColor:
                  colorScheme === "dark" ? "#262626" : "#EAEAEC",
              },
            ]}
            labelStyle={{
              fontFamily: "Euclid-Circular-A",
              fontWeight: "400",
              fontSize: hp(16),
              color: colorScheme === "dark" ? "#999999" : "#000000",
            }}
            label="Amount"
            placeholder={"\u20A660,000"}
            placeholderTextColor={
              colorScheme === "dark" ? "#E7E9EA" : "#000000"
            }
          />
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}>
          <Button
            title="Confirm"
            onPressButton={() => {
              navigation.navigate("StatusScreen", {
                statusIcon: "Success",
                status: "Successful",
                statusMessage: "Your Transaction was successfully",
                navigateTo: "Payments",
              });
            }}
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
            ]}
          />
          <CancelButtonWithUnderline
            title="Cancel Transaction"
            onPressButton={() => {
              navigation.goBack();
            }}
            style={{ borderBottomColor: Colors.general.red }}
            styleText={CommonStyles.cancelStyle}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  txt: {
    marginBottom: hp(40),
    marginTop: hp(30),
    fontFamily: "Euclid-Circular-A-Medium",
    fontWeight: "500",
    fontSize: hp(16),
  },
  input: {
    width: "100%",
    borderColor: "#EAEAEC",
    borderBottomWidth: 1,
    marginBottom: 20,
    fontFamily: "Euclid-Circular-A",
    fontWeight: "500",
    fontSize: hp(16),
  },
  btn: {
    marginTop: "auto",
    marginBottom: 0,
    width: "10%",
  },
  cancelContainer: {
    marginTop: 5,
  },
});
