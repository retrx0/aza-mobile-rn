import { useState } from "react";
import { TouchableOpacity } from "react-native";

import {
  DepositIcon,
  TransferIcon,
  WithdrawIcon,
} from "../../../../../assets/svg";
import {
  RootStackScreenProps,
  RootTabScreenProps,
} from "../../../../types/types.navigation";
import { hp } from "../../../../common/util/LayoutUtil";

import CustomBottomSheet from "../../../../components/bottomsheet/CustomBottomSheet";
import { View as View, Text as Text } from "../../../../theme/Themed";

import Colors from "../../../../constants/Colors";
import { useBottomSheetType } from "../hooks/useBottomSheetType";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";

const TransactionOptions = ({
  navigation,
  route,
}: RootStackScreenProps<"Root">) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const transferBottomSheetListItems = useBottomSheetType("transfer", {
    navigation,
    route,
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginTop: hp(20),
          marginBottom: hp(10),
          justifyContent: "space-between",
          paddingHorizontal: hp(10),
        }}>
        <TransactionOptionButton
          title="Withdraw"
          onPress={() =>
            navigation.navigate("Common", {
              screen: "WithdrawDepositTabs",
              params: {
                tabToView: "withdraw",
              },
            })
          }
          icon={<WithdrawIcon size={43} color={"#FF361A"} />}
        />

        <TransactionOptionButton
          title="Transfer"
          onPress={toggleModal}
          icon={<TransferIcon size={43} color={Colors[appTheme].text} />}
        />
        <TransactionOptionButton
          title="Deposit"
          onPress={() =>
            navigation.navigate("Common", {
              screen: "WithdrawDepositTabs",
              params: {
                tabToView: "deposit",
              },
            })
          }
          icon={<DepositIcon color="#2AD168" size={43} />}
        />
      </View>
      <CustomBottomSheet
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        listItems={transferBottomSheetListItems}
      />
    </>
  );
};

const TransactionOptionButton = ({
  title,
  onPress,
  icon,
}: {
  title: string;
  onPress: () => void;
  icon: JSX.Element;
}) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity onPress={onPress}>
        <View style={{ alignSelf: "center" }}>{icon}</View>

        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.general.lightGrey}
          style={{
            fontSize: hp(17),
            fontFamily: "Euclid-Circular-A-Medium",
            textAlign: "center",
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionOptions;
