import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Pressable } from "react-native";
import Colors from "../constants/Colors";
import Home from "../screens/tabs/home/Home";
import Payments from "../screens/tabs/payments/Payments";
import Profile from "../screens/tabs/profile/Profile";
import Vault from "../screens/tabs/vault/Vault";
import Settings from "../screens/tabs/settings/Settings";
import { RootTabParamList, RootTabScreenProps } from "../../types";
import useColorScheme from "../hooks/useColorScheme";
import { HomeIcon, QRCodeIcon, VaultIcon, PaymentsIcon, SettingsIcon, ProfileIcon } from "../../assets/svg";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={16} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <QRCodeIcon size={25} color={Colors[colorScheme].text} style={{ marginRight: 15 }} />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Vault"
        component={Vault}
        options={{
          title: "Vault",
          tabBarIcon: ({ color }) => <VaultIcon color={color} size={16} />,
        }}
      />
      <BottomTab.Screen
        name="Payments"
        component={Payments}
        options={{
          title: "Payments",
          tabBarIcon: ({ color }) => <PaymentsIcon color={color} size={16} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <SettingsIcon color={color} size={16} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <ProfileIcon color={color} size={16} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string }) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};
export default BottomTabNavigator;
