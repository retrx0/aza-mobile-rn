import React, { useState } from "react";
import { RootTabScreenProps } from "../../../../../types";
import { Text, View } from "../../../../components/Themed";
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

const VaultToBank = () => {
  const [click, setClick] = useState(false);
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <SpacerWrapper>
      <View style={VaultStyles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <View style={{ marginLeft: 15 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              textAlign: "center",
              marginRight: 190,
            }}>
            Withdraw
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: hp(16),
            fontWeight: "500",
            marginLeft: hp(20),
            marginTop: hp(30),
            marginBottom: hp(100),
          }}>
          Select the bank you wish to withdraw to
        </Text>
        <View
          style={[
            CommonStyles.accessContainer,
            {
              borderColor: "#EAEAEC",
            },
          ]}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../../../assets/images/AccessBank.png")}
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
              onPress={() => setClick(!click)}>
              {click ? (
                <View style={CommonStyles.onselect}>
                  <View style={CommonStyles.doneSelect} />
                </View>
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
        <View style={[CommonStyles.passwordContainer, { bottom: hp(65) }]}>
          <CancelButtonWithUnderline
            title="Add another Bank Account"
            onPressButton={() => navigation.getParent()?.navigate("TopBar")}
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
              CommonStyles.button,
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
