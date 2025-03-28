import { useEffect, useLayoutEffect, useState } from "react";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";

import { Text } from "../../../../theme/Themed";
import DepositIndex from "./deposit/DepositIndex";
import WithdrawIndex from "./withdraw/WithdrawIndex";

import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";

import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import Colors from "../../../../constants/Colors";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { hp } from "../../../../common/util/LayoutUtil";
import { InfoIcon } from "../../../../../assets/svg";
import Navigation from "../../../../navigation";

import useNavigationHeader from "../../../../hooks/useNavigationHeader";
import BackButton from "../../../../components/buttons/BackButton";

const WithdrawDepositTabs = ({
  navigation,
  route,
}: CommonScreenProps<"WithdrawDepositTabs">) => {
  const { tabToView } = route.params;
  const [index, setIndex] = useState(tabToView === "withdraw" ? 0 : 1);
  const [routes] = useState([
    { key: "first", title: "Withdraw" },
    { key: "second", title: "Deposit" },
  ]);

  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const layout = useWindowDimensions();

  useLayoutEffect(() => {
    navigation.setOptions({
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
  }, []);

  const handlePress = () => {
    if (tabToView === "withdraw") {
      navigation.navigate("WithdrawFeature");
    } else {
      navigation.navigate("DepositFeature");
    }
  };

  useNavigationHeader(
    navigation,
    "Withdraw/Deposit",
    <TouchableOpacity onPress={handlePress}>
      <InfoIcon
        color={
          appTheme === "dark" ? Colors.dark.secondaryText : Colors.general.black
        }
        style={{ width: 20, height: 20 }}
      />
    </TouchableOpacity>
  );

  const renderScene = (props: any) => {
    switch (props.route.key) {
      case "first":
        return <WithdrawIndex navigation={navigation} route={route} />;
      case "second":
        return <DepositIndex navigation={navigation} route={route} />;
    }
  };

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
};
export default WithdrawDepositTabs;

// .getParent()
// ?

// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { Platform } from "react-native";
// import CommonStyles from "../../../../common/styles/CommonStyles";
// import { SafeAreaView } from "../../../../theme/Themed";
// import useColorScheme from "../../../../hooks/useColorScheme";
// import DepositIndex from "./deposit/DepositIndex";
// import WithdrawIndex from "./withdraw/WithdrawIndex";
// import { useAppSelector } from "../../../../redux";
// import { selectAppTheme } from "../../../../redux/slice/themeSlice";
// import { getAppTheme } from "../../../../theme";

// export function WithdrawDepositTabs() {
//   const selectedTheme = useAppSelector(selectAppTheme);
//   const scheme = getAppTheme(selectedTheme);
//   const Tab = createMaterialTopTabNavigator();
//   return (
//     <SafeAreaView style={CommonStyles.parentContainer}>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarItemStyle: {
//             borderRadius: 100,
//             marginTop: Platform.OS == "android" ? 50 : 0,
//           },
//           tabBarIndicatorStyle: {
//             borderWidth: 1,
//             borderColor: scheme == "light" ? "#000000" : "#ffffff",
//           },
//           tabBarLabelStyle: {
//             textTransform: "capitalize",
//             fontSize: 16,
//           },
//           tabBarStyle: {
//             borderBottomColor: "#A6A6A6",
//             borderBottomWidth: 0.1,
//           },
//         }}
//         initialRouteName="WithdrawIndex">
//         <Tab.Screen
//           options={{ title: "Withdraw" }}
//           name="WithdrawIndex"
//           component={WithdrawIndex}
//         />
//         <Tab.Screen
//           options={{ title: "Deposit" }}
//           name="DepositIndex"
//           component={DepositIndex}
//         />
//       </Tab.Navigator>
//     </SafeAreaView>
//   );
//
