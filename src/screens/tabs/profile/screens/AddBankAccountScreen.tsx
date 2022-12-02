import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { Text, TextInput, View } from "../../../../components/Themed";
import Button from "../../../../components/buttons/Button";

import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AddBankAccountScreen = ({
  navigation,
  route,
}: CommonScreenProps<"AddBankAccount">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const { bankName, screenType } = route.params;

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
          Add Bank Account
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
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              marginVertical: hp(30),
              marginLeft: hp(5),
              fontWeight: "500",
              marginTop: hp(30),
            }}>
            Add your bank account to receive withdrawals from your Aza account
          </Text>
          <View>
            <Text
              // lightColor={Colors.light.mainText}
              // darkColor={Colors.dark.mainText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
                marginLeft: hp(5),
              }}>
              Account Number
            </Text>
            <TextInput
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(5),
                borderBottomWidth: 1,
                borderBottomColor: Colors[colorScheme].separator,
                marginLeft: hp(5),
              }}
              placeholder="Enter your account number"
              keyboardType="number-pad"
              returnKeyType="done"
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}>
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.navigate("AddBankAccountConfirmation", {
                accountName: "Abdullah Gumi",
                accountNumber: "0000100010",
                bankName: bankName,
                screenType,
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
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AddBankAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
