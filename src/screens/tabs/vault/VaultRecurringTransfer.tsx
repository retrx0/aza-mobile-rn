import { useState } from "react";
import { Image } from "react-native";
import { RootTabScreenProps } from "../../../../types";
import CommonStyles from "../../../common/styles/CommonStyles";
import { hp, wp } from "../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import Divider from "../../../components/divider/Divider";
import CustomDropdown from "../../../components/dropdown/CustomDropdown";
import { Input } from "../../../components/input/input";
import { Header } from "../../../components/text/header";
import { Text, View } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { VaultStyles as styles } from "./styles";

const VaultRecurringTransfer = ({
  navigation,
}: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();
  const [periodValue, setPeriodValue] = useState("");
  const [dayValue, setDayValue] = useState("");

  const period = [
    { label: "2 Days", value: "1" },
    { label: "4 Days", value: "1" },
    { label: "1 Week", value: "1" },
    { label: "2 Weeks", value: "1" },
    { label: "1 Month", value: "1" },
  ];

  const day = [
    { label: "2 Days", value: "1" },
    { label: "4 Days", value: "1" },
    { label: "1 Week", value: "1" },
    { label: "2 Weeks", value: "1" },
    { label: "1 Month", value: "1" },
  ];

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <View style={{ marginLeft: 16 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              textAlign: "center",
              marginRight: 150,
            }}>
            Recurring Transfer
          </Text>
        </View>
        <Text style={CommonStyles.confirmDetails}>
          Setup a recurring money transfer
        </Text>
        <View
          style={{
            marginTop: hp(20),
            paddingHorizontal: hp(20),
            marginBottom: hp(35),
          }}>
          <Text
            // lightColor={Colors.light.secondaryText}
            // darkColor={Colors.dark.secondaryText}
            style={{
              fontSize: hp(16),
              fontWeight: "400",
              marginBottom: hp(11),
              fontFamily: "Euclid-Circular-A",
            }}>
            Period
          </Text>
          <CustomDropdown
            data={period}
            placeholder="Choose a period"
            setValue={setPeriodValue}
            value={periodValue}
          />
        </View>
        <View style={{ marginTop: hp(20), paddingHorizontal: 20 }}>
          <Text
            // lightColor={Colors.light.secondaryText}
            // darkColor={Colors.dark.secondaryText}
            style={{
              fontSize: hp(16),
              fontWeight: "400",
              lineHeight: hp(17.75),
              marginBottom: hp(11),
              fontFamily: "Euclid-Circular-A",
            }}>
            Day
          </Text>

          <CustomDropdown
            data={day}
            placeholder="Choose a day"
            setValue={setDayValue}
            value={dayValue}
          />
        </View>

        <View style={[CommonStyles.passwordContainer, { bottom: hp(45) }]}>
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.navigate("Common", {
                screen: "VaultRecurringAmount",
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
            title="Cancel"
            onPressButton={() => navigation.getParent()?.navigate("TopBar")}
            styleText={CommonStyles.cancelStyle}
            style={{ borderBottomColor: Colors.general.red }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default VaultRecurringTransfer;
