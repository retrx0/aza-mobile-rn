import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import BackButton from "../../../../components/buttons/BackButton";
import Button from "../../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import { View, Text } from "../../../../theme/Themed";

import Colors from "../../../../constants/Colors";
import { VaultStyles as styles } from "../styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ImageInput } from "../../payments/sub-components/ImageInput";
import { CommonScreenProps } from "../../../../common/navigation/types";

const RecurringMoneyConfirmationScreen = ({
  navigation,
}: CommonScreenProps<"RecurringMoneyConfirmationScreen">) => {
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ marginLeft: 15 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "500",
              marginLeft: hp(65),
            }}
          >
            Confirmation
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={CommonStyles.confirmDetails}>
            Kindly confirm the details of this transaction
          </Text>
          <View>
            <ImageInput
              label={"To"}
              source={require("../../../../../assets/images/icons/CoverImage.png")}
              icon={undefined}
              value="Flight Ticket vault"
              placeholder={""}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <UnderlinedInput
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
              // placeholder={"\u20A6 80,000"}
              containerStyle={undefined}
              // placeholderTextColor={Colors[colorScheme].text}
              value={"\u20A680,000"}
              returnKeyType="done"
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <UnderlinedInput
              icon={null}
              keyboardType="default"
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
              // placeholder="Weekly"
              containerStyle={undefined}
              // placeholderTextColor={Colors[colorScheme].text}
              value="Weekly"
            />
          </View>
          <View style={CommonStyles.vaultInputcontainer}>
            <UnderlinedInput
              icon={null}
              keyboardType="default"
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
              // placeholderTextColor={Colors[colorScheme].text}
              value="Wednesday"
            />
          </View>
        </View>

        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
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
            style={[CommonStyles.button]}
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
