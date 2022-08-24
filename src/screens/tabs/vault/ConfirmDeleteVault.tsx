import { Image, TouchableOpacity } from "react-native";
import Button from "../../../components/buttons/Button";
import { View, Text } from "../../../components/Themed";
import { hp } from "../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { VaultStackProps } from "./VaultNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabScreenProps } from "../../../../types";

const ConfirmDeleteVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <Image
          source={require("../../../../assets/images/Caution.png")}
          resizeMode="cover"
          style={[CommonStyles.caution]}
        />
        <View style={CommonStyles.actionContainer}>
          <Text style={CommonStyles.actionStyle}>This action cannot be undone</Text>
          <Text style={CommonStyles.lockupStyle}>You are about to delete this Vault</Text>
        </View>
        <View style={[CommonStyles.passwordContainer, { bottom: insets.bottom || hp(45) }]}>
          <Button
            title="Delete"
            onPressButton={() => navigation.navigate("Common", { screen: "VaultSuccessful" })}
            style={CommonStyles.button}
          />
          <TouchableOpacity>
            <Text style={[CommonStyles.cancelStyle, { textDecorationLine: "underline" }]}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default ConfirmDeleteVault;
