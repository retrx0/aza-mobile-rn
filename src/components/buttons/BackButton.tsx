import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { BackIcon } from "../../../assets/svg";
import { hp, wp } from "../../common/util/utils";
import Colors from "../../constants/Colors";
import { Text } from "../Themed";

const BackButton = (props: { onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.backContainer} onPress={props.onPress}>
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
    marginLeft: hp(15),
    padding: hp(5),
  },
});

export default BackButton;
