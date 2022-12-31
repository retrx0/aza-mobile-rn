import React, { useLayoutEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { Text } from "../../theme/components/Text";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import AccountLimitsTab from "./components/AccountLimitsTab";
import TransactionFeesTab from "./components/TransactionFeesTab";
import { hp } from "../../common/util/LayoutUtil";

const FeesAndLimitsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"FeesAndLimits">) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Transaction Fees" },
    { key: "second", title: "Account Limits" },
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
          Fees & Limits
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

  const renderScene = (props: any) => {
    switch (props.route.key) {
      case "first":
        return <TransactionFeesTab />;
      case "second":
        return <AccountLimitsTab navigation={navigation} route={route} />;
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
                      fontSize: hp(16),
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

export default FeesAndLimitsScreen;
