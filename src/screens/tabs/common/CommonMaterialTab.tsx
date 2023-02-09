import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import {
  ParamListBase,
  RouteConfig,
  TabNavigationState,
} from "@react-navigation/native";
import React from "react";
import { Platform } from "react-native";
import CommonStyles from "../../../common/styles/CommonStyles";
import { hp } from "../../../common/util/LayoutUtil";
import { useAppSelector } from "../../../redux";
import { selectAppTheme } from "../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../theme";
import { SafeAreaView } from "../../../theme/Themed";

interface ICommonTabProps {
  name: string;
  component: any;
  params: any;
}

const CommonMaterialTab = ({
  firstTab,
  secondTab,
}: {
  firstTab: ICommonTabProps;
  secondTab: ICommonTabProps;
}) => {
  const scheme = getAppTheme(useAppSelector(selectAppTheme));

  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={CommonStyles.parentContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: {
            borderRadius: 100,
            marginTop: Platform.OS == "android" ? 50 : 0,
          },
          tabBarIndicatorStyle: {
            borderWidth: 1,
            borderColor: scheme == "light" ? "#000000" : "#ffffff",
            borderBottomColor: "#A6A6A6",
          },
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontSize: hp(16),
            fontWeight: "500",
          },
        }}
        initialRouteName="airtime"
      >
        <Tab.Screen
          name={firstTab.name}
          component={firstTab.component}
          initialParams={firstTab.params}
        />
        <Tab.Screen
          name={secondTab.name}
          component={secondTab.component}
          initialParams={secondTab.params}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default CommonMaterialTab;
