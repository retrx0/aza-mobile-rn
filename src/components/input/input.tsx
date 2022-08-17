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
<<<<<<< HEAD
import { darkGrey, Primary } from "../../common/colors";
import { hp, wp } from "../../common/util/utils";
=======
import Colors from "../../constants/Colors";
import { hp, wp } from "../../common/util/LayoutUtil";
>>>>>>> 3c3de3ccf8ce68a77a835de75831bed65131f8a3

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
          <TextInput placeholder="Your 10-digit phone number" style={styles.phoneInput} keyboardType="number-pad" />
        </View>
      ) : (
        <View>
          <TextInput
            placeholder={placeholder}
            {...rest}
            style={[inputStyle]}></TextInput>
          <TouchableOpacity>{icon}</TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    color: Colors.general.darkGrey,
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
    color: Colors.general.primary,
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
