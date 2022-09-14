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

const LockVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();

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
            You are about to lock up {"\u20A6"}2,000 for 2 Weeks
          </Text>
        </View>
        <View style={[CommonStyles.passwordContainer, { bottom: hp(60) }]}>
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.navigate("Common", {
                screen: "VaultSuccessful",
              })
            }
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
                marginBottom: hp(10),
              },
              CommonStyles.button,
            ]}
          />

          <CancelButtonWithUnderline
            title="Cancel"
            onPressButton={() => navigation.getParent()?.navigate("NewVault")}
            style={{ borderBottomColor: Colors.general.red }}
            styleText={CommonStyles.cancelStyle}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default LockVault;
