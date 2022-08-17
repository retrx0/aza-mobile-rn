/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/modals/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import Home from "../screens/tabs/home/Home";
import Vault from "../screens/tabs/Vault";
import Payments from "../screens/tabs/Payments";
import Settings from "../screens/tabs/Settings";
import Profile from "../screens/tabs/Profile";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
import SignUpRoot from "../screens/auth/signup/SignUpNavigator";
import LoginNavigator from "../screens/auth/signin/SignInNavigator";
import BvnVerificationNavigator from "../screens/bvn/BvnVerificationNavigator";

import {
  AZALogo,
  HomeIcon,
  PaymentsIcon,
  ProfileIcon,
  QRCodeIcon,
  SettingsIcon,
  VaultIcon,
  MenuIcon,
} from "../../assets/svg";
import CustomBottomSheet from "../components/bottomsheet/CustomBottomSheet";
import { useBottomSheetType } from "../screens/tabs/home/hooks/useBottomSheetType";

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpRoot} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={LoginNavigator} options={{ headerShown: false }} /> */}

      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BvnVerification"
        component={BvnVerificationNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const [isProfileModalVisible, setProfileModalVisible] = React.useState(false);
  const [isMenuModalVisible, setMenuModalVisible] = React.useState(false);
  const colorScheme = useColorScheme();

  const toggleProfileModal = () => {
    setProfileModalVisible(!isProfileModalVisible);
  };

  const toggleMenuModal = () => {
    setMenuModalVisible(!isMenuModalVisible);
  };

  const menuBottomSheetListItems = useBottomSheetType("menu");
  const profileBottomSheetListItems = useBottomSheetType("profile");

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
            headerStatusBarHeight: 70,

            //center it in android
            headerTitleAlign: "center",
            headerTitle: () => (
              <AZALogo size={25} color={Colors[colorScheme].text} />
            ),
            title: "Home",
            tabBarIcon: ({ color }) => <HomeIcon color={color} size={16} />,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Modal")}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <QRCodeIcon
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
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
            tabBarIcon: ({ color }) => <ProfileIcon color={color} size={16} />,
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

export default Navigation;
