import { TouchableOpacity } from "react-native";
import Button from "../../../components/buttons/Button";
import { View, Text } from "../../../components/Themed";
import { Header } from "../../../components/text/header";
import { hp } from "../../../common/util/LayoutUtil";
import { InfoIcon } from "../../../../assets/svg";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { ListCard, VaultList } from "./components/VaultCard";
import BackButton from "../../../components/buttons/BackButton";
import { RootTabScreenProps } from "../../../../types";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import { Input } from "../../../components/input/input";
import { AIrtimeStyles as styles } from "./styles";

const VaultWithdraw = ({ navigation }: RootTabScreenProps<"Vault">) => {
  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginLeft: 15 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <View>
            <Header
              heading='Confirmation'
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
            keyboardType='phone-pad'
            inputStyle={CommonStyles.inputStyle}
            labelStyle={styles.label}
            label='To'
            placeholder='Aza Account'
            placeholderTextColor={"black"}
          />
        </View>

        <View style={CommonStyles.vaultInputcontainer}>
          <Input
            icon={null}
            keyboardType='phone-pad'
            inputStyle={CommonStyles.inputStyle}
            labelStyle={styles.label}
            label='Amount'
            placeholder='#80,000'
            placeholderTextColor={"black"}
          />
        </View>

        <View style={[CommonStyles.passwordContainer, { bottom: hp(45) }]}>
          <Button
            title='Continue'
            onPressButton={() =>
              navigation.navigate("Common", {
                screen: "VaultWithdrawsuccessful",
              })
            }
            style={CommonStyles.button}
          />
          <CancelButtonWithUnderline
            title='Cancel Transaction'
            onPressButton={() =>
              navigation.getParent()?.navigate("ConfirmDeleteVault")
            }
            style={{ marginTop: 10 }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default VaultWithdraw;
