import React, { useState } from "react";
import { RootTabScreenProps } from "../../../../../types";
import { Text, View } from "../../../../components/Themed";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import BackButton from "../../../../components/buttons/BackButton";
import { VaultStyles } from "../styles";
import { Image, TouchableOpacity } from "react-native";
import Button from "../../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import { hp } from "../../../../common/util/LayoutUtil";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";

const VaultToBank = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const [click, setClick] = useState(false);
  const colorScheme = useColorScheme();

  return (
    <SpacerWrapper>
      <View style={VaultStyles.container}>
        <View style={[CommonStyles.topTab]}>
          <View style={{ marginLeft: 20 }}>
            <BackButton
              onPress={() => {
                navigation.getParent()?.navigate("TopBar");
              }}
            />
          </View>
          <Text style={CommonStyles.withdraw}>Withdraw</Text>
        </View>
        <Text style={CommonStyles.selectStyle}>
          Select the bank you wish to withdraw to
        </Text>
        <View
          style={[
            CommonStyles.accessContainer,
            { borderColor: Colors[colorScheme].disabledButton },
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
        <View style={[CommonStyles.passwordContainer, { bottom: hp(45) }]}>
          <CancelButtonWithUnderline
            title="Add another Bank Account"
            onPressButton={() => navigation.getParent()?.navigate("TopBar")}
            style={CommonStyles.archivedBox}
            styleText={CommonStyles.addAccount}
          />
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.navigate("Common", {
                screen: "VaultWithdrawConfirmation",
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
