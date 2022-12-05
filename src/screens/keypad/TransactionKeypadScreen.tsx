import React, { useLayoutEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { Text, View } from "../../components/Themed";
import VirtualKeyboard from "../../components/input/VirtualKeyboard";
import Button from "../../components/buttons/Button";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import { NairaLargeIcon } from "../../../assets/svg";
import { numberWithCommas } from "../../common/util/NumberUtils";

import { useAppDispatch, useAppSelector } from "../../redux";
import { selectUser } from "../../redux/slice/userSlice";
import { getInitialsAvatar } from "../../common/util/AppUtil";
import DescriptionModal from "./modal/DescriptionModal";
import transactionSlice, {
  setTransaction,
} from "../../redux/slice/transactionSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SpacerWrapper from "../../common/util/SpacerWrapper";

const TransactionKeypadScreen = ({
  navigation,
  route,
}: CommonScreenProps<"TransactionKeypad">) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [descModal, setDescModalOpen] = useState(true);
  const insets = useSafeAreaInsets();

  const user = useAppSelector(selectUser);

  const colorScheme = useColorScheme();

  const { headerTitle, transactionType } = route.params;
  const { beneficiary, type } = transactionType;

  const normalTransaction = type === "normal";
  const recurringTransaction = type === "recurring";

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
          }}>
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

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ borderRadius: 50, width: 50, height: 50 }}
            source={{
              uri:
                beneficiary.pictureUrl && beneficiary.pictureUrl !== ""
                  ? beneficiary.pictureUrl
                  : getInitialsAvatar({
                      firstName: beneficiary.fullName,
                      lastName: beneficiary.lastName,
                      scheme: colorScheme,
                    }),
            }}
          />
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: hp(16),
              marginTop: hp(10),
              marginBottom: hp(14),
            }}>
            {beneficiary.fullName}
          </Text>
          <View
            lightColor="#eaeaec"
            darkColor="#1D1D20"
            style={[
              CommonStyles.row,
              {
                // marginVertical: 10,
                paddingHorizontal: 15,
                paddingVertical: hp(10),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                // marginBottom: hp(40),
              },
            ]}>
            <Text
              lightColor={Colors.general.darkGrey}
              darkColor={"#CCCCCC"}
              style={{ fontSize: 12 }}>
              Nigerian Naira
            </Text>
            <Image
              style={{
                width: 15,
                height: 15,
                marginHorizontal: 5,
                resizeMode: "cover",
              }}
              source={require("../../../assets/images/icons/NigerianFlag.png")}
            />
            <Text
              lightColor={Colors.general.darkGrey}
              darkColor={"#CCCCCC"}
              style={{ fontSize: 12 }}>
              NGN
            </Text>
          </View>
          <View style={[CommonStyles.row]}>
            <NairaLargeIcon
              color={
                !amount
                  ? Colors[colorScheme].secondaryText
                  : colorScheme === "dark"
                  ? Colors.dark.mainText
                  : Colors.light.text
              }
            />
            <Text
              style={{
                color: !amount
                  ? Colors[colorScheme].secondaryText
                  : colorScheme === "dark"
                  ? Colors.dark.mainText
                  : Colors.light.text,
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: 36,
                marginVertical: 15,
              }}>
              {!amount && "0"} {numberWithCommas(amount)}
            </Text>
          </View>
          <View style={[CommonStyles.row]}>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.secondaryText}
              style={{
                fontSize: hp(14),
                fontWeight: "400",
                marginVertical: 15,
              }}>
              Aza Balance:
            </Text>
            <Text
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              style={{
                marginLeft: 3,
                fontSize: hp(14),
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontWeight: "600",
              }}>
              {"\u20A6"}
              {user.azaBalance}
            </Text>
          </View>
        </View>
        <VirtualKeyboard value={amount} setValue={setAmount} />
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}>
          <Button
            title="Continue"
            disabled={!amount}
            onPressButton={() => {
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
                        ...{},
                        amount: Number(amount),
                        beneficairy: beneficiary,
                        description: description,
                        transferType: "request",
                      })
                    );
                    navigation.navigate("RequestMoneyConfirmation");
                    break;
                  case "send":
                    dispatch(
                      setTransaction({
                        amount: Number(amount),
                        beneficairy: beneficiary,
                        description: description,
                        transferType: "send",
                      })
                    );
                    navigation.navigate("SendMoneyConfirmation");
                    break;
                  case "withdraw":
                    console.log("withdrawing");
                    break;
                }

                //}else if(deposit){

                //}

                transactionType.openDescriptionModal && setDescModalOpen(true);
              } else {
                // TODO create and pass required params
                navigation.navigate("RecurringTransferConfirmation");
              }
            }}
            styleText={{
              color: Colors[colorScheme].buttonText,
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(14),
            }}
            style={{
              // marginTop: 30,
              backgroundColor: Colors[colorScheme].button,
            }}
          />
        </View>
      </View>
      {/* description modal */}
      <DescriptionModal
        visible={descModal}
        setModalVisible={setDescModalOpen}
        description={description}
        setDescription={setDescription}
        navigation={navigation}
        normalTransaction={normalTransaction}
        recurringTransaction={recurringTransaction}
        transactionType={transactionType}
        // transactionParams={description}
      />
    </SpacerWrapper>
  );
};

export default TransactionKeypadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(10),
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
