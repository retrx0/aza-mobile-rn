import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { BackIcon } from "../../../assets/svg";
import { hp } from "../../common/util/utils";
import Colors from "../../constants/Colors";
import { Text } from "../Themed";

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.backContainer}>
      <BackIcon />
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
    color: Colors.general.darkGrey,
  },
  backContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default BackButton;
