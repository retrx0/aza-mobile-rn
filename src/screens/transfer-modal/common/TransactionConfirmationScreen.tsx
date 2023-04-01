import React, { useState } from "react";
import { Image } from "react-native";

import { TextInput, View, Text } from "../../../theme/Themed";
import Button from "../../../components/buttons/Button";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../../constants/Colors";
import { hp } from "../../../common/util/LayoutUtil";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../common/navigation/types";
import { useAppDispatch, useAppSelector } from "../../../redux";
import {
  selectTransaction,
  setTransactionDescription,
  ITransactionState,
} from "../../../redux/slice/transactionSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  NAIRA_CCY_CODE,
  NAIRA_UNICODE,
  PSB_BANK_CODE,
} from "../../../constants/AppConstants";
import { selectAppTheme } from "../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../theme";
import { selectUser } from "../../../redux/slice/userSlice";
import { transferToAzaUserAPI } from "../../../api/vfd";
import { requestMoneyAPI } from "../../../api/money-request";
import useNavigationHeader from "../../../hooks/useNavigationHeader";
import { payAzaUserAPI } from "../../../api/payment";
import { toastError } from "../../../common/util/ToastUtil";
import ActivityModal from "../../../components/modal/ActivityModal";

type TransactionScreenProps = {
  confirmationType: "send" | "request";
};

const TransactionConfirmationScreen = ({
  navigation,
  route,
  confirmationType,
}: CommonScreenProps<"Common"> & TransactionScreenProps) => {
  const insets = useSafeAreaInsets();
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  const { beneficiary, amount, transferType, description } =
    useAppSelector(selectTransaction);

  const { bvnVerified, azaAccountNumber, bvnNumber } =
    useAppSelector(selectUser);

  const [transDescription, setTransDescription] = useState(description);

  const [screenLoading, setScreenLoading] = useState(false);

  const dispatch = useAppDispatch();

  useNavigationHeader(navigation, "Confirmation");

  const makeTransaction = async () => {
    // do some validation

    if (!bvnVerified) {
      navigation.navigate("BvnVerification", {
        onVerifyNavigateBackTo:
          confirmationType === "send"
            ? "SendMoneyConfirmation"
            : "RequestMoneyConfirmation",
      });
    } else {
      dispatch(setTransactionDescription("" + transDescription));

      //make transaction
      let transactionCompleted = false;

      if (confirmationType === "send") {
        setScreenLoading(true);
        payAzaUserAPI({
          sourceAccount: azaAccountNumber,
          destinationAccount: beneficiary.azaAccountNumber,
          amount,
          transactionPin: "1111",
          description: transDescription ? transDescription : "Aza transaction",
          currency: NAIRA_CCY_CODE,
          destinationBankCode: PSB_BANK_CODE,
        })
          .then((res) => {
            transactionCompleted = true;
            setScreenLoading(false);
            navigateToNextScreen();
          })
          .catch(() => {
            setScreenLoading(false);
            toastError("There was a problem completing transaction!");
          });
      } else {
        requestMoneyAPI({
          amount: amount,
          decription: transDescription ? transDescription : "",
          initiatorAccountNumber: "" + azaAccountNumber,
          receipientAccountNumber: beneficiary.azaAccountNumber,
          recepientPhoneNumber: beneficiary.phone ? beneficiary.phone : "",
        })
          .then(() => {
            transactionCompleted = true;
            navigateToNextScreen();
          })
          .catch(() => {});
        toastError("There was a problem making the request!");
      }
    }

    const navigateToNextScreen = () => {
      navigation.navigate("StatusScreen", {
        status:
          confirmationType === "request"
            ? "Successful"
            : "Your transaction was \n successful",
        statusIcon: "Success",
        statusMessage: `You have successfully ${
          confirmationType === "request" ? "requested" : "sent"
        } ${NAIRA_UNICODE} ${amount} ${
          confirmationType === "request" ? "from" : "to"
        } ${beneficiary.fullName}`,
        statusMessage2:
          confirmationType === "send"
            ? "You can perform this transaction automatically by giving a Recurring Transfer order"
            : "",
        receiptDetails:
          confirmationType === "send"
            ? {
                amount: String(amount),
                beneficiaryName: beneficiary.fullName,
              }
            : undefined,
        recurringTransferBeneficiary:
          confirmationType === "send" ? beneficiary : undefined,
        navigateTo: "Home",
        // to disallow swoosh sound in request screen
        screenType: confirmationType === "send" ? "transaction" : undefined,
      });
    };
  };

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: hp(16),
              marginTop: hp(15),
              fontWeight: "500",
              marginBottom: hp(50),
            }}
          >
            Kindly confirm the details of this transaction
          </Text>
          <View style={{ marginBottom: hp(30), position: "relative" }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}
            >
              To
            </Text>
            <TextInput
              placeholderTextColor={Colors[appTheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
                fontSize: hp(16),
              }}
              showSoftInputOnFocus={false}
              value={beneficiary.fullName}
              editable={false}
            />
            <Image
              source={{
                uri: beneficiary.pictureUrl,
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
          <View style={{ marginBottom: hp(30) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}
            >
              Amount
            </Text>
            <View
              style={[
                CommonStyles.row,
                {
                  marginTop: hp(15),
                  alignSelf: "stretch",
                  position: "relative",
                },
              ]}
            >
              {/* <Text
                style={{
                  fontSize: hp(16),
                  fontFamily: "Euclid-Circular-A-Medium",
                  paddingBottom: 5,
                }}>
                {NAIRA_UNICODE}
              </Text> */}
              <TextInput
                placeholderTextColor={Colors[appTheme].secondaryText}
                style={{
                  flex: 1,
                  backgroundColor: "transparent",
                  paddingBottom: 5,
                  borderBottomWidth: 1,
                  borderBottomColor:
                    appTheme === "dark" ? "#262626" : "#EAEAEC",

                  fontSize: hp(16),
                  fontFamily: "Euclid-Circular-A-Medium",
                }}
                value={NAIRA_UNICODE + "" + amount}
                showSoftInputOnFocus={false}
                editable={false}
              />
            </View>
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                fontWeight: "500",
              }}
            >
              Description
            </Text>
            <TextInput
              placeholderTextColor={Colors[appTheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A-Medium",
                paddingBottom: 5,
                marginTop: hp(15),
                borderBottomWidth: 1,
                borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
                fontSize: hp(16),
              }}
              onChangeText={setTransDescription}
              value={transDescription}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}
      >
        <Button title="Continue" onPressButton={makeTransaction} />
        <CancelButtonWithUnderline
          title="Cancel Transaction"
          color={Colors.general.red}
          styleText={CommonStyles.cancelStyle}
          onPressButton={() => navigation.goBack()}
          style={{ marginTop: 5 }}
        />
      </View>
      <ActivityModal loading={screenLoading} />
    </SpacerWrapper>
  );
};

export default TransactionConfirmationScreen;
