/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView,
  SafeAreaView as ThemedSafeAreaView,
  TextInput as ThemedTextInput,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const useThemeColor = (
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) => {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
};

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type TextInputProps = ThemeProps & ThemedTextInput["props"];
export type IconProps = ThemeProps & typeof FontAwesome["defaultProps"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type SafeAreaViewProps = ThemeProps & ThemedSafeAreaView["props"];

export const Text = (props: TextProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export const View = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const SafeAreaView = (props: SafeAreaViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

  return <ThemedSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const TextInput = (props: TextInputProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  return <ThemedTextInput style={[{ backgroundColor, color }, style]} {...otherProps} />;
};

export const ThemedFAIcon = (props: IconProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <FontAwesome style={[{ backgroundColor, color }, style]} {...otherProps} />;
};
