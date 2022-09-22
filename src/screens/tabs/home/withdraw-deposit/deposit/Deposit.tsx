import { StyleSheet, Image, Platform, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, Text, View } from "../../../../../components/Themed";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import Colors from "../../../../../constants/Colors";
import useColorScheme from "../../../../../hooks/useColorScheme";
import { ArrowDownIcon } from "../../../../../../assets/svg";
import Button from "../../../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../../../components/buttons/CancelButtonWithUnderline";
import { CommonScreenProps } from "../../../../../common/navigation/types";

export default function Deposit({
  navigation,
}: CommonScreenProps<"BankAccounts">) {
  const [cardIsAvailable, setCardAvailabilty] = useState(true);
  const colorScheme = useColorScheme();
  const [click, setClick] = useState(false);
  if (cardIsAvailable) {
    return (
      <SafeAreaView
        style={[
          CommonStyles.parentContainer,
          {
            paddingTop: Platform.OS == "android" ? 100 : 70,
            paddingHorizontal: 20,
          },
        ]}>
        <Text style={styles.text}>
          Select the card you wish to deposit money to your Aza from
        </Text>
        <View
          style={[
            CommonStyles.accessContainer,
            { borderColor: Colors[colorScheme].disabledButton },
          ]}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../../../../assets/images/AccessBank.png")}
              resizeMode="cover"
              style={[CommonStyles.accessBank]}
            />
            <Text style={CommonStyles.accountNumber}>
              Visa (**** **** **** 1234)
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
        <View style={[CommonStyles.passwordContainer, { bottom: 45 }]}>
          <CancelButtonWithUnderline
            title="Add New Card"
            onPressButton={() => navigation.navigate("AddNewCard")}
            color={Colors[colorScheme].text}
          />
          <Button
            title="Continue"
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
            onPressButton={() => navigation.goBack()}
            styleText={CommonStyles.cancelStyle}
            style={{ borderBottomColor: Colors.general.red }}
          />
        </View>
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.container}>
      <Image source={require("../../../../../../assets/images/Card.png")} />
      <Text style={CommonStyles.selectStyle}>
        You do not have any credit/debit cards
      </Text>
      <View style={[CommonStyles.row, { marginTop: 15 }]}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.secondaryText}
          style={{
            fontSize: 14,
            maxWidth: 300,
            marginRight: 5,
            textAlign: "center",
          }}>
          Click ‘Add Bank New Card’ to add new card
        </Text>
        <ArrowDownIcon
          color={
            colorScheme === "dark"
              ? Colors.dark.secondaryText
              : Colors.light.text
          }
          size={16}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Add New Card"
          onPressButton={() => navigation.navigate("AddNewCard")}
        />
        <CancelButtonWithUnderline
          title="Cancel"
          color={Colors.general.red}
          styleText={{ color: Colors.general.red }}
          onPressButton={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    marginBottom: 50,
  },
  text: {
    marginTop: 30,
    marginBottom: 40,
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A",
    fontSize: 14,
    lineHeight: 17,
    marginLeft: 24,
  },
});
