import { Image } from "react-native";
import Button from "../../../components/buttons/Button";
import { View, Text } from "../../../components/Themed";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../common/util/LayoutUtil";
import { RootTabScreenProps } from "../../../../types";
import useColorScheme from "../../../hooks/useColorScheme";
import Colors from "../../../constants/Colors";

const VaultSuccessful = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();

  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <Image
          source={require("../../../../assets/images/Successful.png")}
          resizeMode="cover"
          style={[CommonStyles.caution]}
        />
        <View style={CommonStyles.actionContainer}>
          <Text style={CommonStyles.Style}>Successful!</Text>
          <Text style={CommonStyles.successStyle}>
            You have successfully locked away {`#${2000}`} to Flight Ticket vault
          </Text>
        </View>
        <View style={[CommonStyles.passwordContainer, { bottom: insets.bottom || hp(45) }]}>
          <Button
            title="Continue"
            onPressButton={() => navigation.navigate("Common", { screen: "AddVault" })}
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
              { bottom: hp(20) },
              CommonStyles.button,
            ]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default VaultSuccessful;
