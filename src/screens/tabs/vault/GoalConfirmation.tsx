import { Image } from "react-native";
import { RootTabScreenProps } from "../../../../types";
import CommonStyles from "../../../common/styles/CommonStyles";
import { hp } from "../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import { Input } from "../../../components/input/input";
import { Text, View } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { VaultStyles as styles } from "../vault/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ConfirmGoal = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
          <View style={{ marginLeft: 10 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              marginLeft: hp(90),
            }}>
            Confirmation
          </Text>
        </View>
        <Text style={CommonStyles.confirmDetails}>
          Kindly confirm the details of this transaction
        </Text>
        <View
          style={{
            borderBottomWidth: hp(0.25),
            marginBottom: hp(35),
            borderColor: "#EAEAEC",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",

            width: "95%",
            marginLeft: hp(10),

            // alignSelf: "center",
            // flexDirection: "row",
            // alignItems: "center",
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
              // fontSize: hp(16),
              // fontWeight: "500",
              // fontFamily: "Euclid-Circular-A",
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
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}>
          <Button
            title="Confirm"
            onPressButton={() =>
              navigation.navigate("Common", {
                screen: "LockVault",
              })
            }
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
            ]}
          />

          <CancelButtonWithUnderline
            title="Cancel Transaction"
            onPressButton={() =>
              navigation.getParent()?.navigate("SetVaultGoal")
            }
            styleText={CommonStyles.cancelStyle}
            style={[{ borderBottomColor: Colors.general.red }]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default ConfirmGoal;
