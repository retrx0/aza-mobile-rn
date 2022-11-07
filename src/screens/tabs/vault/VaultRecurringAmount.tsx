import { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../../../../types";
import CommonStyles from "../../../common/styles/CommonStyles";
import { hp, wp } from "../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import Divider from "../../../components/divider/Divider";
import CustomDropdown from "../../../components/dropdown/CustomDropdown";
import { Input } from "../../../components/input/input";
import { Header } from "../../../components/text/header";
import { Text, View } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { VaultStyles as styles } from "./styles";

const VaultRecurringAmount = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <View style={{ marginLeft: 16 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              textAlign: "center",
              marginRight: 145,
            }}>
            Recurring Transfer
          </Text>
        </View>
        <Image
          style={{ width: 50, height: 50, alignSelf: "center", marginTop: 30 }}
          source={require("../../../../assets/images/icons/CoverImage.png")}
        />
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Bold",
            fontSize: hp(16),
            fontWeight: "400",
            textAlign: "center",
            marginTop: hp(10),
            marginBottom: hp(14),
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
                paddingHorizontal: 15,
                paddingVertical: hp(7),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: hp(50),
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
              source={require("../../../../assets/images/icons/NigerianFlag.png")}
            />
            <Text
              lightColor={Colors.general.darkGrey}
              darkColor={Colors.dark.tabIconDefault}
              style={{ fontSize: 12 }}>
              NGN
            </Text>
          </View>
        </TouchableOpacity>
        <View style={[CommonStyles.passwordContainer, { bottom: hp(45) }]}>
          <Button
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
