import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Button from "../../../../components/buttons/Button";
import { TextInput } from "../../../../theme/Themed";
import { View, Text } from "../../../../theme/Themed";

import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { toastError } from "../../../../common/util/ToastUtil";

import { useAppDispatch, useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
import { toggleActivityModal } from "../../../../redux/slice/activityModalSlice";

import { verifyBankAccountAPI } from "../../../../api/account";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";
import { selectUser } from "../../../../redux/slice/userSlice";

const AddBankAccountScreen = ({
  navigation,
  route,
}: CommonScreenProps<"AddBankAccount">) => {
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [isVerified, setVerified] = useState(false);

  const insets = useSafeAreaInsets();

  const { bankName, screenType, logoUrl, bankCode, id } = route.params;
  const selectedTheme = useAppSelector(selectAppTheme);
  const { aza9PSBAccountNumber, azaAccountNumber } = useAppSelector(selectUser);
  const appTheme = getAppTheme(selectedTheme);
  const dispatch = useAppDispatch();

  useNavigationHeader(navigation, "Add Bank Account");

  const moveToNextScreen = (accName: string, accNo: string) => {
    navigation.navigate("AddBankAccountConfirmation", {
      accountName: accName,
      accountNumber: accNo,
      bankName: bankName,
      id,
      bankCode,
      screenType,
      logoUrl,
    });
  };

  const verifyAccount = (accNo: string) => {
    dispatch(toggleActivityModal(true));
    verifyBankAccountAPI(bankCode, accNo, aza9PSBAccountNumber)
      .then((res) => {
        dispatch(toggleActivityModal(false));
        if (res) {
          setAccountName(res.data.name);
          setVerified(true);
          moveToNextScreen(res.data.name, accNo);
        } else {
          toastError("Invalid account number");
          setVerified(false);
        }
      })
      .catch(() => {
        setVerified(false);
        dispatch(toggleActivityModal(false));
        toastError("Invalid account number");
      });
  };

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
              onChangeText={(text) => {
                if (text.length === 10) {
                  verifyAccount(text);
                }
                setAccountNumber(text);
              }}
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
            disabled={!isVerified}
            onPressButton={() => moveToNextScreen(accountName, accountNumber)}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AddBankAccountScreen;
