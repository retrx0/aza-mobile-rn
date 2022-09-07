import { RootTabScreenProps } from "../../../../../types";
import Button from "../../../../components/buttons/Button";
import { Text, View } from "../../../../components/Themed";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { NairaIcon, UnlockIcon } from "../../../../../assets/svg";
import { hp } from "../../../../common/util/LayoutUtil";
import { vaultStyles } from "../styles";

const MaturedVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  return (
    <SpacerWrapper>
      <View style={vaultStyles.container}>
        <View style={CommonStyles.flightContainer}>
          <Text style={CommonStyles.ticket}>Flight Ticket Vault</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <NairaIcon color={"black"} size={0} />
            <Text style={CommonStyles.flightAmount}>80,000</Text>
          </View>
        </View>
        <View style={CommonStyles.matureContainer}>
          <UnlockIcon />
          <Text style={CommonStyles.matured}>Matured</Text>
        </View>
        <Text style={CommonStyles.withdrawSuccessfull}>
          Your funds have successfully matured and can now be withdrawn.
        </Text>

        <View style={[CommonStyles.passwordContainer, { bottom: hp(155) }]}>
          <Button
            title='Withdraw to Aza'
            onPressButton={() =>
              navigation
                .getParent()
                ?.navigate("Common", { screen: "VaultToAza" })
            }
            style={[CommonStyles.maturebutton]}
            styleText={CommonStyles.buttonText}
          />
        </View>
        <View style={[CommonStyles.passwordContainer, { bottom: hp(75) }]}>
          <Button
            title='Withdraw to Bank'
            onPressButton={() =>
              navigation
                .getParent()
                ?.navigate("Common", { screen: "VaultToBank" })
            }
            style={[CommonStyles.button]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default MaturedVault;
