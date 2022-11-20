import { Image } from "react-native";
import Button from "../../../components/buttons/Button";
import { View, Text } from "../../../components/Themed";
import { hp } from "../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { RootTabScreenProps } from "../../../../types";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ConfirmDeleteVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();
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
          <Text style={CommonStyles.actionStyle}>
            This action cannot be undone
          </Text>
          <Text style={CommonStyles.lockupStyle}>
            You are about to delete this Vault
          </Text>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}>
          <Button
            title="Delete"
            onPressButton={() =>
              navigation.navigate("Common", { screen: "AddVault" })
            }
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
            ]}
          />

          <CancelButtonWithUnderline
            title="Cancel"
            onPressButton={() => navigation.getParent()?.navigate("AddVault")}
            style={{ borderBottomColor: Colors.general.red }}
            styleText={CommonStyles.cancelStyle}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default ConfirmDeleteVault;
