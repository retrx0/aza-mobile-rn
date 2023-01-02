import React from "react";
import { StyleSheet, TextInputProps, Pressable } from "react-native";
import { SvgUri } from "react-native-svg";

import { SelectIcon } from "../../../../../assets/svg";
import { CountryProps } from "../../../../../types";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import {
  View as View,
  Text2 as Text,
  TextInput,
} from "../../../../theme/Themed";
import useColorScheme from "../../../../hooks/useColorScheme";
import Colors from "../../../../constants/Colors";
import CommonStyles from "../../../../common/styles/CommonStyles";

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
    <View
      lightColor={Colors["light"].backgroundSecondary}
      darkColor={Colors["dark"].backgroundSecondary}
      style={[styles.container]}
    >
      <Pressable style={styles.countryContainer} onPress={onPress}>
        <SvgUri
          style={styles.flag}
          width={"25"}
          height={"15"}
          uri={imageLink!}
        />
        {/* <View style={styles.country}>
          <Text style={styles.countryName}>{short_name}</Text>
        </View> */}
        <Text style={[styles.countryName]}>{code}</Text>
        <View
          lightColor={Colors["light"].backgroundSecondary}
          darkColor={Colors["dark"].backgroundSecondary}
        >
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
      </Pressable>
      <TextInput
        style={[styles.textInput]}
        placeholder="80 11 22"
        keyboardType="number-pad"
        {...rest}
        maxLength={15}
        returnKeyType="done"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  flag: {
    width: wp(15),
    height: hp(15),
    marginRight: wp(10),
  },
  container: {
    flexDirection: "row",
    alignSelf: "center",
    width: "90%",
    padding: hp(10),
    borderWidth: 0.5,
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
    height: hp(30),
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
    width: "60%",
  },
});
