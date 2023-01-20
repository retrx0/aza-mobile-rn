/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView,
  SafeAreaView as ThemedSafeAreaView,
  TextInput as ThemedTextInput,
  ScrollView as DefaultScrollView,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ThemedOTPInputView from "@twotalltotems/react-native-otp-input";
import ThemedPhoneInput from "react-native-phone-input";
import { Dimensions } from "react-native";
import { getAppTheme } from ".";
import { useAppSelector } from "../redux";
import { selectAppTheme } from "../redux/slice/themeSlice";

export const useThemeColor = (
  props: { light?: string; dark?: string; system?: string },
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

export const useAppThemeColor = (
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  selectedTheme: "light" | "dark" | "system"
) => {
  const colorScheme = useColorScheme();
  const appTheme = getAppTheme(selectedTheme);

  const colorFromProps = props[appTheme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[appTheme][colorName];
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
export type ScrollViewProps = ThemeProps & DefaultScrollView["props"];
export type SafeAreaViewProps = ThemeProps & ThemedSafeAreaView["props"];
export type OTPInputViewProps = ThemeProps & ThemedOTPInputView["props"];
export type PhoneInputProps = ThemeProps & ThemedPhoneInput["props"];

export const Text = (props: TextProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const selectedTheme = useAppSelector(selectAppTheme);

  const color = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "text",
    selectedTheme
  );

  return (
    <DefaultText
      style={[{ color, fontFamily: "Euclid-Circular-A" }, style]}
      {...otherProps}
    />
  );
};

export const View = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const selectedTheme = useAppSelector(selectAppTheme);
  const backgroundColor = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
    selectedTheme
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const ScrollView = (props: ScrollViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const selectedTheme = useAppSelector(selectAppTheme);
  const backgroundColor = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
    selectedTheme
  );

  return (
    <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />
  );
};

export const SafeAreaView = (props: SafeAreaViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const selectedTheme = useAppSelector(selectAppTheme);
  const backgroundColor = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
    selectedTheme
  );

  return (
    <ThemedSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />
  );
};

export const TextInput = (props: TextInputProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const selectedTheme = useAppSelector(selectAppTheme);

  const appTheme = getAppTheme(selectedTheme);

  const backgroundColor = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "backgroundSecondary",
    selectedTheme
  );
  const color = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "text",
    selectedTheme
  );

  const borderColor = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "border",
    selectedTheme
  );

  const placeholderText = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "secondaryText",
    selectedTheme
  );
  return (
    <ThemedTextInput
      placeholderTextColor={placeholderText}
      style={[{ backgroundColor, color, borderColor }, style]}
      keyboardAppearance={appTheme}
      {...otherProps}
    />
  );
};

export const ThemedFAIcon = (props: IconProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const selectedTheme = useAppSelector(selectAppTheme);
  const backgroundColor = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
    selectedTheme
  );
  const color = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "text",
    selectedTheme
  );

  return (
    <FontAwesome style={[{ backgroundColor, color }, style]} {...otherProps} />
  );
};

export const OTPInput = (props: OTPInputViewProps) => {
  const { style, codeInputFieldStyle, lightColor, darkColor, ...otherProps } =
    props;

  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  const backgroundColor = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "backgroundSecondary",
    selectedTheme
  );
  const color = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "text",
    selectedTheme
  );
  const border = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "border",
    selectedTheme
  );

  return (
    <ThemedOTPInputView
      style={style}
      codeInputFieldStyle={{
        color,
        backgroundColor,
        borderColor: border,
        ...codeInputFieldStyle,
      }}
      keyboardAppearance={appTheme}
      {...otherProps}
    />
  );
};

export const PhoneInput = (props: PhoneInputProps) => {
  const { style, textStyle, lightColor, darkColor, ...otherProps } = props;
  const selectedTheme = useAppSelector(selectAppTheme);
  const backgroundColor = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "backgroundSecondary",
    selectedTheme
  );
  const color = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "text",
    selectedTheme
  );
  const borderColor = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "border",
    selectedTheme
  );

  return (
    <ThemedPhoneInput
      textStyle={[{ color }, textStyle]}
      style={[{ borderColor, backgroundColor }, style]}
      {...otherProps}
    />
  );
};

const { width, height } = Dimensions.get("window");

export const SIZES = {
  // font sizes
  largeTitle: 36,
  font1: width * 0.08,
  font2: width * 0.076,
  font3: width * 0.068,
  font4: width * 0.062,
  font5: width * 0.056,
  font6: width * 0.048,
  font7: width * 0.042,
  font8: width * 0.038,
  font9: width * 0.035,
  font10: width * 0.03,

  // app dimensions
  width,
  height,
};

const appTheme = {
  SIZES,
};
