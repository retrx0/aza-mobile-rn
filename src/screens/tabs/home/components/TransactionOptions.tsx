import { useState } from "react";
import { TouchableOpacity } from "react-native";

import {
  DepositIcon,
  RecurringTransferIcon,
  RequestMoneyIcon,
  SendMoneyIcon,
  TransferIcon,
  WithdrawIcon,
} from "../../../../../assets/svg";
import CustomBottomSheet from "../../../../components/bottomsheet/CustomBottomSheet";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";

export default function TransactionOptions() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const colorScheme = useColorScheme();

  const transferBottomSheetListItems = [
    {
      itemName: "Send Money",
      itemIcon: (
        <SendMoneyIcon size={16} color={Colors[colorScheme].mainText} />
      ),
      onPress: () => console.log("called"),
    },
    {
      itemName: "Request Money",
      itemIcon: (
        <RequestMoneyIcon size={16} color={Colors[colorScheme].mainText} />
      ),
      onPress: () => console.log("called"),
    },
    {
      itemName: "Recurring Transfer",
      itemIcon: (
        <RecurringTransferIcon size={16} color={Colors[colorScheme].mainText} />
      ),
      onPress: () => console.log("called"),
    },
  ];

  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 25,
        }}
      >
        <View style={{ display: "flex", alignItems: "center" }}>
          <WithdrawIcon />
          <Text
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            style={{ marginTop: 5, fontSize: 14 }}
          >
            Withdraw
          </Text>
        </View>

        <TouchableOpacity onPress={toggleModal}>
          <View style={{ display: "flex", alignItems: "center" }}>
            <TransferIcon size={40} color={Colors[colorScheme].text} />
            <Text
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              style={{ marginTop: 5, fontSize: 14 }}
            >
              Transfer
            </Text>
          </View>
        </TouchableOpacity>

        <View style={{ display: "flex", alignItems: "center" }}>
          <DepositIcon />
          <Text
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            style={{ marginTop: 5, fontSize: 14 }}
          >
            Deposit
          </Text>
        </View>
      </View>
      <CustomBottomSheet
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        listItems={transferBottomSheetListItems}
      />
    </>
  );
}
