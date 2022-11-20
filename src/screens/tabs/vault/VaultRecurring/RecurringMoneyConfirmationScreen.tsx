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
            borderBottomWidth: 0.5,
            width: "90%",
            marginBottom: hp(35),
            borderColor: "#EAEAEC",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "center",
          }}>
          <Input
            icon={null}
            keyboardType="default"
            labelStyle={styles.label}
            label="To"
            placeholder="Flight Ticket vault"
            containerStyle={undefined}
            placeholderTextColor={Colors[colorScheme].text}
            inputStyle={{
              fontSize: hp(16),
              fontWeight: "500",
              fontFamily: "Euclid-Circular-A-Medium",
            }}
          />
          <Image
            style={{
              width: 45,
              height: 45,
            }}
            source={require("../../../../../assets/images/icons/CoverImage.png")}
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
              width: 370,
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
              width: 370,
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
              width: 370,
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
                navigateTo: "Home",
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
