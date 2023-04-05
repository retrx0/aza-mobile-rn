import React, { useState } from "react";
import BackButton from "../../../components/buttons/BackButton";
import CommonStyles from "../../../common/styles/CommonStyles";
import useColorScheme from "../../../hooks/useColorScheme";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { View, Text } from "../../../theme/Themed";
import { RootTabScreenProps } from "../../../types/types.navigation";
import { hp } from "../../../common/util/LayoutUtil";
import Button from "../../../components/buttons/Button";
import Colors from "../../../constants/Colors";
import VirtualKeyboard from "../../../components/input/VirtualKeyboard";
import { NairaLargeIcon } from "../../../../assets/svg";
import { numberWithCommas } from "../../../common/util/NumberUtils";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CommonScreenProps } from "../../../common/navigation/types";

const ChangeGoalAmount = ({
  navigation,
}: CommonScreenProps<"ChangeGoalAmount">) => {
  const colorScheme = useColorScheme();
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ marginLeft: 15 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              marginLeft: hp(65),
            }}
          >
            Change Goal Amount
          </Text>
        </View>
        <Text
          style={[
            CommonStyles.selectStyle,
            { marginLeft: hp(20) },
            { marginTop: 50 },
          ]}
        >
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
            marginTop: 60,
            marginBottom: "auto",
          }}
        >
          <VirtualKeyboard value={amount} setValue={setAmount} maxLength={9} />
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            disabled={!amount}
            title="Save Change"
            onPressButton={() => navigation.navigate("TopBar")}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default ChangeGoalAmount;
