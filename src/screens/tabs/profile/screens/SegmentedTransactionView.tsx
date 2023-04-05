import React from "react";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import {
  numberWithCommas,
  transfromDataString,
} from "../../../../common/util/NumberUtils";
import TransactionListItem from "../../../../components/ListItem/TransactionListItem";
import Colors from "../../../../constants/Colors";
import { I9PSBTransaction, ITransaction } from "../../../../types/types.redux";
import { Text, View } from "../../../../theme/Themed";

const SegmentedTransactionView = ({
  dateOfTransactions,
  transactions,
}: {
  dateOfTransactions: string;
  transactions: I9PSBTransaction[];
}) => {
  const formmattedDate = new Date(dateOfTransactions).toDateString();
  return (
    <View style={[CommonStyles.col, { alignSelf: "stretch" }]}>
      <Text
        lightColor={Colors.light.text}
        darkColor={Colors.dark.secondaryText}
        style={{
          fontSize: hp(16),
          marginBottom: hp(10),
          fontFamily: "Euclid-Circular-A",
          fontWeight: "500",
          marginLeft: hp(5),
        }}
      >
        {formmattedDate}
      </Text>
      {transactions.map(
        (
          {
            amount,
            createdAt,
            sourceAccount,
            destinationCreditAccount,
            name,
            description,
            transactionId,
            type,
            transactionType,
          },
          i
        ) => (
          <View key={i} style={{ marginBottom: hp(20) }}>
            <TransactionListItem
              amount={numberWithCommas(String(amount))}
              date={transfromDataString(createdAt)}
              image={`https://ui-avatars.com/api/?name=${name}`}
              name={name ? name : destinationCreditAccount}
              transactionMessage={description}
              transactionTitle={
                type === "CREDIT" ? "Incoming Transfer" : "Outgoing Transfer"
              }
              transactionType={type === "CREDIT" ? "incoming" : "outgoing"}
            />
          </View>
        )
      )}
    </View>
  );
};
export default SegmentedTransactionView;
