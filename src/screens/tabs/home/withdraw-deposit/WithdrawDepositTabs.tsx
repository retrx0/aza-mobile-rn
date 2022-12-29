import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Platform } from "react-native";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { SafeAreaView } from "../../../../theme/Themed";
import useColorScheme from "../../../../hooks/useColorScheme";
import DepositIndex from "./deposit/DepositIndex";
import WithdrawIndex from "./withdraw/WithdrawIndex";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";

export function WithdrawDepositTabs() {
  const selectedTheme = useAppSelector(selectAppTheme);
  const scheme = getAppTheme(selectedTheme);
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
          },
          tabBarLabelStyle: {
            textTransform: "capitalize",
            fontSize: 16,
          },
          tabBarStyle: {
            borderBottomColor: "#A6A6A6",
            borderBottomWidth: 0.1,
          },
        }}
        initialRouteName="WithdrawIndex"
      >
        <Tab.Screen
          options={{ title: "Withdraw" }}
          name="WithdrawIndex"
          component={WithdrawIndex}
        />
        <Tab.Screen
          options={{ title: "Deposit" }}
          name="DepositIndex"
          component={DepositIndex}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
