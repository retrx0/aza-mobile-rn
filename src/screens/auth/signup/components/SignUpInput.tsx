import React, { useState } from "react";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import { SignUpScreenProps } from "../../../../../types";
import Button from "../../../../components/buttons/Button";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import RNPickerSelect from "react-native-picker-select";
import { FEMALE, Gender, MALE } from "../../../../constants/Gender";
import { TextHeader } from "../../../../components/text/textHeader";
import { SelectIcon } from "../../../../../assets/svg";
import useColorScheme from "../../../../hooks/useColorScheme";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import {
  registerUser,
  selectNewUser,
  setFirstName,
  setLastName,
  setNewUser,
} from "../../../../redux/slice/newUserSlice";
import InputFormFieldNormal from "../../../../components/input/InputFormFieldNormal";
import * as yup from "yup";

const SignUpProfile = ({
  navigation,
}: SignUpScreenProps<"SignUpProfileSetup">) => {
  const placeholder = {
    label: "Select Gender",
    value: "unknown",
    key: -1,
    color: Colors.general.black,
  };
  const colorScheme = useColorScheme();

  const dispatch = useAppDispatch();

  const newUser = useAppSelector(selectNewUser);
  const { phone, token, thirdPartyEmailSignUp } = newUser;

  const signUpValidationSchema = yup.object().shape({
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
    gender: yup
      .string()
      .required("Please select a gender")
      .oneOf([MALE, FEMALE]),
  });

  return (
    <>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          firstname: "",
          lastname: "",
          gender: "",
        }}
        onSubmit={(values) => {
          dispatch(
            setNewUser({
              firstname: values.firstname,
              lastname: values.lastname,
              email: newUser.email,
              gender: values.gender,
              isUsePasscodeAsPin: newUser.isUsePasscodeAsPin,
              createdPasscode: newUser.createdPasscode,
              thirdPartyEmailSignUp: thirdPartyEmailSignUp,
            })
          );
          navigation.navigate("SignUpPassword", {
            passwordScreenType: "Create",
          });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <>
            <InputFormFieldNormal
              placeholderVisible
              onChangeText={handleChange("firstname")}
              onBlur={handleBlur("firstname")}
              value={values.firstname}
              type="firstname"
              formikProps={{
                errors: errors.firstname,
                touched: touched.firstname,
              }}
              autoFocus
            />

            <InputFormFieldNormal
              placeholderVisible
              onChangeText={handleChange("lastname")}
              onBlur={handleBlur("lastname")}
              value={values.lastname}
              type="lastname"
              formikProps={{
                errors: errors.lastname,
                touched: touched.lastname,
              }}
              autoFocus={false}
            />
            <TextHeader
              label="Gender"
              style={[
                CommonStyles.genderstyle,
                { color: Colors[colorScheme].text },
              ]}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "90%",
                backgroundColor: "#F2F2F2",
                alignSelf: "center",
                paddingHorizontal: wp(10),
                borderRadius: 5,
                marginTop: hp(7),
                paddingVertical: hp(15),
                justifyContent: "space-between",
              }}
            >
              <RNPickerSelect
                placeholder={placeholder}
                onValueChange={(value) => {
                  handleChange("gender")(value);
                  console.log(values.gender);
                }}
                value={values.gender}
                items={Gender}
                pickerProps={{
                  style: {
                    backgroundColor: Colors[colorScheme].backgroundSecondary,
                  },
                  itemStyle: { color: Colors[colorScheme].text },
                }}
                style={{
                  placeholder: {
                    fontSize: hp(16),
                    lineHeight: hp(20),
                    fontFamily: "Euclid-Circular-A",
                    color: Colors.general.black,
                    fontWeight: "400",
                  },
                }}
              />
              {errors.gender && touched.gender && (
                <Text style={CommonStyles.errorText}>{errors}</Text>
              )}
            </View>
            <Button
              title="Continue"
              onPressButton={handleSubmit}
              styleText={{
                color: Colors[colorScheme].buttonText,
              }}
              style={[
                {
                  backgroundColor: Colors[colorScheme].button,
                },
                CommonStyles.container,
                { bottom: hp(60) },
              ]}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </>
  );
};

export default SignUpProfile;

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 15,
    fontSize: hp(18),
    fontFamily: "Euclid-Circular-A",
  },
  errorText: {
    fontSize: hp(14),
    color: "red",
    marginTop: 5,
  },
});
