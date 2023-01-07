import React from "react";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import TransactionListItem from "../../../../components/ListItem/TransactionListItem";
import Colors from "../../../../constants/Colors";
import { Transaction } from "../../../../redux/types";
import { Text, View } from "../../../../theme/Themed";

const SegmentedTransactionView = ({
  dateOfTransactions,
  transactions,
}: {
  dateOfTransactions: string;
  transactions: Transaction[];
}) => {
  return (
    <View style={[CommonStyles.col, { alignSelf: "stretch" }]}>
      <Text
        lightColor={Colors.light.text}
        darkColor={Colors.dark.secondaryText}
        style={{
          fontSize: hp(14),
          marginBottom: hp(10),
          fontFamily: "Euclid-Circular-A",
          fontWeight: "500",
          marginLeft: hp(5),
        }}
      >
        {dateOfTransactions}
      </Text>
      {transactions.map(
        (
          {
            amount,
            date,
            imageUrl,
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
              image={imageUrl}
              name={name}
              transactionMessage={transactionMessage}
              transactionTitle={transactionTitle}
              transactionType={transactionType}
            />
          </View>
        )
      )}
    </View>
  );
};
export default SegmentedTransactionView;
