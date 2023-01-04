import React, { useLayoutEffect } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { View, Text } from "../../../../theme/Themed";

import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import Button from "../../../../components/buttons/Button";
import Divider from "../../../../components/divider/Divider";

import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CommonScreenProps } from "../../../../common/navigation/types";

const DebitCreditCardsScreen = ({
  navigation,
}: CommonScreenProps<"DebitCreditCards">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          // lightColor={Colors.light.mainText}
          // darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          Debit/Credit Cards
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

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            // lightColor={Colors.light.mainText}
            // darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              marginVertical: hp(30),
              fontWeight: "500",
              marginLeft: hp(5),
            }}
          >
            Securely manage all your debit and credit cards connected to Aza
            right here. Tap a card for more options.
          </Text>
          <Divider />
          {/* list item */}
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("ManageCard")}>
              <View
                style={[
                  CommonStyles.row,
                  { alignSelf: "stretch", paddingVertical: 15 },
                ]}
              >
                <Image
                  source={{
                    uri: "https://download.logo.wine/logo/Visa_Inc./Visa_Inc.-Logo.wine.png",
                  }}
                  style={{
                    width: 36,
                    height: 36,
                    backgroundColor: "white",
                    borderRadius: 50,
                    resizeMode: "contain",
                  }}
                />
                <Text
                  // lightColor={Colors.light.mainText}
                  // darkColor={Colors.dark.mainText}
                  style={{
                    marginLeft: hp(20),
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: hp(14),
                  }}
                >
                  Visa (**** **** **** 1234)
                </Text>
              </View>
            </TouchableOpacity>
            <Divider />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Add New Card"
            onPressButton={() =>
              navigation.navigate("AddNewCard", {
                navigateBackTo: "DebitCreditCards",
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
};

export default DebitCreditCardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
