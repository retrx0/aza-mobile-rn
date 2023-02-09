import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

import { CommonScreenProps } from "../../common/navigation/types";

import Colors from "../../constants/Colors";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import AccountLimitsTab from "./components/AccountLimitsTab";
import TransactionFeesTab from "./components/TransactionFeesTab";
import { hp } from "../../common/util/LayoutUtil";
import { Text } from "../../theme/Themed";
import { getAppTheme } from "../../theme";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import useNavigationHeader from "../../hooks/useNavigationHeader";

const FeesAndLimitsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"FeesAndLimits">) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Transaction Fees" },
    { key: "second", title: "Account Limits" },
  ]);
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const layout = useWindowDimensions();

  useNavigationHeader(navigation, "Fees & Limits");

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
