import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { AppState, Image, Pressable } from "react-native";
import Colors from "../constants/Colors";
import Home from "../screens/tabs/home/Home";
import Payments from "../screens/tabs/payments/Payments";
import Profile from "../screens/tabs/profile/Profile";
import Vault from "../screens/tabs/vault/Vault";
import Settings from "../screens/tabs/settings/Settings";
import {
  RootStackScreenProps,
  RootTabParamList,
  RootTabScreenProps,
} from "../../types";
import {
  HomeIcon,
  QRCodeIcon,
  VaultIcon,
  PaymentsIcon,
  SettingsIcon,
  ProfileIcon,
  MenuIcon,
  AZALightningLogo,
  QRCodeDarkModeIcon,
} from "../../assets/svg";
import CustomBottomSheet from "../components/bottomsheet/CustomBottomSheet";
import { useBottomSheetType } from "../screens/tabs/home/hooks/useBottomSheetType";
import { getAppTheme } from "../theme";

import { useAppSelector } from "../redux";
import { selectAppTheme } from "../redux/slice/themeSlice";
import { selectUser } from "../redux/slice/userSlice";
import { View } from "../theme/Themed";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = (
  _navigation: RootStackScreenProps<"Root"> & RootTabScreenProps<"Home">
) => {
  const [isProfileModalVisible, setProfileModalVisible] = React.useState(false);
  const [isMenuModalVisible, setMenuModalVisible] = React.useState(false);

  const selectedTheme = useAppSelector(selectAppTheme);
  const user = useAppSelector(selectUser);
  const appTheme = getAppTheme(selectedTheme);

  const toggleProfileModal = () => {
    setProfileModalVisible(!isProfileModalVisible);
  };

  const toggleMenuModal = () => {
    setMenuModalVisible(!isMenuModalVisible);
  };

  const menuBottomSheetListItems = useBottomSheetType("menu", _navigation);
  const { profileBottomSheetListItems, setChoosePhoto }: any =
    useBottomSheetType("profile", _navigation);

  useEffect(() => {
    /* APP STATE CHANGES */
    // const { name } = _navigation.route;
    // const appStateListener = AppState.addEventListener("change", (appState) => {
    //   if (appState === "background") {
    //     if (name === "Root" || name === "Common")
    //       _navigation.navigation.navigate("SignIn");
    //   }
    // });
    // return () => {
    //   appStateListener.remove();
    // };
  }, []);

  return (
    <>
      <BottomTab.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          tabBarActiveTintColor: Colors[appTheme].tint,
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={({ navigation }: RootTabScreenProps<"Home">) => ({
            //center it in android
            headerTitleAlign: "center",
            headerTitle: () => (
              <AZALightningLogo
                size={25}
                color={
                  appTheme === "dark" ? Colors.dark.mainText : Colors.light.text
                }
              />
            ),
            title: "Home",
            tabBarIcon: ({ color }) => <HomeIcon color={color} size={24} />,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("QRTransactions")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                {appTheme === "dark" ? (
                  <QRCodeDarkModeIcon style={{ marginRight: 15 }} />
                ) : (
                  <QRCodeIcon
                    size={24}
                    color={Colors.light.text}
                    style={{ marginRight: 15 }}
                  />
                )}
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
                <MenuIcon size={25} color={Colors[appTheme].text} />
              </Pressable>
            ),
            headerShadowVisible: false,
          })}
        />
        {/* <BottomTab.Screen
          name="Vault"
          component={Vault}
          options={{
            title: "Vault",
            headerShown: false,
            tabBarIcon: ({ color }) => <VaultIcon color={color} size={24} />,
          }}
        /> */}
        <BottomTab.Screen
          name="Payments"
          component={Payments}
          options={{
            title: "Payments",
            headerShown: false,
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
                setChoosePhoto(false);
                toggleProfileModal();
              },
          }}
          component={Profile}
          options={{
            title: "Profile",
            tabBarIcon: () => (
              <View style={{ width: 24, height: 24 }}>
                <Image
                  source={{ uri: user.pictureUrl }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 50,
                    resizeMode: "cover",
                  }}
                />
              </View>
            ),
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
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};
export default BottomTabNavigator;
