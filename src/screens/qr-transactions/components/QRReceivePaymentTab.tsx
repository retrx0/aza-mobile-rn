import React, { useState } from "react";

import VirtualKeyboard from "../../../components/input/VirtualKeyboard";
import Button from "../../../components/buttons/Button";
import { View as View, Text as Text } from "../../../theme/Themed";

import { hp } from "../../../common/util/LayoutUtil";
import CommonStyles from "../../../common/styles/CommonStyles";
import { numberWithCommas } from "../../../common/util/NumberUtils";
import Colors from "../../../constants/Colors";
import { RootStackScreenProps } from "../../../types/types.navigation";

import { NairaLargeIcon } from "../../../../assets/svg";
import { useAppDispatch, useAppSelector } from "../../../redux";
import {
  setQRPaymentAmount,
  setTransaction,
  setTransactionAmount,
} from "../../../redux/slice/transactionSlice";
import { selectUser } from "../../../redux/slice/userSlice";
import { getAppTheme } from "../../../theme";
import { selectAppTheme } from "../../../redux/slice/themeSlice";

const QRReceivePaymentTab = ({
  navigation,
}: RootStackScreenProps<"QRReceivePayment">) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <>
      <View style={[CommonStyles.vaultcontainer, { marginTop: 0 }]}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.secondaryText}
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(14),
              marginTop: hp(40),
              marginBottom: hp(20),
            }}
          >
            Enter amount to be paid
          </Text>
          <View style={[CommonStyles.row]}>
            <NairaLargeIcon
              color={
                !amount
                  ? Colors[appTheme].secondaryText
                  : appTheme === "dark"
                  ? Colors.dark.mainText
                  : Colors.light.text
              }
            />
            <Text
              style={{
                color: !amount
                  ? Colors[appTheme].secondaryText
                  : appTheme === "dark"
                  ? Colors.dark.mainText
                  : Colors.light.text,
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: 36,
              }}
            >
              {!amount && " 0"} {numberWithCommas(amount)}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: hp(40),
            marginBottom: hp(30),
          }}
        >
          <VirtualKeyboard value={amount} setValue={setAmount} maxLength={9} />
        </View>
        <Button
          title="Continue"
          disabled={!amount}
          onPressButton={() => {
            dispatch(
              //   setTransaction({
              //     amount: Number(amount),
              //     beneficiary: {
              //       fullName: user.fullName,
              //       azaAccountNumber: "" + user.azaAccountNumber,
              //       firstName: user.firstName,
              //       lastName: user.lastName,
              //       email: user.emailAddress,
              //       phone: user.phoneNumber,
              //       pictureUrl: user.pictureUrl,
              //     },
              //     transferType: "request",
              //     description: description,
              //   })
              // );
              setTransactionAmount(Number(amount))
            );
            dispatch(setQRPaymentAmount(Number(amount)));
            navigation.goBack();
          }}
          styleText={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
        />
      </View>
    </>
  );
};

export default QRReceivePaymentTab;
