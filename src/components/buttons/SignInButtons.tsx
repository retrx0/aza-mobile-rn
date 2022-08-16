import React from "react";
import { SocialSignInProps } from "../../../types";
import { StyleSheet } from "react-native";
import { TouchableOpacity, Text } from "react-native";
import { hp, wp } from "../../common/utils";
import { Primary, secondary } from "../../common/colors";

export const SocialSigInCard = ({
  icon,
  onPress,
  connect,
}: SocialSignInProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.signupButtons]}
      activeOpacity={0.8}>
      {icon}
      <Text style={styles.connect}>{connect}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  connect: {
    fontSize: hp(14),
    lineHeight: hp(17.75),
    fontWeight: "500",
    color: secondary,
    marginLeft: hp(50),
  },
  signupButtons: {
    width: wp(340),
    height: hp(50),
    borderRadius: 25,
    borderColor: "grey",
    borderWidth: 1,
    backgroundColor: Primary,
    marginVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: hp(20),
  },
});

// { backgroundColor: showBackgroundcolor(icon)[0] },
