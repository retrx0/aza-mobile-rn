import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { Text, TextInput, View } from "../../../../components/Themed";
import Button from "../../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../../common/navigation/types";

const AddNewCardScreen = ({ navigation }: CommonScreenProps<"AddNewCard">) => {
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
          }}
        >
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
      <View style={styles.container}>
        <View>
          <Text
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A",
              fontSize: 14,
              marginTop: hp(30),
              marginBottom: hp(40),
            }}
          >
            Add your card details to deposit money to your Aza wallet
          </Text>
          <View style={{ marginBottom: hp(40) }}>
            <Text
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: 14,
              }}
            >
              Card Number
            </Text>
            <TextInput
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors[colorScheme].separator,
              }}
              placeholder="Enter your card number"
            />
          </View>
          <View style={{ marginBottom: hp(40) }}>
            <Text
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: 14,
              }}
            >
              Expiry Date
            </Text>
            <TextInput
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors[colorScheme].separator,
              }}
              placeholder="MM/YYYY"
            />
          </View>
          <View style={{ marginBottom: hp(40) }}>
            <Text
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: 14,
              }}
            >
              CVV
            </Text>
            <TextInput
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors[colorScheme].separator,
              }}
              placeholder="Enter your security code behind card"
            />
          </View>
        </View>
        <View
          style={[CommonStyles.col, { marginBottom: hp(50), width: "100%" }]}
        >
          <CancelButtonWithUnderline
            title="Scan Card instead"
            color={Colors[colorScheme].mainText}
            onPressButton={() => navigation.navigate("ScanCard")}
          />

          <Button
            title="Continue"
            onPressButton={() =>
              navigation.navigate("StatusScreen", {
                status: "Successful",
                statusIcon: "Success",
                statusMessage:
                  "Your card has been successfully added to your Aza",
                navigateTo: "DebitCreditCards",
              })
            }
            styleText={{
              color: Colors[colorScheme].buttonText,
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
            }}
            style={{
              marginVertical: hp(25),
              backgroundColor: Colors[colorScheme].button,
            }}
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
    paddingHorizontal: 15,
  },
});
