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
import { Text, useThemeColor } from "../Themed";

type BackButtonType = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const BackButton: FC<BackButtonType> = ({ style, onPress }) => {
  const color = useThemeColor(
    { light: Colors.light.text, dark: Colors.dark.text },
    "text"
  );
  return (
    <TouchableOpacity style={[styles.backContainer, style]} onPress={onPress}>
      <BackIcon color={color} size={14} />
      <Text style={styles.back}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  back: {
    marginLeft: hp(10),
    fontSize: hp(16),
    fontWeight: "400",
    lineHeight: 20.29,
    fontFamily: "Euclid-Circular-A",
  },
  backContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default BackButton;
