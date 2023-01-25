import { View, StyleSheet, Image, StyleProp, TextStyle } from "react-native";
import React from "react";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import { hp } from "../../../../common/util/LayoutUtil";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { getAppTheme } from "../../../../theme";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { useAppSelector } from "./../../../../redux";
import { TextInputProps } from "../../../../theme/Themed";

type ImagePropsType = {
  label: string;
  placeholder: string;
  source: any;
  icon: any;
  placeholderStyle?: StyleProp<TextStyle>;
  value: string;
};

export const ImageInput = ({
  label,
  source,
  placeholder,
  value,
  ...props
}: ImagePropsType & TextInputProps) => {
  const colorScheme = useColorScheme();
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  return (
    <View style={styles.container}>
      <UnderlinedInput
        inputStyle={[
          styles.input,
          {
            borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
            backgroundColor: Colors[appTheme].background,
            color: Colors[appTheme].mainText,
          },
        ]}
        labelStyle={{
          fontFamily: "Euclid-Circular-A",
          fontWeight: "400",
          fontSize: hp(16),
        }}
        label={label}
        placeholder={placeholder}
        value={value}
        {...props}
      />

      <Image style={styles.img} source={source} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: "#EAEAEC",
    borderBottomWidth: 0.3,
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
