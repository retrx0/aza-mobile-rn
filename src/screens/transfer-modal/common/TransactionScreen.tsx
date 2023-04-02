import React, { useState } from "react";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

import { Text } from "../../../theme/Themed";

import Colors from "../../../constants/Colors";
import { CommonScreenProps } from "../../../common/navigation/types";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { hp } from "../../../common/util/LayoutUtil";
import ContactsScene from "../../contacts/ContactsScene";
import { sendInviteToNonAzaContact } from "../../../api/notification";
import { InfoIcon } from "../../../../assets/svg";
import { getAppTheme } from "../../../theme";
import { useAppSelector } from "../../../redux";
import { selectAppTheme } from "../../../redux/slice/themeSlice";
import { IBeneficiary } from "../../../redux/types";
import useNavigationHeader from "../../../hooks/useNavigationHeader";

type TransactionScreenProps = {
  headerTitle: string;
  featureNavigationScreen: any;
  screenFor: "send" | "request";
  type: "normal";
};

const TransactionScreen = ({
  navigation,
  route,
  headerTitle,
  featureNavigationScreen,
  type,
  screenFor,
}: CommonScreenProps<"SendMoney" | "RequestMoney"> &
  TransactionScreenProps) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Mobile Number" },
    { key: "second", title: "Aza Number" },
  ]);
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const layout = useWindowDimensions();

  useNavigationHeader(
    navigation,
    headerTitle,
    <TouchableOpacity
      onPress={() => navigation.navigate(featureNavigationScreen)}
    >
      <InfoIcon
        color={appTheme === "dark" ? Colors.dark.mainText : Colors.light.text}
      />
    </TouchableOpacity>
  );

  const azaContactOnClick = (beneficiary: IBeneficiary) => {
    //TODO replace with redux slice
    navigation.navigate("TransactionKeypad", {
      headerTitle: headerTitle,
      transactionType: {
        transaction: screenFor,
        type: type,
        beneficiary: beneficiary,
        openDescriptionModal: false,
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
                  style={{
                    color: focused
                      ? Colors[appTheme].text
                      : Colors[appTheme].secondaryText,
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

export default TransactionScreen;
