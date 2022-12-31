import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import { TextProps, useAppThemeColor, ViewProps } from "./Themed";
import { View as DefaultView } from "react-native";
import { useAppSelector } from "../redux";
import { selectAppTheme } from "../redux/slice/themeSlice";
import { Text as DefaultText } from "react-native";
import useColorScheme from "../hooks/useColorScheme";

export const getDeviceTheme = (_selectedTheme: string) => {
  const colorScheme = useColorScheme();
  if (_selectedTheme === "dark") return DarkTheme;
  else if (_selectedTheme === "light") return DefaultTheme;
  else {
    return colorScheme === "dark" ? DarkTheme : DefaultTheme;
  }
};

export const getAppTheme = (
  selectedTheme: "dark" | "light" | "system"
): "dark" | "light" => {
  const colorScheme = useColorScheme();
  return selectedTheme === "dark"
    ? "dark"
    : selectedTheme === "system"
    ? colorScheme
    : "light";
};

export type AppThemeType = "light" | "dark" | "system";
