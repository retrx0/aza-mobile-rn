import React, { useState } from "react";
import { RootTabScreenProps } from "../../../../../types";
import { View } from "../../../../theme/components/View";
import { Text } from "../../../../theme/components/Text";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import BackButton from "../../../../components/buttons/BackButton";
import { VaultStyles } from "../styles";
import { DatePickerIOSBase, Image, TouchableOpacity } from "react-native";
import Button from "../../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import { hp } from "../../../../common/util/LayoutUtil";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { useNavigation } from "@react-navigation/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AccessBank } from "../../../../../assets/images";

const VaultToBank = () => {
  const [click, setClick] = useState(false);
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={VaultStyles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: hp(10),
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
              marginLeft: hp(90),
            }}
          >
            Withdraw
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: hp(16),
            fontWeight: "500",
            marginLeft: hp(14),
            marginTop: hp(30),
            marginBottom: hp(40),
          }}
        >
          Select the bank you wish to withdraw to
        </Text>
        <View
          style={[
            CommonStyles.accessContainer,
            {
              borderColor: "#EAEAEC",
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={AccessBank}
              resizeMode="cover"
              style={[CommonStyles.accessBank]}
            />
            <Text style={CommonStyles.accountNumber}>
              Access Bank (123........)
            </Text>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.9}
              style={CommonStyles.selectContainer}
              onPress={() => setClick(!click)}
            >
              {click ? (
                <View style={CommonStyles.onselect}>
                  <View style={CommonStyles.doneSelect} />
                </View>
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}
        >
          <CancelButtonWithUnderline
            title="Add another Bank Account"
            onPressButton={() => navigation.getParent()?.navigate("TopBar")}
            // onPressButton={() => {
            //   navigation.navigate("Common", {
            //     screen: "BankAccounts",
            //     params: { screenType: "Withdraw" },
            //   });
            // }}
            style={CommonStyles.archivedBox}
            styleText={CommonStyles.addAccount}
          />
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.navigate("VaultConfirmation", {
                headerTitle: "Amount",
                transactionType: {
                  transaction: "deposit",
                  type: "normal",
                  beneficiary: {
                    beneficiaryAccount: "",
                    beneficiaryImage: "",
                    beneficiaryName: "",
                  },
                },
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
            disabled={!click}
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

export default VaultToBank;
