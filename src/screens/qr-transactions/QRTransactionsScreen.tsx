import React, { useState } from "react";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

import { RootStackScreenProps } from "../../types/types.navigation";

import QRMakePaymentTab from "./components/QRMakePaymentTab";
import QRReceivePaymentTab from "./components/QRReceivePaymentTab";
import { Text as Text } from "../../theme/Themed";

import Colors from "../../constants/Colors";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { InfoIcon } from "../../../assets/svg";
import { getAppTheme } from "../../theme";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import useNavigationHeader from "../../hooks/useNavigationHeader";
import QRCodeScreen from "./QRCodeScreen";
import { CommonScreenProps } from "../../common/navigation/types";

const QRTransactionsScreen = ({
  navigation,
  route,
}: RootStackScreenProps<"QRTransactions">) => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "first", title: "Make Payment" },
    { key: "second", title: "Receive Payment" },
  ]);

  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const layout = useWindowDimensions();

  useNavigationHeader(
    navigation,
    "QR Transactions",
    <TouchableOpacity
      onPress={() => navigation.navigate("Common", { screen: "QRFeature" })}
    >
      {/* TODO Add these colors to Colors.ts and import them */}
      <InfoIcon
        color={appTheme === "dark" ? Colors.dark.mainText : Colors.light.text}
        style={{ width: 20, height: 20 }}
      />
    </TouchableOpacity>
  );

  const renderScene = (props: any) => {
    switch (props.route.key) {
      case "first":
        return <QRMakePaymentTab navigation={navigation} route={route} />;
      case "second":
        // @ts-ignore
        return <QRCodeScreen navigation={navigation} route={route} />;
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

export default QRTransactionsScreen;
