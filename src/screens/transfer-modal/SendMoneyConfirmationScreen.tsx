import React, { useLayoutEffect } from "react";
import { StyleSheet, Image } from "react-native";

import BackButton from "../../components/buttons/BackButton";
import { Text, TextInput, View } from "../../components/Themed";
import Button from "../../components/buttons/Button";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../common/navigation/types";
import { useAppSelector } from "../../redux";
import { selectTransaction } from "../../redux/slice/transactionSlice";
import { getInitialsAvatar } from "../../common/util/AppUtil";
import { Input } from "../../components/input/input";

const SendMoneyConfirmationScreen = ({
  navigation,
}: CommonScreenProps<"SendMoneyConfirmation">) => {
  const colorScheme = useColorScheme();

  const transferObject = useAppSelector(selectTransaction);

  console.log(transferObject);

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
          }}>
          Confirmation
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
            // lightColor={Colors.light.mainText}
            // darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: hp(16),
              marginVertical: hp(30),
            }}>
            Kindly confirm the details of this transaction
          </Text>
          <View style={{ marginBottom: hp(30), position: "relative" }}>
            <Text
              // lightColor={Colors.light.secondaryText}
              // darkColor={Colors.dark.secondaryText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}>
              To
            </Text>
            <TextInput
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.mainText}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: Colors[colorScheme].separator,
                fontSize: hp(16),
              }}
              showSoftInputOnFocus={false}
              value={transferObject.beneficairy.fullName}
            />
            <Image
              source={{
                uri:
                  transferObject.beneficairy.pictureUrl &&
                  transferObject.beneficairy.pictureUrl !== ""
                    ? transferObject.beneficairy.pictureUrl
                    : getInitialsAvatar({
                        firstName: transferObject.beneficairy.firstName!,
                        lastName: transferObject.beneficairy.lastName,
                        scheme: colorScheme,
                      }),
              }}
              style={{
                position: "absolute",
                right: 0,
                bottom: hp(10),
                width: 45,
                height: 45,
                borderRadius: 50,
                backgroundColor: "white",
              }}
            />
          </View>
          <View style={{ marginBottom: 30 }}>
            <Input
              icon={null}
              inputStyle={[
                styles.input,
                {
                  borderBottomColor:
                    colorScheme === "dark" ? "#262626" : "#EAEAEC",
                },
              ]}
              labelStyle={{
                fontFamily: "Euclid-Circular-A",
                fontWeight: "500",
                fontSize: hp(16),
                color: colorScheme === "dark" ? "#999999" : "#000000",
              }}
              label="Amount"
              placeholder={"\u20A60"}
              placeholderTextColor={
                colorScheme === "dark" ? "#E7E9EA" : "#000000"
              }
            />
          </View>
          <View style={{ marginBottom: 30 }}>
            <Input
              icon={null}
              inputStyle={[
                styles.input,
                {
                  borderBottomColor:
                    colorScheme === "dark" ? "#262626" : "#EAEAEC",
                },
              ]}
              labelStyle={{
                fontFamily: "Euclid-Circular-A",
                fontWeight: "500",
                fontSize: hp(16),
                color: colorScheme === "dark" ? "#999999" : "#000000",
              }}
              label="Description"
              placeholder={"Chop life my gee ❤️"}
              placeholderTextColor={
                colorScheme === "dark" ? "#E7E9EA" : "#000000"
              }
            />
          </View>
        </View>
        <View
          style={[CommonStyles.col, { marginBottom: hp(65), width: "100%" }]}>
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.navigate("StatusScreen", {
                status: "Your Transaction was successful",
                statusIcon: "Success",
                statusMessage: "Your money transfer has been successful.",
                statusMessage2:
                  "You can perform this transaction automatically by giving a Recurring Transfer order",
                receiptButton: true,
                setupRecurringTransfer: true,
                navigateTo: "SendMoney",
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
            title="Cancel Transaction"
            color={Colors.general.red}
            styleText={CommonStyles.cancelStyle}
            onPressButton={() => navigation.goBack()}
            style={{ marginTop: 5 }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default SendMoneyConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    fontFamily: "Euclid-Circular-A-Medium",
    fontWeight: "500",
    fontSize: hp(16),
  },
});
