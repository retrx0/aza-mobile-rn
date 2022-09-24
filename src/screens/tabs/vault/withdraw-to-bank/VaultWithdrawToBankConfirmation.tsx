import Button from "../../../../components/buttons/Button";
import { View, Text } from "../../../../components/Themed";
import { Header } from "../../../../components/text/header";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import BackButton from "../../../../components/buttons/BackButton";
import { RootTabScreenProps } from "../../../../../types";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import { Input } from "../../../../components/input/input";
import { VaultStyles as styles } from "../styles";
import useColorScheme from "../../../../hooks/useColorScheme";
import Colors from "../../../../constants/Colors";

const VaultWithdrawConfirmation = ({
  navigation,
}: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginLeft: 15 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <View>
            <Header
              heading="Confirmation"
              description={""}
              headerStyle={CommonStyles.confirmation}
              descriptionStyle={undefined}
            />
          </View>
        </View>
        <Text style={CommonStyles.confirmDetails}>
          Kindly confirm the details of this transaction
        </Text>
        <View style={CommonStyles.vaultInputcontainer}>
          <Input
            icon={null}
            keyboardType="phone-pad"
            inputStyle={CommonStyles.inputStyle}
            labelStyle={[styles.label, { color: Colors[colorScheme].Text }]}
            label="To"
            placeholder="Access bank (140...)"
            containerStyle={undefined}
            placeholderTextColor={Colors[colorScheme].text}
          />
        </View>
        <View style={CommonStyles.vaultInputcontainer}>
          <Input
            icon={null}
            keyboardType="phone-pad"
            inputStyle={CommonStyles.inputStyle}
            labelStyle={[styles.label, { color: Colors[colorScheme].Text }]}
            label="Amount"
            placeholder={"\u20A6 80,000"}
            containerStyle={undefined}
            placeholderTextColor={Colors[colorScheme].text}
          />
        </View>
        <View style={[CommonStyles.passwordContainer, { bottom: hp(45) }]}>
          <Button
            onPressButton={() =>
              navigation.navigate("Common", {
                screen: "VaultToBankSuccessful",
              })
            }
            title={"Confirm"}
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
              CommonStyles.button,
            ]}
          />
          <CancelButtonWithUnderline
            title="Cancel Transaction"
            onPressButton={() =>
              navigation.getParent()?.navigate("VaultToBank")
            }
            style={{ borderBottomColor: Colors.general.red }}
            styleText={CommonStyles.cancelStyle}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default VaultWithdrawConfirmation;
