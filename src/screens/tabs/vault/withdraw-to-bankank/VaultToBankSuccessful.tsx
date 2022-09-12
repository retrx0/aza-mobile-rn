import { Image } from "react-native";
import Button from "../../../../components/buttons/Button";
import { View, Text } from "../../../../components/Themed";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../../common/util/LayoutUtil";
import { RootTabScreenProps } from "../../../../../types";

const VaultToBankSuccessfull = ({
  navigation,
}: RootTabScreenProps<"Vault">) => {
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <Image
          source={require("../../../../../assets/images/Successful.png")}
          resizeMode="cover"
          style={[CommonStyles.caution]}
        />
        <View style={CommonStyles.actionContainer}>
          <Text style={CommonStyles.Style}>Successful!</Text>
          <Text style={CommonStyles.successStyle}>
            You have successfully withdrawn #80,000 to your Bank Account
          </Text>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}>
          <Button
            title="Continue"
            onPressButton={() => navigation.getParent()?.navigate("Vault")}
            style={[CommonStyles.button, { bottom: hp(20) }]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default VaultToBankSuccessfull;
