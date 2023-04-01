import React, { useState } from "react";
import { NairaLargeIcon } from "../../../../../assets/svg";

import { RootTabScreenProps } from "../../../../../types";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import { numberWithCommas } from "../../../../common/util/NumberUtils";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import BackButton from "../../../../components/buttons/BackButton";
import Button from "../../../../components/buttons/Button";
import VirtualKeyboard from "../../../../components/input/VirtualKeyboard";
import { View, Text } from "../../../../theme/Themed";

import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { CommonScreenProps } from "../../../../common/navigation/types";

const VaultToBankAmount = ({
  navigation,
}: CommonScreenProps<"VaultToBankAmount">) => {
  const colorScheme = useColorScheme();
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              textAlign: "center",
              marginRight: 140,
            }}
          >
            Change Goal Amount
          </Text>
        </View>
        <Text style={CommonStyles.selectStyle}>
          You can determine the amount you want to save
        </Text>
        <View style={[CommonStyles.row]}>
          <NairaLargeIcon
            color={
              !amount
                ? Colors[colorScheme].secondaryText
                : colorScheme === "dark"
                ? Colors.dark.mainText
                : Colors.light.text
            }
          />
          <Text
            style={{
              color: !amount
                ? Colors[colorScheme].secondaryText
                : colorScheme === "dark"
                ? Colors.dark.mainText
                : Colors.light.text,
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: 36,
            }}
          >
            {!amount && " 0"} {numberWithCommas(amount)}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 80,
            marginBottom: "auto",
          }}
        >
          <VirtualKeyboard value={amount} setValue={setAmount} maxLength={7} />
        </View>
        <View style={[CommonStyles.passwordContainer, { bottom: hp(70) }]}>
          <Button
            title="Continue"
            onPressButton={() =>
              navigation
                .getParent()
                ?.navigate("Common", { screen: "ConfirmGoal" })
            }
            style={[CommonStyles.toAzabutton]}
            styleText={CommonStyles.toAzabuttonText}
          />
        </View>
        <View style={[CommonStyles.passwordContainer, { bottom: hp(70) }]}>
          <Button
            title="Save Change"
            onPressButton={() => navigation.navigate("TopBar")}
            style={[
              {
                marginBottom: hp(10),
              },
              CommonStyles.button,
            ]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default VaultToBankAmount;
