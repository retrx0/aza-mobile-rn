// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import React from "react";
// import { Platform } from "react-native";
// import { CommonScreenProps } from "../../../../common/navigation/types";
// import CommonStyles from "../../../../common/styles/CommonStyles";
// import { hp } from "../../../../common/util/LayoutUtil";
// import Colors from "../../../../constants/Colors";
// import { useAppSelector } from "../../../../redux";
// import { selectAppTheme } from "../../../../redux/slice/themeSlice";
// import { getAppTheme } from "../../../../theme";
// import { SafeAreaView } from "../../../../theme/Themed";
// import CharityDetail from "./CharityDetail";

// const Tab = createMaterialTopTabNavigator();

// const CharityTabs = ({ route }: CommonScreenProps<"CharityDetailsScreen">) => {
//   const scheme = getAppTheme(useAppSelector(selectAppTheme));
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
//             borderColor: Colors[scheme].secondaryText,
//           },
//           tabBarLabelStyle: {
//             textTransform: "capitalize",
//             fontSize: hp(16),
//             fontWeight: "500",
//           },
//           tabBarStyle: {
//             borderBottomColor: Colors[scheme].borderColor,
//             borderBottomWidth: 1,
//           },
//         }}
//         initialRouteName="For Myself"
//       >
//         <Tab.Screen
//           name="For Myself"
//           component={CharityDetail}
//           initialParams={{ ...route.params, tabKey: "self" }}
//         />
//         <Tab.Screen
//           name="For Someone Else"
//           component={CharityDetail}
//           initialParams={{ ...route.params, tabKey: "someone" }}
//         />
//       </Tab.Navigator>
//     </SafeAreaView>
//   );
// };

// export default CharityTabs;
