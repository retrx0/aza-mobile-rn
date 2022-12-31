import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { BackIcon } from "../../../assets/svg";
import { hp } from "../../common/util/LayoutUtil";
import Colors from "../../constants/Colors";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { useAppThemeColor } from "../../theme/Themed";
// import { Text } from "../../theme/components/Text";
import { View2 as View, Text2 as Text } from "../../theme/Themed";

type BackButtonType = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const BackButton: FC<BackButtonType> = ({ style, onPress }) => {
  const selectedTheme = useAppSelector(selectAppTheme);
  const color = useAppThemeColor(
    { light: Colors.light.text, dark: Colors.dark.text },
    "text",
    selectedTheme
  );
  return (
    <TouchableOpacity style={[styles.backContainer, style]} onPress={onPress}>
      <BackIcon color={color} size={16} />
      <Text style={styles.back}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  back: {
    marginLeft: hp(5),
    fontSize: hp(16),
    fontWeight: "400",
    fontFamily: "Euclid-Circular-A",
  },
  backContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default BackButton;
