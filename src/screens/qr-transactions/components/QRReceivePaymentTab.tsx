import React, { useState } from "react";

import VirtualKeyboard from "../../../components/input/VirtualKeyboard";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import DescriptionModal from "../../keypad/modal/DescriptionModal";

import { hp } from "../../../common/util/LayoutUtil";
import CommonStyles from "../../../common/styles/CommonStyles";
import { numberWithCommas } from "../../../common/util/NumberUtils";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { RootStackScreenProps } from "../../../../types";

import { NairaLargeIcon } from "../../../../assets/svg";
import { useAppDispatch, useAppSelector } from "../../../redux";
import { setTransaction } from "../../../redux/slice/transactionSlice";
import userSlice, { selectUser } from "../../../redux/slice/userSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SpacerWrapper from "../../../common/util/SpacerWrapper";

const QRReceivePaymentTab = ({
  navigation,
}: RootStackScreenProps<"QRTransactions">) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [isDescModalVisible, setDescModalVisible] = useState(false);

  const colorScheme = useColorScheme();

  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
          }}>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.secondaryText}
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(14),
              marginTop: hp(60),
              marginBottom: hp(20),
            }}>
            Enter amount to be paid
          </Text>
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
              }}>
              {!amount && " 0"} {numberWithCommas(amount)}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: hp(60),
            marginBottom: hp(60),
          }}>
          <VirtualKeyboard value={amount} setValue={setAmount} />
        </View>
        <Button
          title="Continue"
          disabled={!amount}
          onPressButton={() => {
            dispatch(
              setTransaction({
                amount: Number(amount),
                beneficairy: {
                  fullName: user.fullName,
                  azaAccountNumber: "" + user.azaAccountNumber,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.emailAddress,
                  phone: user.phoneNumber,
                  pictureUrl: user.pictureUrl,
                },
                transferType: "request",
                description: description,
              })
            );
            setDescModalVisible(true);
          }}
          styleText={{
            color: Colors[colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
          style={{
            marginBottom: "auto",
            backgroundColor: Colors[colorScheme].button,
          }}
        />
      </View>
      <DescriptionModal
        description={description}
        navigation={navigation}
        setDescription={setDescription}
        setModalVisible={setDescModalVisible}
        // TODO pass proper type for qr transactions
        transactionType={null}
        visible={isDescModalVisible}
      />
    </SpacerWrapper>
  );
};

export default QRReceivePaymentTab;
