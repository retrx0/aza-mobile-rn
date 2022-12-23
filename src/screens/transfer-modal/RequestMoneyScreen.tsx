import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

import BackButton from "../../components/buttons/BackButton";
import { Text } from "../../components/Themed";

import Colors from "../../constants/Colors";
import { Beneficiary, CommonScreenProps } from "../../common/navigation/types";
import useColorScheme from "../../hooks/useColorScheme";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { hp } from "../../common/util/LayoutUtil";
import ContactsScene from "./ContactsScene";
import { sendInviteToNonAzaContact } from "../../api/notification";
import { InfoIcon } from "../../../assets/svg";

const RequestMoneyScreen = ({
  navigation,
}: CommonScreenProps<"RequestMoney">) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Mobile Number" },
    { key: "second", title: "Aza Number" },
  ]);
  const colorScheme = useColorScheme();
  const layout = useWindowDimensions();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          // lightColor={Colors.light.text}
          // darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          Request Money
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("RequestMoneyFeature")}>
          <InfoIcon color={colorScheme === "dark" ? "#999999" : "#000000"} />
        </TouchableOpacity>
      ),
    });
  }, []);

  const azaContactOnClick = (beneficiary: Beneficiary) => {
    //TODO replace with redux slice
    navigation.navigate("TransactionKeypad", {
      headerTitle: "Send Money",
      transactionType: {
        transaction: "request",
        type: "normal",
        beneficiary: beneficiary,
        openDescriptionModal: true,
      },
    });
  };

  return (
    <SpacerWrapper>
      <TabView
        navigationState={{ index, routes }}
        renderScene={({ route }) => (
          <ContactsScene
            route={route}
            azaContactOnPress={(_b) => azaContactOnClick(_b)}
            nonAzaContactOnPress={({ email, phone }) =>
              sendInviteToNonAzaContact({ email: email!, phoneNumber: phone! })
            }
          />
        )}
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
                    fontSize: hp(16),
                    fontWeight: "500",
                  }}>
                  {route.title}
                </Text>
              );
            }}
          />
        )}
      />
    </SpacerWrapper>
  );
};

export default RequestMoneyScreen;
