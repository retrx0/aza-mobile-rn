import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

import {
  Beneficiary,
  CommonScreenProps,
} from "../../../common/navigation/types";

import BackButton from "../../../components/buttons/BackButton";
import { Text } from "../../../theme/components/Text";

import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { hp } from "../../../common/util/LayoutUtil";
import { Contact } from "expo-contacts";
import { useAppSelector } from "../../../redux";
import ContactsScene from "../../contacts/ContactsScene";
import { getUserContacts } from "../../../hooks/useContacts";
import { sendInviteToNonAzaContact } from "../../../api/notification";
import { InfoIcon } from "../../../../assets/svg";
import { getAppTheme } from "../../../theme";
import { selectAppTheme } from "../../../redux/slice/themeSlice";

const SendMoneyScreen = ({ navigation }: CommonScreenProps<"SendMoney">) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Mobile Number" },
    { key: "second", title: "Aza Number/Bank" },
  ]);
  const layout = useWindowDimensions();

  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  // const user = useAppSelector(user)

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
          }}
        >
          Send Money
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
          onPress={() => navigation.navigate("SendMoneyFeature")}
        >
          <InfoIcon color={appTheme === "dark" ? "#999999" : "#000000"} />
        </TouchableOpacity>
      ),
    });
  }, []);

  const azaContactOnClick = (beneficiary: Beneficiary) => {
    //TODO replace with redux slice
    navigation.navigate("TransactionKeypad", {
      headerTitle: "Send Money",
      transactionType: {
        transaction: "send",
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
            azaContactOnPress={(beneficiary) => azaContactOnClick(beneficiary)}
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
                    fontSize: hp(16),
                    fontWeight: "500",
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
  );
};

export default SendMoneyScreen;
