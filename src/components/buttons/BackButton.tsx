import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { BackIcon } from "../../../assets/svg";
import { hp, wp } from "../../common/util/utils";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Text, useThemeColor } from "../Themed";

const BackButton = (props: { onPress: () => void }) => {
  const color = useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, "text");
  return (
    <TouchableOpacity style={styles.backContainer} onPress={props.onPress}>
      <BackIcon color={color} size={14} />
      <Text style={styles.back}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  back: {
    marginLeft: hp(10),
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20.29,
  },
  backContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: hp(15),
    padding: hp(5),
  },
});

export default BackButton;
