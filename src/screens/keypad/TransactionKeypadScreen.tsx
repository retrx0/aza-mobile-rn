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
import { UserData } from "../../constants/userData";

import DescriptionModal from "./modal/DescriptionModal";

const TransactionKeypadScreen = ({
  navigation,
  route,
}: CommonScreenProps<"TransactionKeypad">) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [descModal, setDescModalOpen] = useState(false);

  const colorScheme = useColorScheme();

  const { headerTitle, transactionType } = route.params;

  const normalTransaction = transactionType.type === "normal";
  const recurringTransaction = transactionType.type === "recurring";

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
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

  return (
    <>
      <View style={[styles.container]}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ borderRadius: 50, width: 50, height: 50 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
            }}
          />
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: 14,
              marginTop: 15,
            }}
          >
            {UserData.userFullName}
          </Text>
          <View
            lightColor="#eaeaec"
            darkColor="#1D1D20"
            style={[
              CommonStyles.row,
              {
                marginVertical: 20,
                paddingHorizontal: 15,
                paddingVertical: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
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
                marginHorizontal: 10,
                resizeMode: "cover",
              }}
              source={require("../../../assets/images/icons/NigerianFlag.png")}
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
              }}
            >
              {!amount && " 0"} {numberWithCommas(amount)}
            </Text>
          </View>
          <View style={[CommonStyles.row]}>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.secondaryText}
              style={{
                fontSize: 12,
              }}
            >
              Aza Balance:
            </Text>
            <Text
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              style={{
                marginLeft: 3,
                fontSize: 12,
                fontFamily: "Euclid-Circular-A-Semi-Bold",
              }}
            >
              {"\u20A6"} {UserData.azaBalance}
            </Text>
          </View>
        </View>
        <VirtualKeyboard value={amount} setValue={setAmount} />
        <Button
          title="Continue"
          disabled={!amount}
          onPressButton={() => {
            // TODO check if normal transaction is withdraw or deposit which only needs to navigate to status screen with no modal opening
            if (normalTransaction) {
              // This checks if the transactions are send or request money which have optional description message

              //if(withraw){

              //}else if(deposit){

              //}
              console.log("first");
              transactionType.openDescriptionModal && setDescModalOpen(true);
            } else {
              console.log("Hh");
              // TODO create and pass required params
              navigation.navigate("RecurringTransferConfirmation");
            }
          }}
          styleText={{
            color: Colors[colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
          style={{
            marginVertical: 10,
            width: "100%",
            backgroundColor: Colors[colorScheme].button,
          }}
        />
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
        // transactionParams={}
      />
    </>
  );
};

export default TransactionKeypadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
