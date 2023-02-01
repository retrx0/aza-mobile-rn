import React, { useLayoutEffect, useState } from "react";
import { StyleSheet } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { TextInput } from "../../../../theme/Themed";
import { View, Text } from "../../../../theme/Themed";

import Button from "../../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { number } from "yup/lib/locale";
import { string } from "yup";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";

const AddNewCardScreen = ({
  navigation,
  route,
}: CommonScreenProps<"AddNewCard">) => {
  const { navigateBackTo } = route.params;
  const insets = useSafeAreaInsets();
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  interface CardDetails {
    cardNo: string;
    expiryDate: string;
    cvv: string;
  }

  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNo: "",
    cvv: "",
    expiryDate: "",
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          Add New Card
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
              marginTop: hp(30),
              marginBottom: hp(40),
              fontWeight: "500",
            }}>
            Add your card details to deposit money to your Aza wallet
          </Text>
          <View style={{ marginBottom: hp(40) }}>
            <Text
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.mainText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}>
              Card Number
            </Text>
            <TextInput
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 0.3,
                opacity: 0.6,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
              }}
              placeholder="Enter your card number"
              keyboardType="number-pad"
              returnKeyType="done"
              maxLength={16}
              value={"" + cardDetails.cardNo}
              onChangeText={(_cardNo) =>
                setCardDetails({ ...cardDetails, cardNo: _cardNo })
              }
            />
          </View>
          <View style={{ marginBottom: hp(40) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}>
              Expiry Date
            </Text>
            <TextInput
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 0.3,
                opacity: 0.6,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
              }}
              placeholder="MM/YY"
              keyboardType="number-pad"
              returnKeyType="done"
              maxLength={4}
              value={cardDetails.expiryDate}
              onChangeText={(text) => {
                setCardDetails({ ...cardDetails, expiryDate: text });
              }}
            />
          </View>
          <View style={{ marginBottom: hp(40) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(14),
                fontWeight: "500",
              }}>
              CVV
            </Text>
            <TextInput
              secureTextEntry
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 0.3,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
                fontSize: 16,
                opacity: 0.6,
              }}
              placeholder="Enter your security code behind card"
              keyboardType="number-pad"
              returnKeyType="done"
              maxLength={3}
              value={"" + cardDetails.cvv}
              onChangeText={(_cvv) =>
                setCardDetails({ ...cardDetails, cvv: _cvv })
              }
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}>
          <CancelButtonWithUnderline
            title="Scan Card instead"
            color={Colors.general.grey}
            onPressButton={() => navigation.navigate("ScanCard")}
            style={{ marginBottom: hp(10) }}
          />

          <Button
            title="Continue"
            onPressButton={() => {
              if (cardDetails) {
                console.log(cardDetails);
                navigation.navigate("StatusScreen", {
                  status: "Successful",
                  statusIcon: "Success",
                  statusMessage:
                    "Your card has been successfully added to your Aza",
                  navigateTo: navigateBackTo,
                });
              } else {
              }
            }}
            styleText={{}}
            style={[{}]}
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

export default AddNewCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: hp(20),
  },
});
