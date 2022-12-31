import React, { useLayoutEffect, useState } from "react";
import {
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { View } from "../../theme/components/View";
import { Text } from "../../theme/components/Text";
import Divider from "../../components/divider/Divider";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import SplitListItem from "./components/SplitListItem";
import { hp } from "../../common/util/LayoutUtil";

const IncomingSplitRequestsScreen = ({
  navigation,
}: CommonScreenProps<"IncomingSplitRequests">) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Pending" },
    { key: "second", title: "Completed" },
  ]);
  const colorScheme = useColorScheme();
  const layout = useWindowDimensions();

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
            {listItems.map(({ amount, date, splitImage, name }, i) => (
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
                    name={name}
                    splitImage={splitImage}
                    showCreatorAndRecipients
                    showChevron
                  />
                </TouchableOpacity>
                <Divider />
              </View>
            ))}
          </ScrollView>
        );
      case "second":
        return (
          <ScrollView>
            {listItems.map(({ amount, date, splitImage, name }, i) => (
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
                    name={name}
                    splitImage={splitImage}
                    showCreatorAndRecipients
                  />
                </TouchableOpacity>
                <Divider />
              </View>
            ))}
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
                borderBottomColor: Colors[colorScheme].secondaryText,
                borderBottomWidth: 2,
              }}
              indicatorStyle={{
                backgroundColor: Colors[colorScheme].text,
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
