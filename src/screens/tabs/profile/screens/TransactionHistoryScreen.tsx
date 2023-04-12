import React, { useState } from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import { View, Text } from "../../../../theme/Themed";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { DownLoadIcon } from "../../../../../assets/svg";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import TransactionModal from "./TransactionHistroyModal";
import { useAppSelector } from "../../../../redux";
import { selectUser } from "../../../../redux/slice/userSlice";
import SegmentedTransactionView from "./SegmentedTransactionView";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";
import { getAppTheme } from "../../../../theme";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { RootTabScreenProps } from "../../../../types/types.navigation";

const TransactionHistoryScreen = ({
  navigation,
  route,
}: RootTabScreenProps<"Home"> & CommonScreenProps<"TransactionHistory">) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const [ModalVisible, setModalVisible] = useState(false);

  const { recentTransactions } = useAppSelector(selectUser);

  useNavigationHeader(
    navigation,
    "Transaction History",
    <TouchableOpacity
      style={[CommonStyles.col, { alignItems: "center", marginTop: 2 }]}
      onPress={() => setModalVisible(true)}>
      <DownLoadIcon color={Colors[appTheme].secondaryText} size={16} />
      <Text
        style={{
          color: Colors[appTheme].secondaryText,
          fontSize: 14,
          fontFamily: "Euclid-Circular-A-Semi-Bold",
          textAlign: "center",
        }}>
        Download
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <SpacerWrapper>
        <View style={[styles.container]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {recentTransactions.data.map(({ key, transactions }, i) => (
              <SegmentedTransactionView
                key={i}
                dateOfTransactions={key}
                transactions={transactions}
                navigation={{ navigation, route }}
              />
            ))}
          </ScrollView>
        </View>
      </SpacerWrapper>
      <TransactionModal
        visible={ModalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
    </>
  );
};

export default TransactionHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
