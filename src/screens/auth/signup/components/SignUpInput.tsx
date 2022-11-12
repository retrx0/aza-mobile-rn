import React, { useState } from "react";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import { SignUpScreenProps } from "../../../../../types";
import Button from "../../../../components/buttons/Button";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import RNPickerSelect from "react-native-picker-select";
import { Gender } from "../../../../constants/Gender";
import { TextHeader } from "../../../../components/text/textHeader";
import { SelectIcon } from "../../../../../assets/svg";
import useColorScheme from "../../../../hooks/useColorScheme";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { signUpValidationSchema } from "../components/SignupValidation";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import {
  registerUser,
  selectNewUser,
  setFirstName,
  setLastName,
  setNewUser,
} from "../../../../redux/slice/newUserSlice";
import InputFormFieldNormal from "../../../../components/input/InputFormFieldNormal";

const SignUpProfile = ({
  navigation,
}: SignUpScreenProps<"SignUpProfileSetup">) => {
  const [gender, setGender] = useState("unknown");
  const placeholder = {
    label: "Select Gender",
    value: null,
    color: Colors.general.black,
  };
  const colorScheme = useColorScheme();

  const dispatch = useAppDispatch();

  const newUser = useAppSelector(selectNewUser);
  const { phone, token, thirdPartyEmailSignUp } = newUser;

  return (
    <>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          firstname: "",
          lastname: "",
        }}
        onSubmit={(values) => console.log(values)}
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
            {/* <View
              style={[{ width: "90%", alignSelf: "center", marginBottom: 30 }]}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginBottom: hp(5) }}>First name</Text>
                <Text style={{ color: "red" }}>*</Text>
              </View>
              <TextInput
                style={[
                  styles.textInput,
                  { backgroundColor: Colors[colorScheme].backgroundSecondary },
                  { borderColor: Colors[colorScheme].border },
                  { color: Colors[colorScheme].text },
                ]}
                onChangeText={handleChange("firstname")}
                onBlur={handleBlur("firstname")}
                value={values.firstname}
                placeholderTextColor={Colors[colorScheme].text}
              />
              {errors.firstname && touched.firstname && (
                <Text style={styles.errorText}>{errors.firstname}</Text>
              )}
            </View> */}

            {/* <View
              style={[{ width: "90%", alignSelf: "center", marginBottom: 30 }]}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginBottom: hp(5) }}>Last name</Text>
                <Text style={{ color: "red" }}>*</Text>
              </View>
              <TextInput
                style={[
                  styles.textInput,
                  { backgroundColor: Colors[colorScheme].backgroundSecondary },
                  { borderColor: Colors[colorScheme].border },
                  { color: Colors[colorScheme].text },
                ]}
                onChangeText={handleChange("lastname")}
                onBlur={handleBlur("lastname")}
                value={values.lastname}
                placeholderTextColor={Colors[colorScheme].text}
              />
              {errors.lastname && touched.lastname && (
                <Text style={styles.errorText}>{errors.lastname}</Text>
              )}
            </View> */}

            <InputFormFieldNormal
              placeholderVisible
              onChangeText={handleChange("firstname")}
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
              value={values.lastname}
              type="lastname"
              formikProps={{
                errors: errors.lastname,
                touched: touched.lastname,
              }}
              autoFocus={false}
            />

            {/* <View
              style={[{ width: "90%", alignSelf: "center", marginBottom: 30 }]}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginBottom: hp(5) }}>Email</Text>
                <Text style={{ color: "red" }}>*</Text>
              </View>
              <TextInput
                style={[
                  styles.textInput,
                  { backgroundColor: Colors[colorScheme].backgroundSecondary },
                  { borderColor: Colors[colorScheme].border },
                  { color: Colors[colorScheme].text },
                ]}
                autoCapitalize="none"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
                placeholderTextColor={Colors[colorScheme].text}
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View> */}

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
                onUpArrow={() => true}
                onDownArrow={() => true}
                onValueChange={(value) => {
                  setGender(value);
                }}
                value={gender}
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
            </View>
            <Button
              title="Continue"
              onPressButton={() => {
                handleSubmit();
                dispatch(
                  setNewUser({
                    firstname: values.firstname,
                    lastname: values.lastname,
                    email: newUser.email,
                    gender: gender,
                    isUsePasscodeAsPin: newUser.isUsePasscodeAsPin,
                    createdPasscode: newUser.createdPasscode,
                    thirdPartyEmailSignUp: thirdPartyEmailSignUp,
                  })
                );
                dispatch(setFirstName(values.firstname));
                dispatch(setLastName(values.lastname));
                navigation.navigate("SignUpPassword", {
                  passwordScreenType: "Create",
                });
              }}
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
              // disabled={!isValid}
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
