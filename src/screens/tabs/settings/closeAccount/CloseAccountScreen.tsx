import React, { useLayoutEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { View, Text } from "../../../../theme/Themed";

import Button from "../../../../components/buttons/Button";
import { CancelButtonWithUnderline } from "../../../../components/buttons/CancelButtonWithUnderline";
import Divider from "../../../../components/divider/Divider";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Images from "../../../../../assets/images";

// import { AccessBank } from "../../../../../assets/images";
import SegmentedInput from "../../../../components/input/SegmentedInput";

const CloseAccountScreen = ({ navigation }: CommonScreenProps<"Common">) => {
  const colorScheme = useColorScheme();
  const [selectedCard, setSelectedCard] = useState("");
  const [fundsAvailable] = useState(false);
  const insets = useSafeAreaInsets();
  const [password, setPassword] = useState("");

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
          Close Account
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
      image: Images.AccessBank,
      name: "Access Bank (123........)",
    },
  ];

  if (fundsAvailable) {
    return (
      <SpacerWrapper>
        <View style={[CommonStyles.vaultcontainer]}>
          <View style={{ paddingHorizontal: hp(15) }}>
            <Text
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.mainText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                marginBottom: hp(30),
                fontWeight: "500",
                paddingLeft: hp(7),
                maxWidth: wp(350),
              }}>
              You would need to empty your account first. Choose a bank you wish
              to withdraw your funds to
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
                      source={image}
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
                        fontFamily: "Euclid-Circular-A",
                        fontSize: hp(16),
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

          <View
            style={[
              CommonStyles.passwordContainer,
              { bottom: insets.bottom || hp(45) },
            ]}>
            <CancelButtonWithUnderline
              title="Add another bank Account"
              onPressButton={() => {
                navigation.navigate("Common", {
                  screen: "AddBankAccount",
                  params: { screenType: "withdraw" },
                });
              }}
              color={Colors[colorScheme].text}
              style={{ marginBottom: hp(10) }}
            />
            <Button
              disabled={!selectedCard}
              title="Continue"
              onPressButton={() =>
                navigation.navigate("TransactionKeypad", {
                  headerTitle: "Close Account",
                  transactionType: {
                    transaction: "withdraw",
                    type: "normal",
                    beneficiary: {
                      azaAccountNumber: "",
                      fullName: "",
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

  // const verifyPassword = async () => {
  //   setButtonLoading(true);
  // };

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A-Medium",
            fontWeight: "500",
            marginLeft: hp(20),
          }}>
          Please enter your password
        </Text>
        <View
          style={{
            marginTop: hp(80),
            marginBottom: hp(100),
            paddingHorizontal: hp(20),
          }}>
          <SegmentedInput
            value={password}
            secureInput
            headerText="Password"
            onValueChanged={(pass) => setPassword(pass)}
            headerstyle={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              fontWeight: "500",
            }}
          />
        </View>
        <Button
          title="Continue"
          // disabled={password.length < 6 ? true : false}
          // onPressButton={() => verifyPassword()}
          onPressButton={() => {
            navigation.navigate("AccountClosureSurveyScreen");
          }}
          styleText={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
          style={{
            marginTop: hp(100),
          }}
          // buttonLoading={isButtonLoading}
        />
      </View>
    </SpacerWrapper>
  );
};

export default CloseAccountScreen;
