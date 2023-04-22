import React from "react";
import { TouchableOpacity } from "react-native";
import Divider from "../../../../components/divider/Divider";
import { ScrollView, View } from "../../../../theme/Themed";
import {
  ICommonTypedListResult,
  IRequest,
} from "../../../../types/types.redux";
import SplitListItem from "../SplitListItem";

const renderSplitTabScene = ({
  route,
  paymentRequests,
  navigation,
  type,
}: {
  route: any;
  navigation: any;
  paymentRequests: ICommonTypedListResult<IRequest>;
  type: "incoming" | "outgoing";
}) => {
  switch (route.key) {
    case "first":
      return (
        <ScrollView>
          {paymentRequests.data
            .filter((r) => r.status === "Pending" && r.type === type)
            .map(
              (
                {
                  amount,
                  date,
                  vendorLogo,
                  vendorName,
                  requestees,
                  requestor,
                  status,
                  type,
                  category,
                },
                i
              ) => (
                <View key={i}>
                  <TouchableOpacity
                    style={{
                      paddingTop: 20,
                      paddingBottom: 15,
                      paddingHorizontal: 15,
                    }}
                    onPress={() =>
                      navigation.navigate("IncomingSplitRequestAcceptance", {
                        requestItem: {
                          amount: amount,
                          date: date,
                          requestor: requestor,
                          requestees: requestees,
                          vendorName: vendorName,
                          vendorLogo: vendorLogo,
                          status: status,
                          type: type,
                          category: category,
                        },
                      })
                    }
                  >
                    <SplitListItem
                      key={i + 1}
                      amount={amount}
                      date={date}
                      name={vendorName}
                      splitImage={vendorLogo}
                      showCreatorAndRecipients
                      showChevron
                      requestees={requestees}
                      requestor={requestor}
                    />
                  </TouchableOpacity>
                  <Divider />
                </View>
              )
            )}
        </ScrollView>
      );
    case "second":
      return (
        <ScrollView>
          {paymentRequests.data
            .filter((r) => r.status === "Paid" && r.type === type)
            .map(
              (
                {
                  amount,
                  date,
                  vendorLogo,
                  vendorName,
                  requestees,
                  requestor,
                  status,
                  type,
                  category,
                },
                i
              ) => (
                <View key={i}>
                  <TouchableOpacity
                    style={{
                      paddingTop: 20,
                      paddingBottom: 15,
                      paddingHorizontal: 15,
                    }}
                    onPress={() =>
                      navigation.navigate("CompletedSplitRequestDetails", {
                        requestItem: {
                          amount: amount,
                          date: date,
                          requestor: requestor,
                          requestees: requestees,
                          vendorName: vendorName,
                          vendorLogo: vendorLogo,
                          status: status,
                          type: type,
                          category: category,
                        },
                      })
                    }
                  >
                    <SplitListItem
                      key={i + 1}
                      amount={amount}
                      date={date}
                      name={vendorName}
                      splitImage={vendorLogo}
                      showCreatorAndRecipients
                      requestees={requestees}
                      requestor={requestor}
                    />
                  </TouchableOpacity>
                  <Divider />
                </View>
              )
            )}
        </ScrollView>
      );
  }
};

export default renderSplitTabScene;
