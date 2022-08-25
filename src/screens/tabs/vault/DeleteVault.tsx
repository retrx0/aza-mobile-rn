import { Image } from "react-native";
import Button from "../../../components/buttons/Button";
import { View, Text } from "../../../components/Themed";
import { hp } from "../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { RootTabScreenProps } from "../../../../types";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";

const DeleteVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <Image
          source={require("../../../../assets/images/Caution.png")}
          resizeMode='cover'
          style={[CommonStyles.caution]}
        />
        <View style={CommonStyles.actionContainer}>
          <Text style={CommonStyles.actionStyle}>
            This action cannot be undone
          </Text>
          <Text style={CommonStyles.lockupStyle}>
            You are about to lock up {`#${2000}`} for 2 Weeks
          </Text>
        </View>
        <View style={[CommonStyles.passwordContainer, { bottom: hp(45) }]}>
          <Button
            title='Continue'
            onPressButton={() =>
              navigation.navigate("Common", { screen: "VaultSuccessful" })
            }
            style={CommonStyles.button}
          />

          <CancelButtonWithUnderline
            title='Cancel'
            onPressButton={() => navigation.getParent()?.navigate("NewVault")}
            style={{ marginTop: 5 }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default DeleteVault;
