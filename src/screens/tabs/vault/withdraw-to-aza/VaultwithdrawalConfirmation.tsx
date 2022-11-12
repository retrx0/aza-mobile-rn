import { TouchableOpacity } from "react-native";
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
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";

const VaultToAza = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <View style={{ marginLeft: 15 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              textAlign: "center",
              marginRight: 170,
            }}>
            Confirmation
          </Text>
        </View>
        <Text style={CommonStyles.confirmDetails}>
          Kindly confirm the details of this transaction
        </Text>
        <View style={CommonStyles.vaultInputcontainer}>
          <Input
            icon={null}
            keyboardType="phone-pad"
            inputStyle={CommonStyles.inputStyle}
            labelStyle={styles.label}
            label="To"
            placeholder="Aza Account"
            containerStyle={undefined}
            placeholderTextColor={Colors[colorScheme].text}
          />
        </View>
        <View style={CommonStyles.vaultInputcontainer}>
          <Input
            icon={null}
            keyboardType="phone-pad"
            inputStyle={CommonStyles.inputStyle}
            labelStyle={styles.label}
            label="Amount"
            placeholder={"\u20A6 80,000"}
            containerStyle={undefined}
            placeholderTextColor={Colors[colorScheme].text}
          />
        </View>
        <View style={[CommonStyles.passwordContainer, { bottom: hp(65) }]}>
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.navigate("StatusScreen", {
                status: "Successful",
                statusIcon: "Success",
                //TODO update message to accept JSX
                statusMessage:
                  "   You have successfully withdrawn \u20A6 80,000 to your Aza Account",
                navigateTo: "Vault",
              })
            }
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
            onPressButton={() => navigation.getParent()?.navigate("TopBar")}
            styleText={CommonStyles.cancelStyle}
            style={{ borderBottomColor: Colors.general.red }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default VaultToAza;
