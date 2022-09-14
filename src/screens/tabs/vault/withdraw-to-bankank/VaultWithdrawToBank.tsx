import React, { useState } from "react";
import { RootTabScreenProps } from "../../../../../types";
import { Text, View } from "../../../../components/Themed";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import BackButton from "../../../../components/buttons/BackButton";
import { Image, TouchableOpacity } from "react-native";
import Button from "../../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import { hp } from "../../../../common/util/LayoutUtil";
import Colors from "../../../../constants/Colors";
import { Header } from "../../../../components/text/header";
import useColorScheme from "../../../../hooks/useColorScheme";

const VaultToBank = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const [click, setClick] = useState(false);
  const colorScheme = useColorScheme();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginLeft: 15 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <View>
            <Header
              heading="Confirmation"
              description={""}
              headerStyle={CommonStyles.confirmation}
              descriptionStyle={undefined}
            />
          </View>
        </View>
        <Text style={CommonStyles.selectStyle}>
          Select the bank you wish to withdraw to
        </Text>
        <View style={CommonStyles.accessContainer}>
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
        <View style={[CommonStyles.passwordContainer, { bottom: hp(60) }]}>
          <CancelButtonWithUnderline
            title="Add another Bank Account"
            onPressButton={() => navigation.getParent()?.navigate("TopBar")}
            style={{ borderBottomColor: Colors.general.black }}
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
                marginBottom: hp(10),
              },
              CommonStyles.button,
            ]}
          />

          <CancelButtonWithUnderline
            title="Cancel"
            onPressButton={() => navigation.getParent()?.navigate("TopBar")}
            style={{ borderBottomColor: Colors.general.red }}
            styleText={CommonStyles.cancelStyle}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default VaultToBank;
