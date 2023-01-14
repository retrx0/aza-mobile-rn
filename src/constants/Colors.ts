const tintColorLight = "#121212";
const tintColorDark = "#fff";
const tabIconColorDefault = "#A6A6A6";

interface ThemeColor {
  text: string;
  mainText: string;
  secondaryText: string;
  background: string;
  backgroundSecondary: string;
  tint: string;
  tabIconDefault: string;
  tabIconSelected: string;
  error: string;
  success: string;
  separator: string;
  buttonText: string;
  disabledButtonBackground: string;
  disabledButtonTextColor: string;
  borderColor: string;
}

export default {
  light: {
    text: "#121212",
    mainText: "#4D4D4D",
    secondaryText: "#A6A6A6",
    background: "#ffffff",
    backgroundSecondary: "#F2F2F2",
    tint: tintColorLight,
    tabIconDefault: tabIconColorDefault,
    tabIconSelected: tintColorLight,
    error: "#FF361A",
    success: "#2AD168",
    separator: "#EAEAEC",
    border: "#121212",
    button: "#121212",
    buttonText: "#fff",
    disabled: "#E7E9EA",
    unlock: "#2A9E17",
    mature: "#EBFCE9",
    Text: "#000000",
    disabledButton: "#A6A6A6",
    disabledButtonText: "#CCCCCC",
    BACKGROUND: " #E5E5E5",
    borderColor: "#EAEAEC",
  },
  dark: {
    borderColor: "#262626",
    text: "#FFFFFF",
    mainText: "#E7E9EA",
    secondaryText: "#999999",
    background: "#121212",
    backgroundSecondary: "#3A3D42",
    tint: tintColorDark,
    tabIconDefault: tabIconColorDefault,
    tabIconSelected: tintColorDark,
    error: "#FF361A",
    success: "#2AD168",
    separator: "#484B51",
    border: "#E7E9EA",
    button: "#E7E9EA",
    buttonText: "#000000",
    disabled: "#A6A6A6",
    unlock: "#E7E9EA",
    mature: "#061603",
    Text: "#999999",
    disabledButton: "#262626",
    disabledButtonText: "#999999",
    BACKGROUND: " #3A3D42",
  },
  general: {
    text: "#FFFFFF",
    facebook: "#1198F6",
    google: "#EB4235",
    apple: "#000000",
    darkGrey: "#4D4D4D",
    primary: "#121212",
    grey: "#A6A6A6",
    secondary: "#FFFFFF",
    tertiary: "#D7D7DB",
    black: "#000000",
    white: "#ffffff",
    red: "#FF361A",
    green: "#2A9E17",
    lightGreen: "#EBFCE9",
    lightRed: "#FFE9E5",
    background: " #E5E5E5",
    general: "#EAEAEC",
  },
};
