import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Input } from "../../../../components/input/input";
import { Mtn } from "../../../../../assets/images";
import { hp } from "../../../../common/util/LayoutUtil";

export default function ImageInput() {
  return (
    <View style={styles.container}>
      <Input
        icon={null}
        keyboardType="phone-pad"
        inputStyle={styles.input}
        labelStyle={{
          fontFamily: "Euclid-Circular-A-Medium",
          fontWeight: "600",
          fontSize: hp(16),
        }}
        label="To"
        placeholder="MTN"
      />

      <Image style={styles.img} source={Mtn} />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderColor: "#EAEAEC",
    borderBottomWidth: 1,
    minWidth: "100%",
    fontFamily: "Euclid-Circular-A-Medium",
    fontWeight: "600",
    fontSize: hp(16),
  },
  container: {
    flexDirection: "row",
    position: "relative",
    width: "100%",
    marginBottom: 20,
  },
  img: {
    height: 36,
    width: 36,
    borderRadius: 36,
    position: "absolute",
    right: 0,
    bottom: 0,
    marginBottom: 20,
  },
});
