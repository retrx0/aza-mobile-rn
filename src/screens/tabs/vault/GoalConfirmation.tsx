import { Image } from "react-native";
import { RootTabScreenProps } from "../../../../types";
import CommonStyles from "../../../common/styles/CommonStyles";
import { hp, wp } from "../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import Divider from "../../../components/divider/Divider";
import { Input } from "../../../components/input/input";
import { Header } from "../../../components/text/header";
import { Text, View } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { VaultStyles as styles } from "../vault/styles";

const ConfirmGoal = ({ navigation }: RootTabScreenProps<"Vault">) => {
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
        <View
          style={{
            borderBottomWidth: 1,
            width: 370,
            marginLeft: 20,
            marginBottom: 20,
            borderColor: "#EAEAEC",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Input
            icon={null}
            keyboardType="default"
            labelStyle={styles.label}
            label="Vault Name"
            placeholder="Flight Ticket"
            containerStyle={undefined}
            placeholderTextColor={Colors[colorScheme].text}
            inputStyle={{
              fontSize: hp(16),
              fontWeight: "500",
              fontFamily: "Euclid-Circular-A",
            }}
          />
          <Image
            style={{
              width: 45,
              height: 45,
            }}
            source={require("../../../../assets/images/icons/CoverImage.png")}
          />
        </View>

        <View style={CommonStyles.vaultInputcontainer}>
          <Input
            icon={null}
            keyboardType="phone-pad"
            inputStyle={CommonStyles.inputStyle}
            labelStyle={styles.label}
            label="Vault Goal"
            placeholder={"\u20A6 80,000"}
            containerStyle={undefined}
            placeholderTextColor={Colors[colorScheme].text}
          />
        </View>
        <View style={[CommonStyles.passwordContainer, { bottom: hp(45) }]}>
          <Button
            title="Confirm"
            onPressButton={() =>
              navigation.navigate("Common", {
                screen: "UserVault",
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
            title="Cancel Transaction"
            onPressButton={() =>
              navigation.getParent()?.navigate("SetVaultGoal")
            }
            styleText={CommonStyles.cancelStyle}
            style={{ borderBottomColor: Colors.general.red }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default ConfirmGoal;
