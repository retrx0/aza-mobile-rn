import React from "react";
import { StyleSheet, View } from "react-native";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp } from "../../common/util/LayoutUtil";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Text, TextInput } from "../Themed";

const InputFormFieldNormal = ({
  value,
  onChangeText,
  placeholderVisible,
  formikProps: { errors, touched },
  type,
  autoFocus,
}: {
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  autoFocus: boolean;
  value: string;
  placeholderVisible: boolean;
  formikProps: { errors: any; touched: any };
  type: "email" | "firstname" | "lastname";
}) => {
  const colorScheme = useColorScheme();

  const typeOfEmail = type === "email";

  let EMAIL_REGEX = "/^w+(-?w+)*@w+(-?w+)*(.ww+)+$/";

  const validateEmail = (email: string): boolean => {
    // return EMAIL_REGEX.test(email);
    return false;
  };

  return (
    <View style={[{ width: "90%", alignSelf: "center", marginBottom: 30 }]}>
      {placeholderVisible ? (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginBottom: hp(5) }}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Text>
          <Text style={{ color: "red" }}>*</Text>
        </View>
      ) : (
        <></>
      )}
      <TextInput
        style={[
          CommonStyles.textInput,
          {
            backgroundColor: Colors[colorScheme].backgroundSecondary,
            borderColor: Colors[colorScheme].border,
            color: Colors[colorScheme].text,
          },
        ]}
        autoFocus={autoFocus}
        autoCapitalize="none"
        onChangeText={(e) => onChangeText(e)}
        value={value}
        keyboardType={typeOfEmail ? "email-address" : "default"}
        placeholderTextColor={Colors[colorScheme].secondaryText}
        autoComplete={
          typeOfEmail
            ? "email"
            : type === "firstname"
            ? "name-given"
            : "name-family"
        }
        textContentType={
          typeOfEmail
            ? "emailAddress"
            : type === "firstname"
            ? "givenName"
            : "familyName"
        }
      />
      {errors && touched && (
        <Text style={CommonStyles.errorText}>{errors}</Text>
      )}
    </View>
  );
};

export default InputFormFieldNormal;
