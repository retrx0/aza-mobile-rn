import React from "react";
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet, TextInputProps } from "react-native";
import { Flag, SelectArrow } from "../../../assets/svg";
import { hp, wp } from "../../common/util/utils";
// import * as Colors from "../common/colors";
import { CountryProps } from "../../../types";

export const CountryBox = ({ code, onPress, imageLink, id, ...rest }: CountryProps & TextInputProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.countryContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Flag />
          <Text style={styles.countryCode}>+234</Text>
          <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <SelectArrow />
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <TextInput style={styles.textInput} placeholder="phone number" keyboardType="number-pad" {...rest} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flag: {
    width: wp(29),
    height: hp(29),
    // marginRight: wp(12),
  },
  country: {
    color: "black",
    fontSize: 17,
    paddingHorizontal: wp(2),
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    height: hp(50),
    paddingHorizontal: wp(15),
    width: wp(340),
    alignSelf: "center",
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
  },
  divider: {
    width: 1,
    backgroundColor: "grey",
    height: hp(30),
    marginRight: wp(12),
    marginLeft: hp(12),
  },
  countryCode: {
    color: "#4D4D4D",
    fontSize: hp(16),
    marginRight: wp(5),
    marginLeft: hp(5),
    fontWeight: "400",
  },
  textInput: {
    marginRight: wp(5),
    width: wp(140),
    paddingRight: wp(5),
    fontSize: 18,
    alignItems: "center",
  },
});
