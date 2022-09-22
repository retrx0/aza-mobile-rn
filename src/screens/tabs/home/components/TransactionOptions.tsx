import { useState } from "react";
import { TouchableOpacity } from "react-native";

import {
  DepositIcon,
  TransferIcon,
  WithdrawIcon,
} from "../../../../../assets/svg";
import { RootTabScreenProps } from "../../../../../types";
import CustomBottomSheet from "../../../../components/bottomsheet/CustomBottomSheet";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { useBottomSheetType } from "../hooks/useBottomSheetType";

const TransactionOptions = ({
  navigation,
  route,
}: RootTabScreenProps<"Home">) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const transferBottomSheetListItems = useBottomSheetType("transfer", {
    navigation,
    route,
  });

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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Common", { screen: "WithdrawDepositTabs" })
          }
          style={{ display: "flex", alignItems: "center" }}
        >
          <WithdrawIcon size={40} color="#FF361A" />
          <Text
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            style={{ marginTop: 5, fontSize: 14 }}
          >
            Withdraw
          </Text>
        </TouchableOpacity>

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

        <TouchableOpacity
         onPress={() =>
          navigation.navigate("Common", { screen: "WithdrawDepositTabs"})
        }
         style={{ display: "flex", alignItems: "center" }}>
          <DepositIcon color="#2AD168" size={40} />
          <Text
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            style={{ marginTop: 5, fontSize: 14 }}
          >
            Deposit
          </Text>
        </TouchableOpacity>
      </View>
      <CustomBottomSheet
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        listItems={transferBottomSheetListItems}
      />
    </>
  );
};

export default TransactionOptions;
