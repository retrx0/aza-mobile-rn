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
import { Text, useThemeColor } from "../Themed";

type ExitProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const ExitButton = ({ style, onPress }: ExitProps) => {
  const color = useThemeColor(
    { light: Colors.general.black, dark: Colors.dark.text },
    "text"
  );
  return (
    <TouchableOpacity onPress={onPress}>
      <ExitIcon color={color} size={16} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default ExitButton;
