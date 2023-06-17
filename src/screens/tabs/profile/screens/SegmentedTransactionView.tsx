import React from "react";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import {
  numberWithCommas,
  transfromDataString,
} from "../../../../common/util/NumberUtils";
import TransactionListItem from "../../../../components/ListItem/TransactionListItem";
import Colors from "../../../../constants/Colors";
import {
  I9PSBTransaction,
  IBeneficiary,
  ITransaction,
  ITransferResponse,
} from "../../../../types/types.redux";
import { Text, View } from "../../../../theme/Themed";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { RootTabScreenProps } from "../../../../types/types.navigation";
import { NAIRA_UNICODE } from "../../../../constants/AppConstants";

const SegmentedTransactionView = ({
  dateOfTransactions,
  transactions,
  navigation,
}: {
  dateOfTransactions: string;
  transactions: I9PSBTransaction[];
  navigation: RootTabScreenProps<"Home">;
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
            destinationCreditChannel,
            name,
            description,
            transactionId,
            type,
            transactionType,
            transactionReference,
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
              onPress={() => {
                navigation.navigation.navigate("Common", {
                  screen: "Receipt",
                  params: {
                    amount: String(amount),
                    beneficiaryName: name!,
                    description,
                    transactionType:
                      transactionType === "IntraBank"
                        ? "Aza to Aza"
                        : transactionType,
                    referenceId: "" + transactionReference,
                    transactionDate: transfromDataString(createdAt),
                    receivingBank:
                      transactionType === "IntraBank"
                        ? "Aza Wallet"
                        : "" + destinationCreditChannel,
                    transactionFee: "",
                  },
                });

                // let confirmationType: "send" | "request" = "send";

                // let response: ITransferResponse = {
                //   amount: 100,
                //   createdAt: "cr",
                //   currency: "NGN",
                //   dateCreated: "22222",
                //   description: "chop life",
                //   destBankCode: "555",
                //   destBankName: "Bank1",
                //   destinationCreditAccount: "000222",
                //   id: "someid",
                //   name: "name",
                //   sourceAccount: "45654",
                //   sourceBankCode: "46848",
                //   sourceBankName: "Banks",
                //   transactionReference: "some refrence",
                //   transactionType: "transaction type",
                //   type: "type",
                // };

                // let beneficiary: IBeneficiary = {
                //   fullName: "sAbdul",
                //   accountNumber: "uibaidua",
                //   bankCode: "6468",
                // };

                // navigation.navigation.navigate("Common", {
                //   screen: "StatusScreen",
                //   params: {
                //     status:
                //       confirmationType === "request"
                //         ? "Successful"
                //         : "Your transaction was \n successful",
                //     statusIcon: "Success",
                //     statusMessage: `You have successfully ${
                //       confirmationType === "request" ? "requested" : "sent"
                //     } ${NAIRA_UNICODE} ${amount} ${
                //       confirmationType === "request" ? "from" : "to"
                //     } ${beneficiary.fullName}`,
                //     statusMessage2: confirmationType === "send" ? "" : "",
                //     receiptDetails:
                //       confirmationType === "send" && response
                //         ? {
                //             amount: String(amount),
                //             beneficiaryName: beneficiary.fullName,
                //             description: response.description,
                //             receivingBank: response.destBankName,
                //             referenceId: response.transactionReference,
                //             transactionDate: response.dateCreated,
                //             transactionFee: "",
                //             transactionType: response.transactionType,
                //           }
                //         : undefined,
                //     recurringTransferBeneficiary:
                //       confirmationType === "send" ? beneficiary : undefined,
                //     navigateTo: "Home",
                //     // to disallow swoosh sound in request screen
                //     screenType:
                //       confirmationType === "send" ? "transaction" : undefined,
                //   },
                // });
              }}
            />
          </View>
        )
      )}
    </View>
  );
};
export default SegmentedTransactionView;
