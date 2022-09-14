import { RootTabScreenProps } from "../../../../../types";
import Button from "../../../../components/buttons/Button";
import { Text, View } from "../../../../components/Themed";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { NairaIcon, UnlockIcon } from "../../../../../assets/svg";
import { hp } from "../../../../common/util/LayoutUtil";
import { vaultStyles } from "../styles";
import Colors from "../../../../constants/Colors";

const MaturedVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  return (
    <SpacerWrapper>
      <View style={vaultStyles.container}>
        <View style={CommonStyles.flightContainer}>
          <Text style={CommonStyles.ticket}>Flight Ticket Vault</Text>
          <Text style={CommonStyles.flightAmount}> {"\u20A6"}80,000</Text>
        </View>
        <View style={CommonStyles.matureContainer}>
          <UnlockIcon color={Colors.general.green} />
          <Text style={CommonStyles.matured}>Matured</Text>
        </View>
        <Text style={CommonStyles.withdrawSuccessfull}>
          Your funds have successfully matured and can now be withdrawn.
        </Text>

        <View style={[CommonStyles.passwordContainer, { bottom: hp(130) }]}>
          <Button
            title="Withdraw to Aza"
            onPressButton={() =>
              navigation
                .getParent()
                ?.navigate("Common", { screen: "VaultToAza" })
            }
            style={[CommonStyles.toAzabutton]}
            styleText={CommonStyles.toAzabuttonText}
          />
        </View>
        <View style={[CommonStyles.passwordContainer, { bottom: hp(60) }]}>
          <Button
            title="Withdraw to Bank"
            onPressButton={() =>
              navigation
                .getParent()
                ?.navigate("Common", { screen: "VaultToBank" })
            }
            style={[CommonStyles.toBankbutton]}
            styleText={CommonStyles.toBankbuttonText}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default MaturedVault;
