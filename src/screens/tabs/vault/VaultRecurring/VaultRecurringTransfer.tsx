import { useState } from "react";
import { RootTabScreenProps } from "../../../../../types";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import BackButton from "../../../../components/buttons/BackButton";
import Button from "../../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import CustomDropdown from "../../../../components/dropdown/CustomDropdown";
import { View } from "../../../../theme/components/View";
import { Text } from "../../../../theme/components/Text";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const VaultRecurringTransfer = ({
  navigation,
}: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();
  const [periodValue, setPeriodValue] = useState("");
  const [dayValue, setDayValue] = useState("");
  const insets = useSafeAreaInsets();

  const period = [
    { label: "2 Days", value: "1" },
    { label: "4 Days", value: "1" },
    { label: "1 Week", value: "1" },
    { label: "2 Weeks", value: "1" },
    { label: "1 Month", value: "1" },
  ];

  const day = [
    { label: "Sunday", value: "1" },
    { label: "Monday", value: "1" },
    { label: "Tuesday", value: "1" },
    { label: "Wednesday", value: "1" },
    { label: "Thursday", value: "1" },
    { label: "Friday", value: "1" },
    { label: "Saturday", value: "1" },
  ];

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
              fontWeight: "600",
              marginLeft: hp(70),
            }}
          >
            Recurring Transfer
          </Text>
        </View>
        <Text style={[CommonStyles.confirmDetails, { marginLeft: 20 }]}>
          Setup a recurring money transfer
        </Text>
        <View
          style={{
            paddingHorizontal: hp(20),
            marginBottom: hp(35),
          }}
        >
          <Text
            // lightColor={Colors.light.secondaryText}
            // darkColor={Colors.dark.secondaryText}
            style={{
              fontSize: hp(16),
              fontWeight: "400",
              marginBottom: hp(11),
              fontFamily: "Euclid-Circular-A",
            }}
          >
            Period
          </Text>
          <CustomDropdown
            data={period}
            placeholder="Choose a period"
            setValue={setPeriodValue}
            value={periodValue}
            label={""}
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
            }}
          >
            Day
          </Text>

          <CustomDropdown
            data={day}
            placeholder="Choose a day"
            setValue={setDayValue}
            value={dayValue}
            label={""}
          />
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
              },
            ]}
            disabled={!periodValue}
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
