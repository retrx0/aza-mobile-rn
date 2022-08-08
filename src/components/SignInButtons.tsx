import React from "react";
import { SocialSignInProps } from "../../types";
import { StyleSheet } from "react-native";
import { TouchableOpacity, Text } from "react-native";
import { hp, wp } from "../common/utils";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../../assets/svg";
import * as Colors from "../common/colors";

const showBackgroundcolor = (icon: any) => {
  switch (icon) {
    case (<AppleIcon />):
      return "black";
    case (<FacebookIcon />):
      return "blue";
    case (<GoogleIcon />):
      return "red";
  }
};

export const SocialSignInCard = ({
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
    color: Colors.secondary,
    marginLeft: hp(50),
  },
  signupButtons: {
    width: wp(340),
    height: hp(50),
    borderRadius: hp(25),
    backgroundColor: Colors.Primary,
    marginVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: hp(20),
  },
});

// { backgroundColor: showBackgroundcolor(icon)[0] },
