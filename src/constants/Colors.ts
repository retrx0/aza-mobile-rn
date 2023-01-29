const tintColorLight = "#121212";
const tintColorDark = "#F2F2F2";
const tabIconColorDefault = "#A6A6A6";
const white = "#FFFFFF";
const black = "#000000";

interface IThemeColor {
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
  highlightColor: string;
  disabled: string;
}

interface IThemeGroup {
  light: IThemeColor;
  dark: IThemeColor;
  general: {
    facebook: string;
    google: string;
    apple: string;
    darkGrey: string;
    primary: string;
    grey: string;
    tertiary: string;
    black: string;
    white: string;
    red: string;
    green: string;
    lightGreen: string;
    lightRed: string;
    skeleton: string;
  };
}

const Colors: IThemeGroup = {
  light: {
    text: "#121212",
    mainText: "#4D4D4D",
    secondaryText: "#A6A6A6",
    background: white,
    backgroundSecondary: "#F2F2F2",
    tint: tintColorLight,
    tabIconDefault: tabIconColorDefault,
    tabIconSelected: tintColorLight,
    error: "#FF361A",
    success: "#2AD168",
    separator: "#EAEAEC",
    buttonText: white,
    disabled: "#E7E9EA",
    disabledButtonBackground: "#A6A6A6",
    disabledButtonTextColor: "#CCCCCC",
    borderColor: "#121212",
    highlightColor: "#F2F8FC",
  },
  dark: {
    borderColor: "#A6A6A6",
    text: white,
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
    buttonText: black,
    disabled: "#A6A6A6",
    disabledButtonBackground: "#262626",
    disabledButtonTextColor: "#999999",
    highlightColor: "#313236",
  },
  general: {
    facebook: "#1198F6",
    google: "#EB4235",
    apple: black,
    darkGrey: "#4D4D4D",
    primary: "#121212",
    grey: "#A6A6A6",
    tertiary: "#D7D7DB",
    black: black,
    white: white,
    red: "#FF361A",
    green: "#2A9E17",
    lightGreen: "#EBFCE9",
    lightRed: "#FFE9E5",
    skeleton: "#a4a4a4",
  },
};

export default Colors;
