import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Button from "../../../components/buttons/Button";
import { View } from "../../../components/Themed";
import { Header } from "../../../components/text/header";
import { InfoIcon } from "../../../../assets/svg";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { RootTabScreenProps } from "../../../../types";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import ArchievedComponents from "./components/ArchievedCard";
import { hp, wp } from "../../../common/util/LayoutUtil";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";

const AddVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View style={[CommonStyles.addVault]}>
          <Header heading="Vault" description={""} headerStyle={[CommonStyles.vaultAdd]} descriptionStyle={undefined} />
          <TouchableOpacity>
            <InfoIcon color={""} size={0} />
          </TouchableOpacity>
        </View>
        <View style={CommonStyles.lineDivider} />
        <ArchievedComponents />
        <View style={[CommonStyles.passwordContainer, { bottom: hp(65) }]}>
          <CancelButtonWithUnderline
            title="Archived Vaults"
            onPressButton={() => navigation.getParent()?.navigate("ArchievedVault")}
          />
          <Button
            title="New Vault"
            onPressButton={() => navigation.navigate("Common", { screen: "TopBar" })}
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
