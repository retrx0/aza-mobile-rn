import React, { useState } from "react";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { View as View, Text as Text } from "../../../../theme/Themed";
import Colors from "../../../../constants/Colors";
import { SignUpScreenProps } from "../../../../types/types.navigation";
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
import CustomPicker from "../../../../components/dropdown/CustomPicker";
import { getAppTheme } from "../../../../theme";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { create9PSBWallet } from "../../../../api/account";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { toastError } from "../../../../common/util/ToastUtil";
import {
  addUserBvnThunk,
  getUserAccountDetails,
} from "../../../../redux/slice/userSlice";
import DatePicker from "@react-native-community/datetimepicker";

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

  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  const signUpValidationSchema = yup.object().shape({
    firstname: yup.string().required("Firstname is required"),
    surname: yup.string().required("Surname is required"),
    gender: yup
      .number()
      // .required("Please select a gender")
      .oneOf([0, 1]),
  });
  const [dob, setDOB] = useState<Date>(new Date());
  const [isButtonLoading, setButtonLoading] = useState(false);
  const insets = useSafeAreaInsets();
  const selectedTheme = useAppSelector(selectAppTheme);
  const [bvn, setBvn] = useState("");

  return (
    <>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          firstname: "",
          surname: "",
          gender: "male",
        }}
        onSubmit={(values) => {
          dispatch(
            setNewUser({
              firstName: values.firstname,
              lastName: values.surname,
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
        }}>
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
              onChangeText={handleChange("surname")}
              onBlur={handleBlur("surname")}
              value={values.surname}
              type="surname"
              formikProps={{
                errors: errors.surname,
                touched: touched.surname,
              }}
              autoFocus={false}
            />
            <TextHeader label="Gender" style={[CommonStyles.genderstyle]} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "90%",
                backgroundColor: Colors[appTheme].backgroundSecondary,
                alignSelf: "center",
                paddingHorizontal: wp(10),
                borderRadius: 5,
                marginTop: hp(7),
                paddingVertical: hp(15),
                justifyContent: "space-between",
              }}>
              <CustomPicker
                label="Select Item"
                data={[
                  { label: "Male", value: 0 },
                  { label: "Female", value: 1 },
                ]}
                onSelect={(gender) => {
                  handleChange("gender")(String(gender.value));
                }}
              />
              {errors.gender && touched.gender && (
                <Text style={CommonStyles.errorText}>{errors.gender}</Text>
              )}
            </View>

            <Button
              title="Continue"
              onPressButton={handleSubmit}
              styleText={{}}
              style={[CommonStyles.container, { bottom: hp(45) }]}
              disabled={bvn.length < 11 && !isValid}
            />
          </>
        )}
      </Formik>
    </>
  );
};

export default SignUpProfile;
