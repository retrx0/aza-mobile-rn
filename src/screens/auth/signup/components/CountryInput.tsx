import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TextInputProps,
  Pressable,
} from "react-native";
import { SelectIcon } from "../../../../../assets/svg";
import { CountryProps } from "../../../../../types";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";

export const CountryBox = ({
  code,
  short_name,
  onPress,
  imageLink,
  id,
  onChangePhoneNumber,
  ...rest
}: CountryProps & TextInputProps) => {
  const colorScheme = useColorScheme();

  return (
    <Pressable
      style={[
        styles.container,
        { borderColor: colorScheme === "dark" ? "#999999" : "#121212" },
        { backgroundColor: colorScheme === "dark" ? "#262626" : "#F2F2F2" },
      ]}
      onPress={onPress}>
      <View style={styles.countryContainer}>
        <Image
          source={{ uri: imageLink }}
          style={styles.flag}
          resizeMode="contain"
        />
        {/* <View style={styles.country}>
          <Text style={styles.countryName}>{short_name}</Text>
        </View> */}
        <Text
          style={[
            styles.countryName,
            { color: colorScheme === "dark" ? "#E7E9EA" : "#000000" },
          ]}>
          {code}
        </Text>
        <View>
          <SelectIcon />
        </View>
        <View
          style={[
            styles.divider,
            {
              backgroundColor: "#D7D7DB",
            },
          ]}
        />
        <TextInput
          style={[
            styles.textInput,
            { color: colorScheme === "dark" ? "#E5E5E5" : "#000000" },
          ]}
          placeholder=""
          keyboardType="number-pad"
          {...rest}
          placeholderTextColor={colorScheme === "dark" ? "#E7E9EA" : "#000000"}
        />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  flag: {
    width: wp(15),
    height: hp(15),
    marginRight: wp(10),
  },
  country: {
    color: "black",
    fontSize: 17,
    paddingHorizontal: wp(2),
  },
  container: {
    flexDirection: "row",
    alignSelf: "center",
    width: "90%",
    padding: hp(10),
    borderWidth: hp(1),
    borderRadius: hp(5),
    marginBottom: hp(40),
    height: hp(55),
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    width: 1,
    height: hp(28),
    marginLeft: wp(10),
    marginRight: hp(10),
  },
  countryName: {
    fontSize: hp(16),
    marginRight: wp(5),
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A-Medium",
  },
  textInput: {
    fontSize: hp(16),
    fontFamily: "Euclid-Circular-A-Medium",
    fontWeight: "500",
  },
});
