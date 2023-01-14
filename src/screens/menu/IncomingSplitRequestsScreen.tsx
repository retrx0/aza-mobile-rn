import React, { useLayoutEffect, useState } from "react";
import { useWindowDimensions, TouchableOpacity } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { View, Text, ScrollView } from "../../theme/Themed";

import Divider from "../../components/divider/Divider";

import Colors from "../../constants/Colors";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import SplitListItem from "./components/SplitListItem";
import { hp } from "../../common/util/LayoutUtil";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getAppTheme } from "../../theme";
import { selectUser } from "../../redux/slice/userSlice";

const IncomingSplitRequestsScreen = ({
  navigation,
}: CommonScreenProps<"IncomingSplitRequests">) => {
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
          Incoming Requests
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
  }, []);

  const listItems = [
    {
      name: "KFC",
      amount: "20000",
      date: "4 July 2022 04:26",
      splitImage:
        "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
    },
    {
      name: "KFC",
      amount: "20000",
      date: "4 July 2022 04:26",
      splitImage:
        "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
    },
    {
      name: "KFC",
      amount: "20000",
      date: "4 July 2022 04:26",
      splitImage:
        "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
    },
  ];

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "first":
        return (
          <ScrollView>
            {paymentRequests.data
              .filter((r) => r.status === "Pending")
              .map(
                (
                  {
                    amount,
                    date,
                    vendorLogo,
                    vendorName,
                    requestees,
                    requestor,
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
                        navigation.navigate("IncomingSplitRequestAcceptance")
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
              .filter((r) => r.status === "Paid")
              .map(
                (
                  {
                    amount,
                    date,
                    vendorLogo,
                    vendorName,
                    requestees,
                    requestor,
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
                        navigation.navigate("CompletedSplitRequestDetails")
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

export default IncomingSplitRequestsScreen;
