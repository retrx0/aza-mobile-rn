import React, { useState } from "react";
import BackButton from "../../../components/buttons/BackButton";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { View, Text } from "../../../theme/Themed";
import { RootTabScreenProps } from "../../../types/types.navigation";
import { hp } from "../../../common/util/LayoutUtil";
import Button from "../../../components/buttons/Button";
import VirtualKeyboard from "../../../components/input/VirtualKeyboard";
import { FlightIcon, NairaLargeIcon } from "../../../../assets/svg";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { numberWithCommas } from "../../../common/util/NumberUtils";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "react-native";
import { CoverImage } from "../../../../assets/images";
import { getAppTheme } from "../../../theme";
import { useAppSelector } from "../../../redux";
import { selectAppTheme } from "../../../redux/slice/themeSlice";
import { CommonScreenProps } from "../../../common/navigation/types";

const SetVaultGoal = ({ navigation }: CommonScreenProps<"SetVaultGoal">) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const colorScheme = getAppTheme(useAppSelector(selectAppTheme));
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
          <View style={{ marginLeft: 20 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              marginLeft: hp(85),
            }}
          >
            Set a Goal
          </Text>
        </View>
        <Text
          style={[
            CommonStyles.selectStyle,
            { paddingHorizontal: hp(20) },
            { marginBottom: hp(40) },
          ]}
        >
          You can determine the amount you want to save
        </Text>
        <>
          <Image
            style={{
              width: hp(100),
              height: hp(100),
              alignSelf: "center",
              marginBottom: hp(40),
            }}
            source={CoverImage}
          />
        </>

        <View style={[CommonStyles.row, { marginBottom: 50 }]}>
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
            marginTop: hp(20),
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
            title="Continue"
            onPressButton={() =>
              navigation
                .getParent()
                ?.navigate("Common", { screen: "ConfirmGoal" })
            }
            // style={[[CommonStyles.toBankbutton], {}]}
            // styleText={[CommonStyles.toBankbuttonText]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default SetVaultGoal;
