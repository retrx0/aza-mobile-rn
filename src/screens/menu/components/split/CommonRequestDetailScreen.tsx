import { Image, StyleSheet } from "react-native";

import SplitListItem from "../SplitListItem";
import SplitPaymentStatus from "../SplitPaymentStatus";
import Divider from "../../../../components/divider/Divider";
import { ScrollView, Text, View } from "../../../../theme/Themed";

import { NAIRA_UNICODE } from "../../../../constants/AppConstants";
import Colors from "../../../../constants/Colors";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import { numberWithCommas } from "../../../../common/util/NumberUtils";

import { IBeneficiary, IRequest } from "../../../../redux/types";

const CommonRequestDetailScreen = ({
  requestDetails: {
    requestor,
    amount,
    date,
    requestees,
    status,
    type,
    vendorLogo,
    vendorName,
  },
}: {
  requestDetails: IRequest;
}) => {
  const splitAmountForEachPerson = Number(amount) / requestees.length + 1;

  console.log(requestor);

  return (
    <View style={styles.container}>
      <Divider />
      <SplitListItem
        amount={amount}
        date={date}
        name={vendorName}
        splitImage={vendorLogo}
        requestees={[]}
        requestor={{ azaAccountNumber: "", fullName: "" }}
      />
      <Divider />
      <View
        style={{
          marginTop: hp(25),
        }}
      >
        <Text
          style={{
            fontSize: hp(16),
            fontWeight: "400",
            fontFamily: "Euclid-Circular-A",
            marginLeft: hp(5),
          }}
        >
          Request Creator
        </Text>
        <RequestDetailItem
          status={status}
          splitAmount={splitAmountForEachPerson}
          requestItem={requestor}
        />
      </View>
      <Text
        style={{
          fontSize: hp(16),
          fontWeight: "400",
          marginTop: hp(25),
          fontFamily: "Euclid-Circular-A",
          marginLeft: hp(5),
        }}
      >
        Request Recipients
      </Text>
      <ScrollView>
        {requestees.map((_requestee) => {
          return (
            <RequestDetailItem
              status={status}
              splitAmount={splitAmountForEachPerson}
              requestItem={_requestee}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});

const RequestDetailItem = ({
  splitAmount,
  requestItem,
  status,
}: {
  splitAmount: number;
  requestItem: IBeneficiary;
  status: "Paid" | "Pending";
}) => {
  return (
    <View
      style={[
        CommonStyles.row,
        {
          alignSelf: "stretch",
          justifyContent: "space-between",
          marginTop: hp(15),
        },
      ]}
    >
      <Image
        style={{ borderRadius: 50, width: 45, height: 45 }}
        source={{
          uri: requestItem.pictureUrl,
        }}
      />
      <View style={[CommonStyles.col, { marginLeft: 20, marginRight: "auto" }]}>
        <Text
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A-Medium",
            fontWeight: "500",
          }}
        >
          {requestItem.fullName}
        </Text>
        <Text
          style={{
            fontSize: 12,
            marginTop: 5,
            color:
              status === "Paid" ? Colors.general.green : Colors.general.grey,
          }}
        >
          {NAIRA_UNICODE}
          {numberWithCommas(splitAmount)}
        </Text>
      </View>
      <SplitPaymentStatus paid={status === "Paid"} />
    </View>
  );
};

export default CommonRequestDetailScreen;
