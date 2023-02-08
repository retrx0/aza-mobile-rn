import React, { useState } from "react";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { View as View, Text as Text } from "../../../../theme/Themed";
import Colors from "../../../../constants/Colors";
import { SignUpScreenProps } from "../../../../../types";
import Button from "../../../../components/buttons/Button";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import { Picker } from "@react-native-picker/picker";
import { FEMALE, Gender, MALE } from "../../../../constants/Gender";
import { TextHeader } from "../../../../components/text/textHeader";
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

  const dispatch = useAppDispatch();

  const newUser = useAppSelector(selectNewUser);
  const { phoneNumber, token, thirdPartyEmailSignUp } = newUser;

  const signUpValidationSchema = yup.object().shape({
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
    gender: yup
      .string()
      // .required("Please select a gender")
      .oneOf([MALE, FEMALE]),
  });

  return (
    <>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          firstname: "",
          lastname: "",
          gender: "male",
        }}
        onSubmit={(values) => {
          dispatch(
            setNewUser({
              firstName: values.firstname,
              lastName: values.lastname,
              emailAddress: newUser.emailAddress,
              gender: values.gender,
              isUsePasscodeAsPin: newUser.isUsePasscodeAsPin,
              createdPasscode: newUser.createdPasscode,
              thirdPartyEmailSignUp: thirdPartyEmailSignUp,
              phoneNumber: phoneNumber,
              pushToken: newUser.pushToken,
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
            {/* <TextHeader label="Gender" style={[CommonStyles.genderstyle]} /> */}
            {/* <View
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
              <Picker
                placeholder={"Gender"}
                prompt="Gender"
                onValueChange={(value) => {
                  handleChange("gender")(value.toString());
                  console.log(values.gender);
                }}
                selectedValue={"male"}
                style={{ height: 20 }}
              >
                <Picker.Item enabled label="Male" value={"male"} />
                <Picker.Item enabled label="Female" value={"female"} />
              </Picker>
              {errors.gender && touched.gender && (
                <Text style={CommonStyles.errorText}>{errors}</Text>
              )}
            </View> */}
            <Button
              title="Continue"
              onPressButton={handleSubmit}
              styleText={{}}
              style={[CommonStyles.container, { bottom: hp(60) }]}
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
