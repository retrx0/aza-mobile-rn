import { Image } from "react-native";
import { RootTabScreenProps } from "../../../../../types";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import BackButton from "../../../../components/buttons/BackButton";
import Button from "../../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import Divider from "../../../../components/divider/Divider";
import { Input } from "../../../../components/input/input";
import { Header } from "../../../../components/text/header";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { VaultStyles as styles } from "../styles";

const RecurringMoneyConfirmationScreen = ({
  navigation,
}: RootTabScreenProps<"Vault">) => {
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
          <View style={{ marginLeft: 15.5 }}>
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
        <View
          style={{
            borderBottomWidth: 1,
            width: 370,
            marginLeft: 20,
            marginBottom: 35,
            borderColor: "#EAEAEC",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
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
        <View style={[CommonStyles.passwordContainer, { bottom: hp(65) }]}>
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
            style={{ borderBottomColor: Colors.general.red, marginTop: 10 }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default RecurringMoneyConfirmationScreen;
