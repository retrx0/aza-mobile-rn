import React, { useLayoutEffect, useState } from "react";
import { useWindowDimensions, TouchableOpacity } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import BackButton from "../../../../components/buttons/BackButton";
import Colors from "../../../../constants/Colors";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { selectUser } from "../../../../redux/slice/userSlice";
import { getAppTheme } from "../../../../theme";
import { ScrollView, Text, View } from "../../../../theme/Themed";
import Divider from "../../../tabs/payments/sub-components/Divider";
import SplitListItem from "../SplitListItem";

const CommonRequestScreen = ({
  navigation,
  type,
}: CommonScreenProps<"IncomingSplitRequests"> & {
  type: "incoming" | "outgoing";
}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Pending" },
    { key: "second", title: "Completed" },
  ]);
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const layout = useWindowDimensions();

  const { paymentRequests } = useAppSelector(selectUser);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          {type === "incoming" ? "Incoming" : "Outgoing"} Requests
        </Text>
      ),
      headerBackVisible: false,
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
  }, []);

  const renderScene = ({ route }: any) => {
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

  return (
    <>
      <SpacerWrapper>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          sceneContainerStyle={{ overflow: "visible" }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={{
                elevation: 0,
                backgroundColor: "transparent",
                borderBottomColor: Colors[appTheme].secondaryText,
                borderBottomWidth: 2,
              }}
              indicatorStyle={{
                backgroundColor: Colors[appTheme].text,
                marginBottom: -2,
              }}
              renderLabel={({ focused, route }) => {
                return (
                  <Text
                    lightColor={
                      focused ? Colors.light.text : Colors.light.secondaryText
                    }
                    darkColor={
                      focused ? Colors.dark.mainText : Colors.dark.secondaryText
                    }
                    style={{
                      fontFamily: "Euclid-Circular-A-Medium",
                      fontSize: 16,
                    }}
                  >
                    {route.title}
                  </Text>
                );
              }}
            />
          )}
        />
      </SpacerWrapper>
    </>
  );
};

export default CommonRequestScreen;
