import { Image } from "react-native";
import { RootTabScreenProps } from "../../../../../types";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import BackButton from "../../../../components/buttons/BackButton";
import Button from "../../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import { Input } from "../../../../components/input/input";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { VaultStyles as styles } from "../styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ImageInput } from "../../payments/sub-components/ImageInput";

const RecurringMoneyConfirmationScreen = ({
  navigation,
}: RootTabScreenProps<"Vault">) => {
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
          <View style={{ marginLeft: 15 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "500",
              marginLeft: hp(80),
            }}>
            Confirmation
          </Text>
        </View>
        <Text style={CommonStyles.confirmDetails}>
          Kindly confirm the details of this transaction
        </Text>
        <View
          style={{
            paddingHorizontal: hp(10),
          }}>
          <ImageInput
            label={"To"}
            placeholder={"Flight Ticket vault"}
            source={require("../../../../../assets/images/icons/CoverImage.png")}
            icon={undefined}
          />
        </View>
        <View style={CommonStyles.vaultInputcontainer}>
          <Input
            icon={null}
            keyboardType="phone-pad"
            inputStyle={{
              fontSize: hp(16),
              fontWeight: "500",
              fontFamily: "Euclid-Circular-A-Medium",
              borderBottomWidth: hp(0.25),
              borderColor: "#EAEAEC",
              paddingVertical: hp(8),
              width: "100%",
            }}
            labelStyle={styles.label}
            label="Amount"
            placeholder={"\u20A6 80,000"}
            containerStyle={undefined}
            placeholderTextColor={Colors[colorScheme].text}
          />
        </View>
        <View style={CommonStyles.vaultInputcontainer}>
          <Input
            icon={null}
            keyboardType="phone-pad"
            inputStyle={{
              fontSize: hp(16),
              fontWeight: "500",
              fontFamily: "Euclid-Circular-A-Medium",
              borderBottomWidth: hp(0.25),
              borderColor: "#EAEAEC",
              paddingVertical: hp(8),
              width: "100%",
            }}
            labelStyle={styles.label}
            label="Period"
            placeholder="Weekly"
            containerStyle={undefined}
            placeholderTextColor={Colors[colorScheme].text}
          />
        </View>
        <View style={CommonStyles.vaultInputcontainer}>
          <Input
            icon={null}
            keyboardType="phone-pad"
            inputStyle={{
              fontSize: hp(16),
              fontWeight: "500",
              fontFamily: "Euclid-Circular-A-Medium",
              borderBottomWidth: hp(0.25),
              borderColor: "#EAEAEC",
              paddingVertical: hp(8),
              width: "100%",
            }}
            labelStyle={styles.label}
            label="Day"
            placeholder="Wednesday"
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
            title="Continue"
            onPressButton={() =>
              navigation.navigate("StatusScreen", {
                status: "Successful",
                statusIcon: "Success",
                //TODO update message to accept JSX
                statusMessage: "Your recurring transfer was setup successfully",
                navigateTo: "TopBar",
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
            onPressButton={() =>
              navigation.getParent()?.navigate("VaultRecurringAmount")
            }
            styleText={CommonStyles.cancelStyle}
            style={{ borderBottomColor: Colors.general.red }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default RecurringMoneyConfirmationScreen;
