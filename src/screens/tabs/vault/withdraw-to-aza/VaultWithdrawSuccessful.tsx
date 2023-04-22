import Button from "../../../../components/buttons/Button";
import { View, Text } from "../../../../theme/Themed";

import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import { CommonScreenProps } from "../../../../common/navigation/types";

const VaultWithdrawsuccessful = ({
  navigation,
}: CommonScreenProps<"VaultWithdrawsuccessful">) => {
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        {/* <Image
          source={require("../../../../../assets/images/Successful.png")}
          resizeMode="cover"
          style={[CommonStyles.caution]}
        /> */}
        <View style={CommonStyles.actionContainer}>
          <Text style={CommonStyles.Style}>Successful!</Text>
          <Text style={CommonStyles.successStyle}>
            You have successfully withdrawn {"\u20A680,000"} to your Aza Account
          </Text>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}
        >
          <Button
            title="Continue"
            // onPressButton={() => navigation.getParent()?.navigate("Vault")}
            onPressButton={() =>
              navigation.navigate("StatusScreen", {
                status: "Successful",
                statusIcon: "Success",
                //TODO update message to accept JSX
                statusMessage: "Your recurring transfer was setup successfully",
                navigateTo: "Vault",
              })
            }
            style={[{ bottom: hp(20) }, CommonStyles.button]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default VaultWithdrawsuccessful;
