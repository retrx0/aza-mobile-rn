import { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { NairaLargeIcon } from "../../../../../assets/svg";
import { RootTabScreenProps } from "../../../../../types";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import { numberWithCommas } from "../../../../common/util/NumberUtils";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import BackButton from "../../../../components/buttons/BackButton";
import Button from "../../../../components/buttons/Button";
import VirtualKeyboard from "../../../../components/input/VirtualKeyboard";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const VaultRecurringAmount = ({ navigation }: RootTabScreenProps<"Vault">) => {
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
          }}>
          <View style={{ marginLeft: 15 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              marginLeft: hp(65),
            }}>
            Recurring Transfer
          </Text>
        </View>
        <Image
          style={{ width: 50, height: 50, alignSelf: "center", marginTop: 30 }}
          source={require("../../../../../assets/images/icons/CoverImage.png")}
        />
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Bold",
            fontSize: hp(16),
            fontWeight: "400",
            textAlign: "center",
            marginTop: hp(20),
            marginBottom: hp(20),
          }}>
          Flight Ticket Vault
        </Text>
        <TouchableOpacity>
          <View
            lightColor="#eaeaec"
            darkColor="#1D1D20"
            style={[
              CommonStyles.row,
              {
                paddingHorizontal: hp(25),
                paddingVertical: hp(9),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: hp(50),
                marginBottom: hp(25),
              },
            ]}>
            <Text
              lightColor={"#000000"}
              darkColor={"#CCCCCC"}
              style={{ fontSize: 12 }}>
              Nigerian
            </Text>
            <Image
              style={{ width: 20, height: 20, marginHorizontal: 3 }}
              source={require("../../../../../assets/images/icons/NigerianFlag.png")}
            />
            <Text
              lightColor={Colors.general.darkGrey}
              darkColor={Colors.dark.tabIconDefault}
              style={{ fontSize: 12 }}>
              NGN
            </Text>
          </View>
        </TouchableOpacity>
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
            flexDirection: "row",
            alignSelf: "center",
            marginTop: hp(10),
          }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A",
              fontSize: 12,
              fontWeight: "400",
              marginRight: hp(3),
            }}>
            Aza Balance:
          </Text>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: 12,
              fontWeight: "400",
            }}>
            {"\u20A610,239,290.00"}{" "}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: hp(30),
            marginBottom: "auto",
          }}>
          <VirtualKeyboard value={amount} setValue={setAmount} />
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}>
          <Button
            disabled={!amount}
            title="Continue"
            onPressButton={() =>
              navigation.navigate("Common", {
                screen: "RecurringMoneyConfirmationScreen",
              })
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

export default VaultRecurringAmount;
