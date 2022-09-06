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
import { RootStackScreenProps, RootTabParamList, RootTabScreenProps } from "../../types";
import useColorScheme from "../hooks/useColorScheme";
import {
  HomeIcon,
  QRCodeIcon,
  VaultIcon,
  PaymentsIcon,
  SettingsIcon,
  ProfileIcon,
  MenuIcon,
  AZALogo,
  AZALightningLogo,
} from "../../assets/svg";
import CustomBottomSheet from "../components/bottomsheet/CustomBottomSheet";
import { useBottomSheetType } from "../screens/tabs/home/hooks/useBottomSheetType";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = (_navigation: RootStackScreenProps<"Root"> & RootTabScreenProps<"Home">) => {
  const [isProfileModalVisible, setProfileModalVisible] = React.useState(false);
  const [isMenuModalVisible, setMenuModalVisible] = React.useState(false);
  const colorScheme = useColorScheme();

  const toggleProfileModal = () => {
    setProfileModalVisible(!isProfileModalVisible);
  };

  const toggleMenuModal = () => {
    setMenuModalVisible(!isMenuModalVisible);
  };

  const menuBottomSheetListItems = useBottomSheetType("menu", _navigation);
  const profileBottomSheetListItems = useBottomSheetType("profile", _navigation);

  return (
    <>
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
            //center it in android
            headerTitleAlign: "center",
            headerTitle: () => <AZALightningLogo size={25} color={Colors[colorScheme].text} />,
            title: "Home",
            tabBarIcon: ({ color }) => <HomeIcon color={color} size={24} />,
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
            headerLeft: () => (
              <Pressable
                onPress={toggleMenuModal}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginLeft: 15,
                })}
              >
                <MenuIcon size={25} color={Colors[colorScheme].text} />
              </Pressable>
            ),
            headerShadowVisible: false,
          })}
        />
        <BottomTab.Screen
          name="Vault"
          component={Vault}
          options={{
            title: "Vault",
            headerShown: false,
            tabBarIcon: ({ color }) => <VaultIcon color={color} size={24} />,
          }}
        />
        <BottomTab.Screen
          name="Payments"
          component={Payments}
          options={{
            title: "Payments",
            tabBarIcon: ({ color }) => <PaymentsIcon color={color} size={24} />,
          }}
        />
        <BottomTab.Screen
          name="Settings"
          component={Settings}
          options={{
            title: "Settings",
            tabBarIcon: ({ color }) => <SettingsIcon color={color} size={24} />,
            headerShadowVisible: false,
          }}
        />
        <BottomTab.Screen
          name="Profile"
          listeners={{
            tabPress: (e) =>
              // to prevent the click from going to the profile screen and instead show a bottomsheet modal
              {
                e.preventDefault();
                toggleProfileModal();
              },
          }}
          component={Profile}
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => <ProfileIcon color={color} size={24} />,
          }}
        />
      </BottomTab.Navigator>
      {isProfileModalVisible ? (
        <CustomBottomSheet
          isModalVisible={isProfileModalVisible}
          toggleModal={toggleProfileModal}
          listItems={profileBottomSheetListItems}
        />
      ) : (
        <CustomBottomSheet
          isModalVisible={isMenuModalVisible}
          toggleModal={toggleMenuModal}
          listItems={menuBottomSheetListItems}
        />
      )}
    </>
  );
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string }) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};
export default BottomTabNavigator;
