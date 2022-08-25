import { Image, TouchableOpacity } from "react-native";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import { Header } from "../../../components/text/header";
import { hp } from "../../../common/util/LayoutUtil";
import { ArrowDown, InfoIcon } from "../../../../assets/svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import styles from "../../onboarding/OnboardingStyles";
import { ListCard, VaultList } from "./components/VaultCard";
import { VaultStackProps } from "./VaultNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabScreenProps } from "../../../../types";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";

const AddVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View style={[CommonStyles.addVault]}>
          <Header
            heading='Vault'
            description={""}
            headerStyle={[CommonStyles.vaultAdd]}
            descriptionStyle={undefined}
          />
          <TouchableOpacity>
            <InfoIcon />
          </TouchableOpacity>
        </View>
        <View style={CommonStyles.lineDivider} />
        <View>
          {VaultList.map((item, index) => {
            return (
              <ListCard
                key={index}
                lockIcon={item.lockIcon}
                item={item.item}
                amount={item.amount}
                closeIcon={item.closeIcon}
                onPress={() => {}}
                unlockIcon={undefined}
              />
            );
          })}
        </View>

        <View style={[CommonStyles.passwordContainer, { bottom: hp(45) }]}>
          <CancelButtonWithUnderline
            title='Archived Vaults'
            onPressButton={() =>
              navigation.getParent()?.navigate("VaultSuccessful")
            }
            style={CommonStyles.archivedBox}
            styleText={CommonStyles.archived}
          />

          <Button
            title='New Vault'
            onPressButton={() =>
              navigation.navigate("Common", { screen: "ArchievedVault" })
            }
            style={CommonStyles.button}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AddVault;
