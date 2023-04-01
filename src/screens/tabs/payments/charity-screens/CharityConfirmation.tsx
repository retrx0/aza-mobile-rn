import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import { View, Text } from "../../../../theme/Themed";

import { RootTabScreenProps } from "../../../../../types";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import Colors from "../../../../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useColorScheme from "../../../../hooks/useColorScheme";
import { hp } from "../../../../common/util/LayoutUtil";
import { ImageInput } from "../sub-components/ImageInput";

import Button from "../../../../components/buttons/Button";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { Chess } from "../../../../../assets/images";
import { CommonScreenProps } from "../../../../common/navigation/types";

export default function CharityConfirmation({
  navigation,
}: CommonScreenProps<"CharityConfirmation">) {
  const [confirmed, setConfirm] = useState(false);
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View style={{ paddingHorizontal: hp(23) }}>
          <Text style={styles.txt}>
            Kindly confirm the details of this transaction
          </Text>
          <ImageInput
            label={"To"}
            placeholder={"Chess in Slums"}
            source={Chess}
            icon={undefined}
            value={""}
          />
          <UnderlinedInput
            icon={null}
            keyboardType="phone-pad"
            inputStyle={[styles.input]}
            labelStyle={{
              fontFamily: "Euclid-Circular-A",
              fontWeight: "400",
              fontSize: hp(16),
              color: colorScheme === "dark" ? "#999999" : "#000000",
            }}
            label="Amount"
            // placeholder="Enter amount"
            // placeholder={"\u20A680,000"}
            // placeholderTextColor={
            //   colorScheme === "dark" ? "#E7E9EA" : "#000000"
            // }
            value={"\u20A680,000"}
            returnKeyType="done"
          />

          <UnderlinedInput
            icon={null}
            keyboardType="default"
            inputStyle={[styles.input]}
            labelStyle={{
              fontFamily: "Euclid-Circular-A",
              fontWeight: "400",
              fontSize: hp(16),
              color: colorScheme === "dark" ? "#999999" : "#000000",
            }}
            label="Payment Method"
            // placeholder="Aza Account"
            // placeholder="Aza Account"
            // placeholderTextColor={
            //   colorScheme === "dark" ? "#E7E9EA" : "#000000"
            // }
            value="Aza Account"
          />
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Confirm"
            onPressButton={() => {
              navigation.navigate("StatusScreen", {
                statusIcon: "Warning",
                status: "Successful",
                statusMessage:
                  "You have successfully donated to Chess in Slums",
                navigateTo: "Payments",
              });
            }}
            styleText={{}}
            style={[]}
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
    borderBottomWidth: 0.3,
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
