import React, { useState } from "react";
import BackButton from "../../../components/buttons/BackButton";
import CommonStyles from "../../../common/styles/CommonStyles";
import useColorScheme from "../../../hooks/useColorScheme";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { Text, View } from "../../../components/Themed";
import { RootTabScreenProps } from "../../../../types";
import { hp } from "../../../common/util/LayoutUtil";
import Button from "../../../components/buttons/Button";
import Colors from "../../../constants/Colors";
import VirtualKeyboard from "../../../components/input/VirtualKeyboard";
import { NairaLargeIcon } from "../../../../assets/svg";
import { numberWithCommas } from "../../../common/util/NumberUtils";

const ChangeGoalAmount = ({ navigation }: RootTabScreenProps<"Vault">) => {
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
          }}>
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
            }}>
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
            }}>
            {!amount && " 0"} {numberWithCommas(amount)}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 60,
            marginBottom: "auto",
          }}>
          <VirtualKeyboard value={amount} setValue={setAmount} />
        </View>
        <View style={[CommonStyles.passwordContainer, { bottom: hp(100) }]}>
          <Button
            disabled={!amount}
            title="Save Change"
            onPressButton={() =>
              navigation.navigate("Common", { screen: "TopBar" })
            }
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
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

export default ChangeGoalAmount;
