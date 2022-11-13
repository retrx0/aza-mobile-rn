import React, { useState } from "react";
import BackButton from "../../../components/buttons/BackButton";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { Text, View } from "../../../components/Themed";
import { RootTabScreenProps } from "../../../../types";
import { hp } from "../../../common/util/LayoutUtil";
import Button from "../../../components/buttons/Button";
import VirtualKeyboard from "../../../components/input/VirtualKeyboard";
import { NairaLargeIcon } from "../../../../assets/svg";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { numberWithCommas } from "../../../common/util/NumberUtils";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SetVaultGoal = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
          <View style={{ marginLeft: 15 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              marginLeft: hp(80),
            }}>
            Set a Goal
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
            marginTop: 40,
            marginBottom: 130,
          }}>
          <VirtualKeyboard value={amount} setValue={setAmount} />
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}>
          <Button
            disabled={!amount}
            title="Continue"
            onPressButton={() =>
              navigation
                .getParent()
                ?.navigate("Common", { screen: "ConfirmGoal" })
            }
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default SetVaultGoal;
