import React from "react";
import {
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { hp, wp } from "../../common/util/LayoutUtil";
import Colors from "../../constants/Colors";
import { TextInput, View as View, Text2 as Text } from "../../theme/Themed";

export type InputProps = {
  label: string;
  style?: StyleProp<ViewStyle>;
  labelStyle: StyleProp<TextStyle>;
  inputStyle: StyleProp<TextStyle>;
  icon: any;
  isPhone?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
};

export const UnderlinedInput = ({
  label,
  style,
  labelStyle,
  placeholder,
  inputStyle,
  icon,
  isPhone,
  containerStyle,
  placeholderStyle,
  ...rest
}: InputProps & TextInputProps) => {
  return (
    <View style={[styles.container, style, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      {isPhone ? (
        <View style={[styles.textInput, isPhone && styles.isPhone]}>
          <View style={styles.divider} />
          <TextInput
            placeholder="Your 10-digit phone number"
            style={styles.phoneInput}
            keyboardType="number-pad"
          />
        </View>
      ) : (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            placeholder={placeholder}
            {...rest}
            style={[inputStyle, {}, placeholderStyle]}
          ></TextInput>
          <TouchableOpacity>{icon}</TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: hp(16),
    fontWeight: "400",
    lineHeight: hp(17.75),
    marginBottom: hp(12),
    fontFamily: "Euclid-Circular-A",
  },
  container: {
    marginTop: hp(10),
    marginBottom: hp(10),
  },
  textInput: {
    borderRadius: 9,
    marginTop: hp(7),
    fontSize: hp(17),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  phoneInput: {
    fontSize: 15,
    paddingRight: wp(10),
  },
  countryCode: {
    color: Colors.general.primary,
    fontSize: hp(17),
    marginRight: wp(7),
  },

  divider: {
    width: 1,
    height: hp(18),
    marginRight: wp(7),
  },
  isPhone: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 36,
    width: 36,
    borderRadius: 36,
  },
});
