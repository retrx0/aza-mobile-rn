import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { BackIcon, ExitIcon } from "../../../assets/svg";
import { hp } from "../../common/util/LayoutUtil";
import Colors from "../../constants/Colors";
import { useAppThemeColor } from "../../theme/Themed";
import { Text } from "../../theme/components/Text";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";

type ExitProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const ExitButton = ({ style, onPress }: ExitProps) => {
  const selectedTheme = useAppSelector(selectAppTheme);
  const color = useAppThemeColor(
    { light: Colors.general.black, dark: Colors.dark.text },
    "text",
    selectedTheme
  );
  return (
    <TouchableOpacity onPress={onPress}>
      <ExitIcon color={color} size={16} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default ExitButton;
