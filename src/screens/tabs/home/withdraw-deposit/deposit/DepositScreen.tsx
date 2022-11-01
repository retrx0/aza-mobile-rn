import React, { useLayoutEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import BackButton from "../../../../../components/buttons/BackButton";
import { Text, View } from "../../../../../components/Themed";
import Button from "../../../../../components/buttons/Button";
import ButtonWithUnderline, {
  CancelButtonWithUnderline,
} from "../../../../../components/buttons/CancelButtonWithUnderline";
import Divider from "../../../../../components/divider/Divider";

import { CommonScreenProps } from "../../../../../common/navigation/types";
import Colors from "../../../../../constants/Colors";
import { hp } from "../../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../../hooks/useColorScheme";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../../common/util/SpacerWrapper";

import {
  ArrowDownIcon,
  UndrawCreditCardIcon,
} from "../../../../../../assets/svg";

const DepositScreen = ({ navigation }: CommonScreenProps<"Deposit">) => {
  const colorScheme = useColorScheme();
  const [selectedCard, setSelectedCard] = useState("");
  const [cardsAvailable] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
          }}>
          Deposit
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
  }, []);

  const accounts = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjzgYSElVPPXddqi8InFnxHHBzkx524woJQ&usqp=CAU",
      name: "Visa (**** **** **** 1234)",
    },
  ];

  if (cardsAvailable) {
    return (
      <SpacerWrapper>
        <View
          style={[
            styles.container,
            {
              justifyContent: "space-between",
            },
          ]}>
          <View>
            <Text
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.mainText}
              style={{
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: hp(14),
                marginBottom: hp(30),
                fontWeight: "600",
                paddingLeft: hp(7),
              }}>
              Select the card you wish to deposit money to your Aza from
            </Text>
            <Divider />
            {accounts.map(({ image, name }, i) => (
              <View key={i}>
                <TouchableOpacity onPress={() => setSelectedCard(name)}>
                  <View
                    style={[
                      CommonStyles.row,
                      { alignSelf: "stretch", paddingVertical: 15 },
                    ]}>
                    <Image
                      source={{ uri: image }}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 50,
                      }}
                    />
                    <Text
                      // lightColor={Colors.light.mainText}
                      // darkColor={Colors.dark.mainText}
                      style={{
                        marginLeft: 20,
                        fontFamily: "Euclid-Circular-A-Semi-Bold",
                        fontSize: 14,
                      }}>
                      {name}
                    </Text>
                    <View
                      style={{
                        marginLeft: "auto",
                        width: hp(20),
                        height: hp(20),
                        borderRadius: hp(10),
                        borderColor:
                          selectedCard === name
                            ? Colors.general.green
                            : "#3A3D42",
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: hp(1),
                      }}>
                      {selectedCard === name && (
                        <View style={CommonStyles.doneSelect} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                <Divider />
              </View>
            ))}
          </View>

          <View style={[CommonStyles.passwordContainer, { bottom: hp(80) }]}>
            <CancelButtonWithUnderline
              title="Add New Card"
              onPressButton={() =>
                navigation.getParent()?.navigate("ArchievedVault")
              }
              color={Colors[colorScheme].text}
            />
            <Button
              disabled={!selectedCard}
              title="Continue"
              onPressButton={() =>
                navigation.navigate("TransactionKeypad", {
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
            />
            <CancelButtonWithUnderline
              title="Cancel"
              onPressButton={() => navigation.goBack()}
              styleText={CommonStyles.cancelStyle}
              style={{ borderBottomColor: Colors.general.red }}
            />
          </View>
        </View>
      </SpacerWrapper>
    );
  }

  return (
    <SpacerWrapper>
      <View style={[styles.container, { justifyContent: "space-between" }]}>
        <View
          style={[
            CommonStyles.col,
            { marginTop: "auto", marginBottom: "auto" },
          ]}>
          <UndrawCreditCardIcon
            color={colorScheme === "dark" ? "#E7E9EA" : "#000000"}
          />
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontSize: 16,
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              marginTop: hp(30),
              textAlign: "center",
            }}>
            You do not have any credit/debit cards
          </Text>
          <View style={[CommonStyles.row, { marginTop: hp(10) }]}>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.secondaryText}
              style={{
                fontSize: 14,
                maxWidth: 300,
                marginRight: 5,
                textAlign: "center",
              }}>
              Click ‘Add New Card’ to add a new card
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
        </View>
        <View style={[CommonStyles.col, { marginBottom: hp(65) }]}>
          <Button
            title="Add New Card"
            onPressButton={() =>
              navigation.navigate("AddNewCard", {
                navigateBackTo: "Deposit",
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
          <ButtonWithUnderline
            title="Cancel"
            onPressButton={() => navigation.goBack()}
            styleText={CommonStyles.cancelStyle}
            style={{ borderBottomColor: Colors.general.red }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default DepositScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
