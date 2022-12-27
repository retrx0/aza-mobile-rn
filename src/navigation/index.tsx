/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import LinkingConfiguration from "./LinkingConfiguration";
import { selectAppTheme } from "../redux/slice/themeSlice";
import RootNavigator from "./RootNavigator";
import { useAppSelector } from "../redux";

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const _selectedTheme = useAppSelector(selectAppTheme);

  const getDeviceTheme = () => {
    if (_selectedTheme === "dark") return DarkTheme;
    else if (_selectedTheme === "light") return DefaultTheme;
    else {
      return colorScheme === "dark" ? DarkTheme : DefaultTheme;
    }
  };
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={getDeviceTheme()}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
