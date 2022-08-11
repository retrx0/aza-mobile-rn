import React from "react";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../../../assets/svg";
import { SocialSignInProps } from "../../../types";
import { StyleSheet } from "react-native";
import { TouchableOpacity, Text } from "react-native";
import { hp, wp } from "../../common/utils";

export type showBackgroundcolorProp = {
  showBackgroundcolor: {};
};

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

export const SocialSignInList = [
  {
    connect: "Connect Apple Account",
    // icon: <AppleIcon />,
  },
  {
    connect: "Connect with Facebook",
    // icon: <FacebookIcon />,
  },
  {
    connect: "Connect Google Account",
    // icon: <GoogleIcon />,
  },
];
<<<<<<< HEAD:src/screens/signIn/signInCard.tsx
=======

type SocialSignInProps = {
  icon: undefined;
  onPress: () => void;
  style: undefined;
  connect: undefined;
};

export const SocialSigInCard = ({
  icon,
  onPress,
  style,
  connect,
}: showBackgroundcolorProp & SocialSignInProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.signupButtons}>
      {icon}
      <Text>{connect}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signupButtons: {
    height: hp(50),
    borderRadius: 25,
    borderColor: "grey",
    borderWidth: 1,
    backgroundColor: "black",
    marginVertical: 10,
  },
});
