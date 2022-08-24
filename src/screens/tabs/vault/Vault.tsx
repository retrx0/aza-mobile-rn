import { Image, TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../../../../types";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import { Header } from "../../../components/text/header";
import { hp } from "../../../common/util/LayoutUtil";
import { ArrowDown } from "../../../../assets/svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import styles from "../../onboarding/OnboardingStyles";
import { VaultStackProps } from "./VaultNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Vault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  return (
    <SpacerWrapper>
      <View>
        <View style={[CommonStyles.vaultContainer]}>
          <Header heading="Vault" description={""} headerStyle={[CommonStyles.vault]} descriptionStyle={undefined} />
          <Image
            source={require("../../../../assets/images/Undraw.png")}
            resizeMode="cover"
            style={[CommonStyles.undraw]}
          />
          <Text style={[CommonStyles.vaultText]}>You dont have any vaults</Text>
          <View style={CommonStyles.createVaultContainer}>
            <Text style={[CommonStyles.createNewVault]}>Click New Vault to create a new vault</Text>
            <TouchableOpacity>
              <ArrowDown />
            </TouchableOpacity>
          </View>
        </View>
        <Button
          title="New Vault"
          // onPressButton={() => navigation.navigate("newvault")}
        />
      </View>
    </SpacerWrapper>
  );
};

export default Vault;
