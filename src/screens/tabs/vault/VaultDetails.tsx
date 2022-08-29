import { Image, TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../../../../types";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import { Header } from "../../../components/text/header";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { ArrowDownIcon } from "../../../../assets/svg";
import BackButton from "../../../components/buttons/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../common/util/LayoutUtil";

const VaultDetails = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const insets = useSafeAreaInsets();
  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View style={[CommonStyles.vaultContainerdetails]}>
          <View style={{ marginLeft: 20 }}>
            <BackButton
              onPress={() => {
                navigation.getParent()?.navigate("NewVault");
              }}
            />
          </View>
          <Text style={CommonStyles.headervault}>Vault</Text>
        </View>

        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}>
          <Button
            title='New Vault'
            onPressButton={() =>
              navigation.navigate("Common", { screen: "DeleteVault" })
            }
            style={[CommonStyles.button, { bottom: hp(10) }]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default VaultDetails;
