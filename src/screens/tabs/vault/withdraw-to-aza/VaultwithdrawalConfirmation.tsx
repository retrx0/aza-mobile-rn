import Button from "../../../../components/buttons/Button";
import { View, Text } from "../../../../theme/Themed";

import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import BackButton from "../../../../components/buttons/BackButton";
import { RootTabScreenProps } from "../../../../../types";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import { VaultStyles as styles } from "../styles";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CommonScreenProps } from "../../../../common/navigation/types";

const VaultToAza = ({ navigation }: CommonScreenProps<"VaultToAza">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: hp(20),
          }}
        >
          <View>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "500",
              marginLeft: hp(80),
            }}
          >
            Confirmation
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={CommonStyles.confirmDetails}>
            Kindly confirm the details of this transaction
          </Text>
          <View style={CommonStyles.vaultInputcontainer}>
            <UnderlinedInput
              icon={null}
              inputStyle={[
                CommonStyles.inputStyle,
                { borderColor: colorScheme === "dark" ? "#262626" : "#EAEAEC" },
              ]}
              labelStyle={styles.label}
              label="To"
              value="Aza Account"
              containerStyle={undefined}
              // placeholderTextColor={Colors[colorScheme].text}
            />
          </View>
          <View style={CommonStyles.vaultInputcontainer}>
            <UnderlinedInput
              icon={null}
              inputStyle={[
                CommonStyles.inputStyle,
                { borderColor: colorScheme === "dark" ? "#262626" : "#EAEAEC" },
              ]}
              labelStyle={styles.label}
              label="Amount"
              value={"\u20A6 80,000"}
              containerStyle={undefined}
              // placeholderTextColor={Colors[colorScheme].text}
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
                statusMessage:
                  "   You have successfully withdrawn \u20A6 80,000 to your Aza Account",
                navigateTo: "UserVault",
              })
            }
            styleText={{}}
            style={[]}
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
