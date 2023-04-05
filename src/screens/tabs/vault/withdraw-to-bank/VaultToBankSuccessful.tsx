import { Image } from "react-native";
import Button from "../../../../components/buttons/Button";
import { View, Text } from "../../../../theme/Themed";

import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../../common/util/LayoutUtil";
import { RootTabScreenProps } from "../../../../types/types.navigation";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { TopBar } from "../../../../navigation/CommonStackNavigator";
import { CommonScreenProps } from "../../../../common/navigation/types";

const VaultToBankSuccessful = ({
  navigation,
}: CommonScreenProps<"VaultToBankSuccessful">) => {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

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
            You have successfully withdrawn {"\u20A680,000"} to your Bank
            Account
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
            onPressButton={() => navigation.getParent()?.navigate("Vault")}
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                bottom: hp(20),
              },
              CommonStyles.button,
            ]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default VaultToBankSuccessful;
