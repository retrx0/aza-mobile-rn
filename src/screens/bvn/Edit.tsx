import React from "react";
import CommonStyles from "../../common/styles/CommonStyles";
import HideKeyboardOnTouch from "../../common/util/HideKeyboardOnTouch";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { useAppSelector } from "../../redux";
import { getAppTheme } from "../../theme";
import { CommonScreenProps } from "../../common/navigation/types";
import InputFormFieldNormal from "../../components/input/InputFormFieldNormal";
import { Formik } from "formik";
import Button from "../../components/buttons/Button";
import { hp } from "../../common/util/LayoutUtil";
import * as yup from "yup";
import { StyleSheet } from "react-native";

const BvnEdit = ({ navigation }: CommonScreenProps<"BvnEditName">) => {
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);
  const EdiNameValidationSchema = yup.object().shape({
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
  });
  return (
    <>
      <Formik
        validationSchema={EdiNameValidationSchema}
        initialValues={{
          firstname: "",
          lastname: "",
        }}
        onSubmit={(values) => {
          navigation.navigate("StatusScreen", {
            status: "Successful",
            statusIcon: "Success",
            statusMessage:
              "   You have successfully changed your Aza account name",
            navigateTo: "Home",
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

            <Button
              title="Continue"
              onPressButton={handleSubmit}
              styleText={{}}
              style={[CommonStyles.container, { bottom: hp(45) }]}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </>
  );
};

export default BvnEdit;
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
