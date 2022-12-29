import { Text as DefaultText } from "react-native";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { TextProps, useAppThemeColor } from "../Themed";

export const Text = (props: TextProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;

  // const selectedTheme = useAppSelector(selectAppTheme);

  const color = useAppThemeColor(
    { light: lightColor, dark: darkColor },
    "text",
    "system"
  );

  return (
    <DefaultText
      style={[{ color, fontFamily: "Euclid-Circular-A" }, style]}
      {...otherProps}
    />
  );
};
