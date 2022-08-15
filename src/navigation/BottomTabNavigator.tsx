import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import Home from "../screens/tabs/home/Home";
import Payments from "../screens/tabs/Payments";
import Profile from "../screens/tabs/Profile";
import Vault from "../screens/tabs/Vault";
import Settings from "../screens/tabs/Settings";
import { RootTabParamList, RootTabScreenProps } from "../../types";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={
        {
          // tabBarActiveTintColor: Colors[colorScheme].tint,
        }
      }
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              {/* <FontAwesome name="qrcode" size={25} color={Colors[colorScheme].text} style={{ marginRight: 15 }} /> */}
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Vault"
        component={Vault}
        options={{
          title: "Vault",
          tabBarIcon: ({ color }) => <TabBarIcon name="lock" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Payments"
        component={Payments}
        options={{
          title: "Payments",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="credit-card" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};
export default BottomTabNavigator;
