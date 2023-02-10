import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { View as View, Text as Text } from "../../../../theme/Themed";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import MyButton from "../sub-components/MyButton";
import CustomSwitch from "../../../../components/input/CustomSwitch";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";

import { CharityStyles as styles } from "../styles";
import { InfoIcon } from "../../../../../assets/svg";
import CommonStyles from "../../../../common/styles/CommonStyles";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import { CommonScreenProps } from "../../../../common/navigation/types";
import Button from "../../../../components/buttons/Button";
import { NAIRA_UNICODE } from "../../../../constants/AppConstants";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
import Divider from "../../../../components/divider/Divider";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";
import CharityForSelf from "./CharityForSelf";
import CharityForSomeone from "./CharityForOthers";
import { TabBar, TabView } from "react-native-tab-view";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useWindowDimensions } from "react-native";

export default function CharityDetailsScreen({
  navigation,
  route,
}: CommonScreenProps<"CharityDetailsScreen">) {
  const [amount, setAmount] = useState("");
  const [charityTransaction, setCharityTransaction] = useState({
    amount: "",
    name: "",
    email: "",
  });
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const insets = useSafeAreaInsets();
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "For Myself" },
    { key: "second", title: "For Someone Else" },
  ]);
  const layout = useWindowDimensions();

  useNavigationHeader(navigation, "CharityDetail");

  const renderScene = (props: any) => {
    switch (props.route.key) {
      case "first":
        return <CharityForSelf navigation={navigation} route={route} />;
      case "second":
        return <CharityForSomeone navigation={navigation} route={route} />;
    }
  };

  const {
    charityName,
    description,
    pictureUrl,
    primaryAccountNo,
    primaryAccBankName,
    tabKey,
  } = route.params;

  return (
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
}
