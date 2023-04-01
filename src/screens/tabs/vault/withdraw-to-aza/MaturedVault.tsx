import { RootTabScreenProps } from "../../../../../types";
import Button from "../../../../components/buttons/Button";
import { View, Text } from "../../../../theme/Themed";

import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { NairaIcon, UnlockIcon } from "../../../../../assets/svg";
import { hp } from "../../../../common/util/LayoutUtil";
import { VaultStyles } from "../styles";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "react-native";
import { CommonScreenProps } from "../../../../common/navigation/types";

const MaturedVault = ({ navigation }: CommonScreenProps<"mature">) => {
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={VaultStyles.container}>
        <View>
          <View>
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                marginBottom: hp(10),
              }}
              source={require("../../../../../assets/images/icons/CoverImage.png")}
            />
            <Text
              style={{
                fontSize: hp(24),
                fontWeight: "600",
                fontFamily: "Euclid-Circular-A-Bold",
                marginTop: hp(2),
                textAlign: "center",
              }}
            >
              {"\u20A62,000"}
            </Text>
          </View>
        </View>
        <View style={[CommonStyles.matureContainer]}>
          <UnlockIcon color={Colors.general.grey} size={0} />
          <Text style={[CommonStyles.matured]}>Matured</Text>
        </View>
        <View style={{ paddingHorizontal: hp(40) }}>
          <Text style={CommonStyles.withdrawSuccessfull}>
            Your funds have successfully matured and can now be withdrawn.
          </Text>
        </View>

        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Withdraw to Aza"
            onPressButton={() =>
              navigation
                .getParent()
                ?.navigate("Common", { screen: "VaultToAza" })
            }
            style={[CommonStyles.toBankbutton, { marginBottom: hp(20) }]}
            styleText={CommonStyles.toBankbuttonText}
          />
          <Button
            title="Withdraw to Bank"
            // onPressButton={() =>
            //   navigation
            //     .getParent()
            //     ?.navigate("Common", { screen: "VaultToBank" })
            // }
            onPressButton={() => {
              navigation.navigate("BankAccounts", { screenType: "Withdraw" });
            }}
            style={[CommonStyles.toAzabutton]}
            styleText={CommonStyles.toAzabuttonText}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default MaturedVault;
