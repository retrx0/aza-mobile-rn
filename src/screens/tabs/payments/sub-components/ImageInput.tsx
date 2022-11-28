import {
  View,
  Text,
  StyleSheet,
  Image,
  ImagePropTypes,
  StyleProp,
  TextStyle,
} from "react-native";
import React from "react";
import { Input } from "../../../../components/input/input";
import { Mtn } from "../../../../../assets/images";
import { hp } from "../../../../common/util/LayoutUtil";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";

type ImagePropsType = {
  label: string;
  placeholder: string;
  source: any;
  icon: any;
  placeholderStyle?: StyleProp<TextStyle>;
};

export const ImageInput = ({
  label,
  source,
  placeholder,
  placeholderStyle,
}: ImagePropsType) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Input
        icon={null}
        keyboardType="default"
        placeholderTextColor={colorScheme === "dark" ? "#E7E9EA" : "#000000"}
        inputStyle={[
          styles.input,
          {
            borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
          },
        ]}
        labelStyle={{
          fontFamily: "Euclid-Circular-A",
          fontWeight: "400",
          fontSize: hp(16),
          color: colorScheme === "dark" ? "#999999" : "#000000",
        }}
        label={label}
        placeholder={placeholder}
      />

      <Image style={styles.img} source={source} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: "#EAEAEC",
    borderBottomWidth: 1,
    minWidth: "100%",
    fontFamily: "Euclid-Circular-A",
    fontWeight: "500",
    fontSize: hp(16),
  },
  container: {
    flexDirection: "row",
    position: "relative",
    width: "100%",
    marginBottom: 20,
  },
  img: {
    height: 45,
    width: 45,
    borderRadius: 36,
    position: "absolute",
    right: 0,
    bottom: 0,
    marginBottom: 20,
  },
});
