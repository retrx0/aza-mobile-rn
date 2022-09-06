import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import { DropIcon } from "../../../../../assets/svg";
import { CountryProps } from "../../../../../types";
import { hp, wp } from "../../../../common/util/LayoutUtil";

export const CountryBox = ({
  code,
  short_name,
  onPress,
  imageLink,
  // id,
  ...rest
}: CountryProps & TextInputProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.countryContainer}>
        <Image
          source={{ uri: imageLink }}
          style={styles.flag}
          resizeMode='contain'
        />
        <View style={styles.country}>
          <Text style={styles.countryName}>{short_name}</Text>
        </View>

        <View style={styles.divider} />
        <Text style={styles.countryName}>{code}</Text>
        <TextInput
          style={styles.textInput}
          placeholder='phone number'
          keyboardType='number-pad'
          {...rest}
        />
      </View>

      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <DropIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  flag: {
    width: wp(29),
    height: hp(29),
    marginRight: wp(12),
  },
  country: {
    color: "black",
    fontSize: 17,
    paddingHorizontal: wp(2),
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 8,
    height: hp(55),
    marginVertical: hp(30),
    paddingHorizontal: wp(15),
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
  },
  divider: {
    width: 1,
    backgroundColor: "grey",
    height: hp(18),
    marginRight: wp(8),
  },
  countryName: {
    color: "black",
    fontSize: 17,
    marginRight: wp(5),
  },
  textInput: {
    marginRight: wp(5),
    width: wp(140),
    paddingRight: wp(5),
    fontSize: 18,
    alignItems: "center",
  },
});
