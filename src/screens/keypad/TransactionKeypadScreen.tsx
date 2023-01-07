import React, { useLayoutEffect, useState } from "react";
import { Image } from "react-native";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { View, Text } from "../../theme/Themed";
import VirtualKeyboard from "../../components/input/VirtualKeyboard";
import Button from "../../components/buttons/Button";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import { NairaLargeIcon } from "../../../assets/svg";
import { numberWithCommas } from "../../common/util/NumberUtils";

import { useAppDispatch, useAppSelector } from "../../redux";
import { selectUser } from "../../redux/slice/userSlice";
import { getDefaultPictureUrl } from "../../common/util/AppUtil";
import transactionSlice, {
  setTransaction,
  setTransactionBeneficiary,
} from "../../redux/slice/transactionSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { NAIRA_UNICODE } from "../../constants/AppConstants";
import { NigeriaFlag } from "../../../assets/images";
import { getAppTheme } from "../../theme";
import { selectAppTheme } from "../../redux/slice/themeSlice";

const TransactionKeypadScreen = ({
  navigation,
  route,
}: CommonScreenProps<"TransactionKeypad">) => {
  const [amount, setAmount] = useState("");
  const insets = useSafeAreaInsets();

  const user = useAppSelector(selectUser);

  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  const { headerTitle, transactionType } = route.params;
  const { beneficiary, type } = transactionType;

  const normalTransaction = type === "normal";
  const recurringTransaction = type === "recurring";

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
          }}
        >
          {headerTitle}
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

  const validateTransaction = () => {
    // TODO check if normal transaction is withdraw or deposit which only needs to navigate to status screen with no modal opening
    if (normalTransaction) {
      // This checks if the transactions are send or request money which have optional description message

      switch (transactionType.transaction) {
        case "deposit":
          console.log("deposit");
          break;
        case "request":
          console.log("request");
          dispatch(
            setTransaction({
              amount: Number(amount),
              beneficiary: beneficiary,
              description: "",
              transferType: "request",
            })
          );
          navigation.navigate("RequestMoneyConfirmation");
          break;
        case "send":
          dispatch(
            setTransaction({
              amount: Number(amount),
              beneficiary: beneficiary,
              description: "",
              transferType: "send",
            })
          );
          navigation.navigate("SendMoneyConfirmation");
          break;
        case "withdraw":
          dispatch(
            setTransaction({
              amount: Number(amount),
              beneficiary: beneficiary,
              description: "",
              transferType: "withdraw",
            })
          );
          navigation.navigate("StatusScreen", {
            status: "Successful",
            statusIcon: "Success",
            //TODO update message to accept JSX
            statusMessage: "Your withdrawal was successful",
            navigateTo: "CloseAccount",
          });
          break;
        case "withdraw":
          console.log("withdrawing");
          break;
      }

      //}else if(deposit){

      //}

      // transactionType.openDescriptionModal && setDescModalOpen(true);
    } else {
      // TODO create and pass required params

      navigation.navigate("RecurringTransferConfirmation", {
        amount,
        beneficiary: beneficiary,
        day: transactionType.day,
        period: transactionType.period,
      });
    }
  };

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ alignItems: "center" }}>
          {normalTransaction ? (
            transactionType.transaction === "deposit" ? (
              <></>
            ) : (
              <Image
                style={{ borderRadius: 50, width: 50, height: 50 }}
                source={{
                  uri: getDefaultPictureUrl({
                    firstName: beneficiary.fullName,
                    lastName: beneficiary.lastName,
                    scheme: appTheme,
                    pictureUrl: beneficiary.pictureUrl,
                  }),
                }}
              />
            )
          ) : (
            <></>
          )}
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: hp(16),
              marginTop: hp(15),
              marginBottom: hp(15),
            }}
          >
            {beneficiary.fullName}
          </Text>
          <View
            style={[
              CommonStyles.row,
              {
                marginVertical: 10,
                paddingHorizontal: 15,
                paddingVertical: hp(8),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                marginBottom: hp(20),
              },
            ]}
          >
            <Text
              lightColor={Colors.general.darkGrey}
              darkColor={"#CCCCCC"}
              style={{ fontSize: 12 }}
            >
              Nigerian Naira
            </Text>
            <Image
              style={{
                width: 15,
                height: 15,
                marginHorizontal: 5,
                resizeMode: "cover",
              }}
              source={NigeriaFlag}
            />
            <Text
              lightColor={Colors.general.darkGrey}
              darkColor={"#CCCCCC"}
              style={{ fontSize: 12 }}
            >
              NGN
            </Text>
          </View>
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
                fontSize: hp(36),
                marginVertical: hp(10),
              }}
            >
              {!amount && "0"} {numberWithCommas(amount)}
            </Text>
          </View>
          <View style={[CommonStyles.row]}>
            <Text
              style={{
                fontSize: hp(14),
                fontWeight: "400",
                marginVertical: hp(10),
              }}
            >
              Aza Balance:
            </Text>
            <Text
              style={{
                marginLeft: 3,
                fontSize: hp(14),
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontWeight: "600",
              }}
            >
              {NAIRA_UNICODE}
              {numberWithCommas(user.azaBalance)}
            </Text>
          </View>
        </View>
        <VirtualKeyboard value={amount} setValue={setAmount} maxLength={9} />
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Continue"
            disabled={
              !amount ||
              (normalTransaction
                ? transactionType.transaction !== "deposit"
                  ? Number(amount) > user.azaBalance
                  : false
                : false)
            }
            onPressButton={validateTransaction}
            styleText={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(14),
            }}
            style={{}}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default TransactionKeypadScreen;
