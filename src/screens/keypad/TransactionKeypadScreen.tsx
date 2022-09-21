import React, { useLayoutEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { Text, TextInput, View } from "../../components/Themed";
import VirtualKeyboard from "../../components/input/VirtualKeyboard";
import Button from "../../components/buttons/Button";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import { CloseCircleLargeIcon, NairaLargeIcon } from "../../../assets/svg";
import { numberWithCommas } from "../../common/util/NumberUtils";

const TransactionKeypadScreen = ({
  navigation,
  route,
}: CommonScreenProps<"TransactionKeypad">) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [openModal, setModalOpen] = useState(false);

  const colorScheme = useColorScheme();

  const { headerTitle, openDescriptionModal } = route.params;

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
            Chiazondu Joseph
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
                  : Colors[colorScheme].mainText
              }
            />
            <Text
              style={{
                color: !amount
                  ? Colors[colorScheme].secondaryText
                  : Colors[colorScheme].mainText,
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
              {"\u20A6"} 10,239,290.00
            </Text>
          </View>
        </View>
        <VirtualKeyboard value={amount} setValue={setAmount} />
        <Button
          title="Continue"
          disabled={!amount}
          onPressButton={() => {
            openDescriptionModal && setModalOpen(true);
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
      <Modal
        isVisible={openModal}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "android" ? -900 : 0}
        >
          <TouchableOpacity
            onPress={() => setModalOpen(false)}
            style={{
              backgroundColor: "transparent",
              alignItems: "flex-end",
              marginBottom: 20,
              marginRight: 15,
            }}
          >
            <CloseCircleLargeIcon
              color={Colors[colorScheme].backgroundSecondary}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: Colors[colorScheme].backgroundSecondary,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingHorizontal: 15,
              paddingTop: 20,
              paddingBottom: 50,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.mainText}
              style={{
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: 16,
              }}
            >
              Description
            </Text>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.mainText}
              style={{
                marginTop: 10,
                fontSize: 14,
              }}
            >
              You can add a note to this transaction
            </Text>
            <TextInput
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              placeholder="Description (optional)"
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={{
                backgroundColor: "transparent",
                fontFamily: "Euclid-Circular-A",
                paddingBottom: 5,
                marginVertical: hp(35),
                borderBottomWidth: 1,
                borderBottomColor: Colors[colorScheme].separator,
              }}
              onChangeText={(e) => setDescription(e)}
              value={description}
            />
            <Button
              title="Continue"
              onPressButton={() => {
                setModalOpen(false);
                navigation.navigate("SendMoneyConfirmation");
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
        </KeyboardAvoidingView>
      </Modal>
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
