import { Image, TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../../../../types";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import { Header } from "../../../components/text/header";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { ArrowDownIcon } from "../../../../assets/svg";
import { hp } from "../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Vault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View style={[CommonStyles.vaultContainer]}>
          <Header
            heading='Vault'
            description={""}
            headerStyle={[CommonStyles.vault]}
            descriptionStyle={undefined}
          />
          <Image
            source={require("../../../../assets/images/Undraw.png")}
            resizeMode='cover'
            style={[CommonStyles.undraw]}
          />
          <Text style={[CommonStyles.vaultText]}>You dont have any vaults</Text>
          <View style={CommonStyles.createVaultContainer}>
            <Text style={[CommonStyles.createNewVault]}>
              Click New Vault to create a new vault
            </Text>
            <TouchableOpacity>
              <ArrowDownIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}>
          <Button
            title='New Vault'
            onPressButton={() =>
              navigation.navigate("Common", { screen: "NewVault" })
            }
            style={[CommonStyles.button, { bottom: hp(10) }]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default Vault;
