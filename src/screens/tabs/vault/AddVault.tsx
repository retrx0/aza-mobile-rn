import React from "react";
import { TouchableOpacity } from "react-native";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import { Header } from "../../../components/text/header";
import { InfoIcon } from "../../../../assets/svg";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { RootTabScreenProps } from "../../../../types";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import ArchievedComponents from "./components/ArchievedCard";
import { hp } from "../../../common/util/LayoutUtil";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import BackButton from "../../../components/buttons/BackButton";

const AddVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: hp(20),
            marginBottom: hp(35),
          }}>
          <View>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              textAlign: "center",
              marginRight: hp(60),
            }}>
            Vault
          </Text>
          <TouchableOpacity>
            <InfoIcon color={""} size={0} />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: hp(16),
            fontWeight: "500",
            fontFamily: "Euclid-Circular-A",
            marginBottom: hp(40),
            marginLeft: hp(20),
          }}>
          Choose a vault to view/edit details
        </Text>
        <View style={CommonStyles.lineDivider} />
        <ArchievedComponents />
        <View style={[CommonStyles.passwordContainer, { bottom: hp(65) }]}>
          <CancelButtonWithUnderline
            title="Archived Vaults"
            onPressButton={() =>
              navigation.getParent()?.navigate("ArchievedVault")
            }
            color={Colors[colorScheme].text}
          />
          <Button
            title="New Vault"
            onPressButton={() =>
              navigation.navigate("Common", { screen: "TopBar" })
            }
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
              CommonStyles.button,
            ]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AddVault;
