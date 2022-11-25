import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { CountryProps } from "../../../../../types";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import { View } from "../../../../components/Themed";
import useColorScheme from "../../../../hooks/useColorScheme";

export const CountriesCard = ({
  code,
  short_name,
  name,
  imageLink,
  onPress,
}: CountryProps) => {
  const colorScheme = useColorScheme();

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.countryCard,
          {
            // backgroundColor: colorScheme === "dark" ? "white" : "#dark",
            borderColor: colorScheme === "dark" ? "#E5E5E5" : "#F2F2F2",
          },
        ]}
        onPress={onPress}>
        {imageLink && (
          <Image
            source={{
              uri: imageLink,
              headers: {
                Accept: "*/*",
              },
            }}
            style={styles.flag}
            resizeMode="cover"
          />
        )}
        <Text
          style={[
            styles.countryName,
            {
              // backgroundColor: colorScheme === "dark" ? "white" : "#dark",
              color: colorScheme === "dark" ? "#E5E5E5" : "#000000",
            },
          ]}>
          {code}
        </Text>
        <Text
          style={[
            styles.countryName,
            {
              // backgroundColor: colorScheme === "dark" ? "white" : "#dark",
              color: colorScheme === "dark" ? "#E5E5E5" : "#000000",
            },
          ]}>
          {short_name}
        </Text>
        <Text
          style={[
            styles.countryName,
            {
              // backgroundColor: colorScheme === "dark" ? "white" : "#dark",
              color: colorScheme === "dark" ? "#E5E5E5" : "#000000",
            },
          ]}>
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  countryName: {
    color: "black",
    fontSize: 16,
    marginRight: wp(5),
  },
  countryCard: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    height: hp(40),
    paddingVertical: hp(5),
    marginBottom: hp(10),
  },
  flag: {
    width: wp(15),
    height: hp(15),
    marginRight: wp(12),
  },
});
