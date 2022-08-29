import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Input } from "../../../../components/input/input";

export default function ImageInput() {
  return (
    <View style={styles.container}>
      <Input
        icon={null}
        keyboardType="phone-pad"
        inputStyle={styles.input}
        labelStyle={null}
        label="To"
        placeholder="MTN"
      />

      <Image style={styles.img} source={require("../../../../assets/images/mtn.png")} />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#EAEAEC",
    borderBottomWidth: 1,
    height: 40,
    minWidth: "100%",
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
    marginBottom: 10,
  },
});
