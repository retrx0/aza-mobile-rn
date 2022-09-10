import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { hp } from "../../../../common/util/LayoutUtil";

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
    marginVertical: 10,
  },
});

export const GENDER = [
  {
    label: "Male",
    value: "male",
  },
];
