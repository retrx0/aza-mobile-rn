import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import CommonStyles from "../../../common/styles/CommonStyles";
import { hp, wp } from "../../../common/util/LayoutUtil";
import Colors from "../../../constants/Colors";

import { View, Text } from "../../../theme/Themed";

import Divider from "../../../components/divider/Divider";
import useColorScheme from "../../../hooks/useColorScheme";

const TransactionFeesTab = () => {
  const colorScheme = useColorScheme();

  const transactionFees = [
    {
      transaction: "Account usage and opening fee",
      detail:
        "You can open your Aza account within seconds and start using it for free.",
      charge: "Free",
    },
    {
      transaction: "Money transfer to Aza accounts",
      detail: "Send money to Aza users for free",
      charge: "Free",
    },
    {
      transaction: "Payments (Bills, Gift cards, Donations)",
      detail: "Zero fees on any transaction under payment section",
      charge: "Free",
    },
    {
      transaction: "Withdraw money to own bank",
      detail: "Withdraw money from Aza to your own bank with no fees",
      charge: "Free",
    },
    {
      transaction: "Deposits via debit/credit cards",
      charge: "0.2%",
    },
    {
      transaction: "Money transfer to other banks",
      charge: "0.1%",
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={[styles.container]}>
      {transactionFees.map(({ charge, detail, transaction }, i) => (
        <View key={i} style={[CommonStyles.col, { alignSelf: "stretch" }]}>
          <View
            style={[
              CommonStyles.row,
              {
                alignSelf: "stretch",
                justifyContent: "space-between",
                paddingHorizontal: hp(15),
              },
            ]}
          >
            <View style={[CommonStyles.col, { maxWidth: wp(300) }]}>
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Medium",
                  fontSize: hp(16),
                  fontWeight: "600",
                  marginLeft: hp(5),
                }}
              >
                {transaction}
              </Text>
              {detail && (
                <Text
                  style={{
                    fontSize: hp(14),
                    marginTop: hp(4),
                    marginLeft: hp(5),
                    fontWeight: "400",
                  }}
                >
                  {detail}
                </Text>
              )}
            </View>
            <Text
              style={{
                fontSize: hp(14),
                fontFamily: "Euclid-Circular-A",
                fontWeight: "400",
              }}
            >
              {charge}
            </Text>
          </View>
          <View
            style={{
              paddingVertical: hp(35),
            }}
          >
            <Divider />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default TransactionFeesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(35),
  },
});
