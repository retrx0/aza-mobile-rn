import React, { useLayoutEffect, useState } from "react";
import { StyleSheet } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { TextInput } from "../../../../theme/Themed";
import { View, Text } from "../../../../theme/Themed";

import Button from "../../../../components/buttons/Button";

import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
import { selectUser } from "../../../../redux/slice/userSlice";

const AddBankAccountScreen = ({
  navigation,
  route,
}: CommonScreenProps<"AddBankAccount">) => {
  const [accountNumber, setAccountNumber] = useState("");

  const insets = useSafeAreaInsets();

  const { bankName, screenType, logoUrl, bankCode, id } = route.params;
  const selectedTheme = useAppSelector(selectAppTheme);
  const { fullName } = useAppSelector(selectUser);
  const appTheme = getAppTheme(selectedTheme);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
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
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(15) }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              marginVertical: hp(30),
              marginLeft: hp(5),
              fontWeight: "500",
              marginTop: hp(30),
            }}
          >
            Add your bank account to receive withdrawals from your Aza account
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
                marginLeft: hp(5),
              }}
            >
              Account Number
            </Text>
            <TextInput
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              placeholderTextColor={Colors[appTheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginTop: hp(5),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",

                marginLeft: hp(5),
              }}
              placeholder="Enter your account number"
              keyboardType="number-pad"
              returnKeyType="done"
              value={accountNumber}
              onChangeText={(text) => setAccountNumber(text)}
              maxLength={10}
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Continue"
            disabled={accountNumber.length < 10}
            onPressButton={() =>
              navigation.navigate("AddBankAccountConfirmation", {
                accountName: fullName,
                accountNumber,
                bankName: bankName,
                id,
                bankCode,
                screenType,
                logoUrl,
              })
            }
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
