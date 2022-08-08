import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  View,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { hp, wp } from "./utils";
import * as Colors from "./colors";

export type InputProps = {
  label: string;
  style?: StyleProp<ViewStyle>;
  labelStyle: StyleProp<TextStyle>;
  inputStyle: StyleProp<TextStyle>;
  icon: any;
  isPhone?: boolean;
};

export const Input = ({
  label,
  style,
  labelStyle,
  placeholder,
  inputStyle,
  icon,
  isPhone,
  ...rest
}: InputProps & TextInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      {isPhone ? (
        <View style={[styles.textInput, isPhone && styles.isPhone]}>
          <View style={styles.divider} />
          <TextInput
            placeholder='Your 10-digit phone number'
            style={styles.phoneInput}
            keyboardType='number-pad'
          />
        </View>
      ) : (
        <View>
          <TextInput {...rest} style={[inputStyle]}>
            {placeholder}
          </TextInput>
          <TouchableOpacity>{icon}</TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    color: Colors.darkGrey,
  },
  container: {
    marginTop: hp(20),
  },
  textInput: {
    borderRadius: 9,
    marginTop: hp(7),
    fontSize: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  phoneInput: {
    fontSize: 15,
    paddingRight: wp(10),
  },
  countryCode: {
    color: Colors.Primary,
    fontSize: 15,
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
});
