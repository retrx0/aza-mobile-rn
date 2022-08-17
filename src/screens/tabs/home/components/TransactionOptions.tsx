import { useState } from "react";
import { TouchableOpacity } from "react-native";

import {
  DepositIcon,
  TransferIcon,
  WithdrawIcon,
} from "../../../../../assets/svg";
import CustomBottomSheet from "../../../../components/bottomsheet/CustomBottomSheet";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { useBottomSheetType } from "../hooks/useBottomSheetType";

export default function TransactionOptions() {
  const [isModalVisible, setModalVisible] = useState(false);
  const transferBottomSheetListItems = useBottomSheetType("transfer");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const colorScheme = useColorScheme();

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
