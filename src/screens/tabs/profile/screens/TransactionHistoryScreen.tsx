import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
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

const TransactionHistoryScreen = ({
  navigation,
}: CommonScreenProps<"TransactionHistory">) => {
  const colorScheme = useColorScheme();
  const [ModalVisible, setModalVisible] = useState(false);

  const { recentTransactions } = useAppSelector(selectUser);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          Transaction History
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      headerRight: () => (
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
      ),
    });
  }, []);

  return (
    <>
      <SpacerWrapper>
        <View style={[styles.container]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {recentTransactions.data.map(
              ({ dateOfTransactions, transactions }, i) => (
                <SegmentedTransactionView
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
