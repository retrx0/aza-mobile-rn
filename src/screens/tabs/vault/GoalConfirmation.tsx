import { Image } from "react-native";
import { RootTabScreenProps } from "../../../../types";
import CommonStyles from "../../../common/styles/CommonStyles";
import { hp } from "../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import { UnderlinedInput } from "../../../components/input/UnderlinedInput";
import { View, Text } from "../../../theme/Themed";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { VaultStyles as styles } from "../vault/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CommonScreenProps } from "../../../common/navigation/types";

const ConfirmGoal = ({ navigation }: CommonScreenProps<"ConfirmGoal">) => {
  const colorScheme = useColorScheme();
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
          <View style={{ marginLeft: 20 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              marginLeft: hp(85),
            }}
          >
            Confirmation
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={CommonStyles.confirmDetails}>
            Kindly confirm the details of this transaction
          </Text>
          <View
            style={[
              {
                borderBottomWidth: hp(0.25),
                marginBottom: hp(35),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",

                // alignSelf: "center",
                // flexDirection: "row",
                // alignItems: "center",
              },
              {
                borderColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
              },
            ]}
          >
            <UnderlinedInput
              icon={null}
              keyboardType="default"
              labelStyle={styles.label}
              label="Vault Name"
              // placeholder="Give your vault a name"
              inputStyle={{
                fontSize: hp(16),
                fontWeight: "500",
                fontFamily: "Euclid-Circular-A-Medium",
                // fontSize: hp(16),
                // fontWeight: "500",
                // fontFamily: "Euclid-Circular-A",
              }}
              value="Flight Ticket"
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
            <UnderlinedInput
              icon={null}
              keyboardType="phone-pad"
              inputStyle={[
                [CommonStyles.inputStyle],
                {
                  borderColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
                },
              ]}
              labelStyle={styles.label}
              label="Vault Goal"
              // placeholder={"\u20A6 80,000"}
              // placeholder="Amount"
              containerStyle={undefined}
              // placeholderTextColor={Colors[colorScheme].text}
              value={"\u20A680,000"}
              returnKeyType="done"
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
            title="Confirm"
            onPressButton={() => navigation.navigate("LockVault")}
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
