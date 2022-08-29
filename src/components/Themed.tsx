/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView,
  SafeAreaView as ThemedSafeAreaView,
  TextInput as ThemedTextInput,
  ScrollView as DefaultScrollView
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ThemedOTPInputView from "@twotalltotems/react-native-otp-input";
import ThemedPhoneInput from "react-native-phone-input";

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
export type OTPInputViewProps = ThemeProps & ThemedOTPInputView["props"];
export type PhoneInputProps = ThemeProps & ThemedPhoneInput["props"];

export const Text = (props: TextProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color, fontFamily: "Euclid-Circular-A" }, style]} {...otherProps} />;
};

export const View = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const ScrollView = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

  return <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const SafeAreaView = (props: SafeAreaViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

  return <ThemedSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const TextInput = (props: TextInputProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "backgroundSecondary");
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  return <ThemedTextInput style={[{ backgroundColor, color }, style]} {...otherProps} />;
};

export const ThemedFAIcon = (props: IconProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <FontAwesome style={[{ backgroundColor, color }, style]} {...otherProps} />;
};

export const OTPInput = (props: OTPInputViewProps) => {
  const { style, codeInputFieldStyle, lightColor, darkColor, ...otherProps } =
    props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "backgroundSecondary"
  );
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const border = useThemeColor(
    { light: lightColor, dark: darkColor },
    "border"
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
      {...otherProps}
    />
  );
};

export const PhoneInput = (props: PhoneInputProps) => {
  const { style, textStyle, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "backgroundSecondary");
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, "border");

  return (
    <ThemedPhoneInput
      textStyle={[{ color }, textStyle]}
      style={[{ borderColor, backgroundColor }, style]}
      {...otherProps}
    />
  );
};
