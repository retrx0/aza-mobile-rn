import React from "react";
import { View } from "react-native";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp, wp } from "../../common/util/LayoutUtil";
import { TextInput, Text } from "../../theme/Themed";

const InputFormFieldNormal = ({
  value,
  onChangeText,
  placeholderVisible,
  formikProps: { errors, touched },
  type,
  autoFocus,
  onBlur,
}: {
  onChangeText: (text: string) => void;
  onBlur: (e: any) => void;
  autoFocus: boolean;
  value: string;
  placeholderVisible: boolean;
  formikProps: { errors: any; touched: any };
  type: "email" | "firstname" | "surname" | "lastname";
}) => {
  const typeOfEmail = type === "email";

  let EMAIL_REGEX = /^w+(-?w+)*@w+(-?w+)*(.ww+)+$/;

  return (
    <View style={[{ width: "90%", alignSelf: "center", marginBottom: 30 }]}>
      {placeholderVisible ? (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              marginBottom: hp(5),
              fontSize: hp(18),
              fontFamily: "Euclid-Circular-A-Medium",
              fontWeight: "500",
            }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Text>
          <Text style={{ color: "red" }}>*</Text>
        </View>
      ) : (
        <></>
      )}
      <TextInput
        style={[CommonStyles.textInput]}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        autoFocus={autoFocus}
        autoCapitalize="none"
        keyboardType={typeOfEmail ? "email-address" : "default"}
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
