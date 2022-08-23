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
import { ListCard, VaultList } from "./VaultCard";
import { VaultStackProps } from "./VaultNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const AddVault = ({ navigation }: NativeStackScreenProps<VaultStackProps>) => {
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

        <View style={[CommonStyles.passwordContainer, { bottom: hp(70) }]}>
          <TouchableOpacity>
            <Text
              style={[
                CommonStyles.archivedStyle,
                { textDecorationLine: "underline" },
              ]}>
              Archived Vaults
            </Text>
          </TouchableOpacity>

          <Button
            title='New Vault'
            onPressButton={() => navigation.navigate("archievedVault")}
            style={CommonStyles.button}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AddVault;
