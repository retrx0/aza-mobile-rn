import { View as DefaultView } from "react-native";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { ViewProps, useAppThemeColor } from "../Themed";

export const View = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;

  // const selectedTheme = useAppSelector(selectAppTheme);
  const backgroundColor = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
    "system"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};
