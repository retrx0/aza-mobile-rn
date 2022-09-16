import React, { useState } from "react";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import { SignUpScreenProps } from "../../../../../types";
import Button from "../../../../components/buttons/Button";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import RNPickerSelect from "react-native-picker-select";
import { GENDER } from "../../../../constants/Gender";
import { TextHeader } from "../../../../components/text/textHeader";
import { SelectIcon } from "../../../../../assets/svg";
import useColorScheme from "../../../../hooks/useColorScheme";
import { StyleSheet, TextInput } from "react-native";
import { Formik } from "formik";
import { signUpValidationSchema } from "../components/SignupValidation";

const SignUpProfile = ({
  navigation,
}: SignUpScreenProps<"SignUpProfileSetup">) => {
  const [gender, setGender] = useState(GENDER);
  const placeholder = {
    label: "Select Gender",
    value: null,
    color: Colors.general.black,
    icon: { SelectIcon },
  };
  const colorScheme = useColorScheme();

  return (
    <>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          Firstname: "Chiazondu",
          Lastname: "Joseph",
          email: "chiazo@examplemail.com",
        }}
        onSubmit={(values) => console.log(values)}>
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
            <View
              style={[{ width: "90%", alignSelf: "center", marginBottom: 30 }]}>
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
                onChangeText={handleChange("Firstname")}
                onBlur={handleBlur("Firstname")}
                value={values.Firstname}
                placeholderTextColor={Colors[colorScheme].text}
              />
              {errors.Firstname && touched.Firstname && (
                <Text style={styles.errorText}>{errors.Firstname}</Text>
              )}
            </View>

            <View
              style={[{ width: "90%", alignSelf: "center", marginBottom: 30 }]}>
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
                onChangeText={handleChange("Lastname")}
                onBlur={handleBlur("Lastname")}
                value={values.Lastname}
                placeholderTextColor={Colors[colorScheme].text}
              />
              {errors.Lastname && touched.Lastname && (
                <Text style={styles.errorText}>{errors.Lastname}</Text>
              )}
            </View>

            <View
              style={[{ width: "90%", alignSelf: "center", marginBottom: 30 }]}>
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
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
                placeholderTextColor={Colors[colorScheme].text}
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

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
                width: "100%",
              }}>
              <RNPickerSelect
                placeholder={placeholder}
                onValueChange={(value) => {
                  setGender(value);
                  console.log(value);
                }}
                value={gender}
                items={GENDER}
                style={{
                  viewContainer: {
                    paddingHorizontal: wp(10),
                    width: "90%",
                    height: hp(50),
                    borderRadius: 5,
                    marginTop: hp(7),
                    marginLeft: hp(20),
                    paddingVertical: hp(15),
                    alignSelf: "center",
                    backgroundColor: "#F2F2F2",
                  },
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
                console.log(values);
                handleSubmit(),
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
    fontSize: 16,
    fontFamily: "Euclid-Circular-A",
  },
  errorText: {
    fontSize: 10,
    color: "red",
    marginTop: 5,
  },
});
