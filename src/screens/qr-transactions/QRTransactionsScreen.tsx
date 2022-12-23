import React, { useLayoutEffect, useState } from "react";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

import { RootStackScreenProps } from "../../../types";

import QRMakePaymentTab from "./components/QRMakePaymentTab";
import QRReceivePaymentTab from "./components/QRReceivePaymentTab";
import BackButton from "../../components/buttons/BackButton";
import { Text } from "../../components/Themed";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { InfoIcon } from "../../../assets/svg";

const QRTransactionsScreen = ({
  navigation,
  route,
}: RootStackScreenProps<"QRTransactions">) => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "first", title: "Make Payment" },
    { key: "second", title: "Receive Payment" },
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
            fontSize: 16,
          }}>
          QR Transactions
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("QRFeature")}>
          <InfoIcon color={colorScheme === "dark" ? "#999999" : "#000000"} />
        </TouchableOpacity>
      ),
    });
  }, []);

  const renderScene = (props: any) => {
    switch (props.route.key) {
      case "first":
        return <QRMakePaymentTab navigation={navigation} route={route} />;
      case "second":
        return <QRReceivePaymentTab navigation={navigation} route={route} />;
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
                    }}>
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
