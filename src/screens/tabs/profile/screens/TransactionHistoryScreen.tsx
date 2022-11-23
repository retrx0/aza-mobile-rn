import React, { useLayoutEffect } from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { Text, View } from "../../../../components/Themed";
import TransactionListItem from "../../../../components/ListItem/TransactionListItem";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { DownLoadIcon } from "../../../../../assets/svg";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";

const TransactionHistoryScreen = ({
  navigation,
}: CommonScreenProps<"TransactionHistory">) => {
  const colorScheme = useColorScheme();

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
          }}>
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
          style={[CommonStyles.col, { alignItems: "center", marginTop: 2 }]}>
          <DownLoadIcon color={Colors[colorScheme].secondaryText} size={16} />
          <Text
            style={{
              color: Colors[colorScheme].secondaryText,
              fontSize: 12,
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              textAlign: "center",
            }}>
            Download
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  const transactionHistory = [
    {
      dateOfTransactions: "15 June 2022",
      transactions: [
        {
          id: 1,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
          name: "Adewale Adeyesufu",
          transactionType: "incoming",
          transactionTitle: "Incoming Transfer",
          transactionMessage: "Chop life my gee ",
          amount: "28,000.00",
          date: "4 July 2022 04:26",
        },
        {
          id: 2,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
          name: "Adewale Adeyesufu",
          transactionType: "outgoing",
          transactionTitle: "Transfer to Bank",
          transactionMessage: "",
          amount: "328,000.00",
          date: "4 July 2022 04:26",
        },
        {
          id: 3,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
          name: "Adewale Adeyesufu",
          transactionType: "incoming",
          transactionTitle: "Incoming Transfer",
          transactionMessage: "",
          amount: "28,000.00",
          date: "4 July 2022 04:26",
        },
      ],
    },
    {
      dateOfTransactions: "9 June 2022",
      transactions: [
        {
          id: 9,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
          name: "Adewale Adeyesufu",
          transactionType: "outgoing",
          transactionTitle: "Outgoing Transfer",
          transactionMessage: "Chop life my gee ",
          amount: "28,000.00",
          date: "4 July 2022 04:26",
        },

        {
          id: 10,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
          name: "Adewale Adeyesufu",
          transactionType: "outgoing",
          transactionTitle: "Outgoing Transfer",
          transactionMessage: "Chop life my gee ",
          amount: "28,000.00",
          date: "4 July 2022 04:26",
        },
      ],
    },
    {
      dateOfTransactions: "20 June 2022",
      transactions: [
        {
          id: 4,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
          name: "Swift Networks",
          transactionType: "outgoing",
          transactionTitle: "Internet Payment",
          transactionMessage: "",
          amount: "328,000.00",
          date: "4 July 2022 04:26",
        },
        {
          id: 5,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
          name: "Adewale Adeyesufu",
          transactionType: "outgoing",
          transactionTitle: "Outgoing Transfer",
          transactionMessage: "Chop life my gee ",
          amount: "28,000.00",
          date: "4 July 2022 04:26",
        },

        {
          id: 6,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
          name: "Adewale Adeyesufu",
          transactionType: "outgoing",
          transactionTitle: "Outgoing Transfer",
          transactionMessage: "Chop life my gee ",
          amount: "28,000.00",
          date: "4 July 2022 04:26",
        },

        {
          id: 7,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
          name: "Adewale Adeyesufu",
          transactionType: "outgoing",
          transactionTitle: "Outgoing Transfer",
          transactionMessage: "Chop life my gee ",
          amount: "28,000.00",
          date: "4 July 2022 04:26",
        },

        {
          id: 8,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
          name: "Adewale Adeyesufu",
          transactionType: "outgoing",
          transactionTitle: "Outgoing Transfer",
          transactionMessage: "Chop life my gee ",
          amount: "28,000.00",
          date: "4 July 2022 04:26",
        },
      ],
    },
  ];

  return (
    <SpacerWrapper>
      <View style={[styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {transactionHistory.map(({ dateOfTransactions, transactions }, i) => (
            <View key={i} style={[CommonStyles.col, { alignSelf: "stretch" }]}>
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.secondaryText}
                style={{
                  fontSize: hp(14),
                  marginBottom: hp(10),
                  fontFamily: "Euclid-Circular-A",
                  fontWeight: "500",
                  marginLeft: hp(5),
                }}>
                {dateOfTransactions}
              </Text>
              {transactions.map(
                (
                  {
                    amount,
                    date,
                    image,
                    name,
                    transactionMessage,
                    transactionTitle,
                    transactionType,
                  },
                  i
                ) => (
                  <View key={i} style={{ marginBottom: hp(20) }}>
                    <TransactionListItem
                      amount={amount}
                      date={date}
                      image={image}
                      name={name}
                      transactionMessage={transactionMessage}
                      transactionTitle={transactionTitle}
                      transactionType={transactionType}
                    />
                  </View>
                )
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </SpacerWrapper>
  );
};

export default TransactionHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
