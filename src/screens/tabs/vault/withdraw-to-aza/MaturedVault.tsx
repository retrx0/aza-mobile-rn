import { RootTabScreenProps } from "../../../../../types";
import Button from "../../../../components/buttons/Button";
import { Text, View } from "../../../../components/Themed";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { NairaIcon, UnlockIcon } from "../../../../../assets/svg";
import { hp } from "../../../../common/util/LayoutUtil";
import { VaultStyles } from "../styles";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MaturedVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={VaultStyles.container}>
        <View style={CommonStyles.flightContainer}>
          <Text style={CommonStyles.ticket}>Flight Ticket Vault</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <NairaIcon color={Colors[colorScheme].text} size={0} />
            <Text style={CommonStyles.flightAmount}>80,000</Text>
          </View>
        </View>
        <View
          style={[
            CommonStyles.matureContainer,
            { backgroundColor: Colors[colorScheme].mature },
            { borderColor: Colors[colorScheme].unlock },
          ]}>
          <UnlockIcon color={Colors[colorScheme].unlock} size={0} />
          <Text
            style={[
              CommonStyles.matured,
              { color: Colors[colorScheme].unlock },
            ]}>
            Matured
          </Text>
        </View>
        <Text style={CommonStyles.withdrawSuccessfull}>
          Your funds have successfully matured and can now be withdrawn.
        </Text>

        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}>
          <Button
            title="Withdraw to Aza"
            onPressButton={() =>
              navigation
                .getParent()
                ?.navigate("Common", { screen: "VaultToAza" })
            }
            style={[CommonStyles.toBankbutton]}
            styleText={CommonStyles.toBankbuttonText}
          />
          <Button
            title="Withdraw to Bank"
            // onPressButton={() =>
            //   navigation
            //     .getParent()
            //     ?.navigate("Common", { screen: "VaultToBank" })
            // }
            onPressButton={() => {
              navigation.navigate("Common", {
                screen: "BankAccounts",
                params: { screenType: "Withdraw" },
              });
            }}
            style={[CommonStyles.toAzabutton]}
            styleText={CommonStyles.toAzabuttonText}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default MaturedVault;
