import React, { useState } from "react";
import { Image } from "react-native";
import BackButton from "../../../components/buttons/BackButton";
import CommonStyles from "../../../common/styles/CommonStyles";
import useColorScheme from "../../../hooks/useColorScheme";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { VaultStyles } from "./styles";
import { Text, View } from "../../../components/Themed";
import { RootTabScreenProps } from "../../../../types";
import { hp } from "../../../common/util/LayoutUtil";
import Button from "../../../components/buttons/Button";
import TransactionKeypadScreen from "../../keypad/TransactionKeypadScreen";
import VirtualKeyboard from "../../../components/input/VirtualKeyboard";

const SetVaultGoal = ({ navigation }: RootTabScreenProps<"Vault">) => {
  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <View style={{ marginLeft: 20 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(18),
              fontWeight: "400",
              lineHeight: hp(20),
              textAlign: "center",
              marginRight: 170,
            }}>
            Set a Goal
          </Text>
        </View>
        <Text style={CommonStyles.selectStyle}>
          You can determine the amount you want to save
        </Text>
        {/* <VirtualKeyboard
          value={""}
          setValue={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
        /> */}
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
      </View>
    </SpacerWrapper>
  );
};

export default SetVaultGoal;
