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

const TransactionHistoryScreen = ({
  navigation,
}: CommonScreenProps<"TransactionHistory">) => {
  const colorScheme = useColorScheme();
  const [ModalVisible, setModalVisible] = useState(false);

  const { recentTransactions } = useAppSelector(selectUser);

  useNavigationHeader(
    navigation,
    "Transaction History",
    <TouchableOpacity
      style={[CommonStyles.col, { alignItems: "center", marginTop: 2 }]}
      onPress={() => setModalVisible(true)}
    >
      <DownLoadIcon color={Colors[colorScheme].secondaryText} size={16} />
      <Text
        style={{
          color: Colors[colorScheme].secondaryText,
          fontSize: 12,
          fontFamily: "Euclid-Circular-A-Semi-Bold",
          textAlign: "center",
        }}
      >
        Download
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <SpacerWrapper>
        <View style={[styles.container]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {recentTransactions.data.map(
              ({ dateOfTransactions, transactions }, i) => (
                <SegmentedTransactionView
                  key={i}
                  dateOfTransactions={dateOfTransactions}
                  transactions={transactions}
                />
              )
            )}
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
