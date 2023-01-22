import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { SvgUri } from "react-native-svg";
import { CountryProps } from "../../../../../types";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import { View, Text } from "../../../../theme/Themed";
import Colors from "../../../../constants/Colors";
import { getAppTheme } from "../../../../theme";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { useAppSelector } from "../../../../redux";

export const CountriesCard = ({
  code,
  short_name,
  name,
  imageLink,
  onPress,
}: CountryProps) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.countryCard,
          {
            borderColor: Colors.general.grey,
          },
        ]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <SvgUri
          style={styles.flag}
          width={"25"}
          height={"15"}
          uri={imageLink ? imageLink : ""}
        />

        <Text style={[styles.countryName]}>{`(${code})`}</Text>
        {/* <Text style={[styles.countryName]}>{short_name}</Text> */}
        <Text style={[styles.countryName]}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  countryName: {
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
    marginRight: wp(10),
  },
});
