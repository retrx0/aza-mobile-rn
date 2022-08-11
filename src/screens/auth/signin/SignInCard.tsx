import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity, Text } from "react-native";
import { hp, wp } from "../../../common/utils";

export type showBackgroundcolorProp = {
  showBackgroundcolor: {};
};

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

export const GENDER = [
  {
    label: "Male",
    value: "male",
  },
];
