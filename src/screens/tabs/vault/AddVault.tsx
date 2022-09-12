import React from "react";
import { TouchableOpacity } from "react-native";
import Button from "../../../components/buttons/Button";
import { View } from "../../../components/Themed";
import { Header } from "../../../components/text/header";
import { InfoIcon } from "../../../../assets/svg";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { RootTabScreenProps } from "../../../../types";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import ArchievedComponents from "./components/ArchievedCard";
import { hp } from "../../../common/util/LayoutUtil";

const AddVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View style={[CommonStyles.addVault]}>
          <Header
            heading="Vault"
            description={""}
            headerStyle={[CommonStyles.vaultAdd]}
            descriptionStyle={undefined}
          />
          <TouchableOpacity>
            <InfoIcon />
          </TouchableOpacity>
        </View>
        <View style={CommonStyles.lineDivider} />
        <ArchievedComponents />
        <View style={[CommonStyles.passwordContainer, { bottom: hp(60) }]}>
          <CancelButtonWithUnderline
            title="Archived Vaults"
            onPressButton={() =>
              navigation.getParent()?.navigate("ArchievedVault")
            }
            style={CommonStyles.archivedBox}
            styleText={CommonStyles.archived}
          />
          <Button
            title="New Vault"
            onPressButton={() =>
              navigation.navigate("Common", { screen: "TopBar" })
            }
            style={CommonStyles.button}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AddVault;
